import useApi from '../../../api';
import {useSelector} from 'react-redux';
import useModels from '../../../models';
import {
  ICallback,
  ISetLevel,
  IUseNavigation,
} from '../../../models/interfaces/general';
import {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {IActionLogout} from '../../../models/interfaces/login';

const useWelcome = () => {
  /** Navigation */
  const navigation = useNavigation<IUseNavigation>();

  /** Selectors */
  const {useSelectors} = useModels();
  const {useLoginSelectors} = useSelectors();
  const {loginSelector, levelsSelector} = useLoginSelectors();
  const {user, token, fullname} = useSelector(loginSelector);
  const { level2, level3 } = useSelector(levelsSelector);

  /** Actions */
  const {useActions} = useApi();
  const {dispatch, useLoginActions, useGeneralAction} = useActions();
  const {actGetLevels, actSetLevels } = useGeneralAction();
  const {actLogout} = useLoginActions();

  /** Handlers */
  const logout = () => {
    const request: IActionLogout = {
      onSuccess: () => {
        navigation.navigate('Home');
      },
      onError: (error: any) => console.log(error),
      fullname: fullname,
    };

    dispatch(actLogout(request));
  };

  const setLevel = (levelId: number) => {
    const request: ISetLevel = {
      onSuccess:() => {
        const request: ICallback = {
          onError: (error: any) => console.log(error),
          onSuccess: (data: any) => console.log(data),
        };
        dispatch(actGetLevels(request));
      },
      onError: (error:any) => console.log(error),
      levelId: levelId
    };

    dispatch(actSetLevels(request)) 
  };

  /** Effects */
  useEffect(() => {
    const request: ICallback = {
      onError: (error: any) => console.log(error),
      onSuccess: (data: any) => console.log(data),
    };

    dispatch(actGetLevels(request));
  }, [dispatch]);

  return {
    user,
    logout,
    level2,
    level3,
    navigation,
    token,
    setLevel
  };
};

export default useWelcome;
