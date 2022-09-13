import {useCallback, useEffect, useState} from 'react';
import {Alert} from 'react-native';

const useQuestions = (runSound: boolean) => {
  /** Audio Variables */
  let Loser = require('../../../assets/audio/perder-incorrecto-no-valido.mp3');
  let Winner = require('../../../assets/audio/Felicitaciones.mp3');
  let Timeout = require('../../../assets/audio/tiempo_terminado.mp3');
  let Congratulations = require('../../../assets/audio/pregunta-correcta.mp3');
  let downTime: number = 15;
  const Sound = require('react-native-sound');

  /** States */
  const [time, setTime] = useState<number>(15);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [showAlertTimeout, setShowAlertTimeout] = useState<boolean>(false);
  const [showAlertError, setShowAlertError] = useState<boolean>(false);

  /** Handlers */
  const handleResponse = (res: any) => {
    if (res === 'incorrect') {
      let launchLoser = new Sound(Loser, (error: boolean) => {
        if (!error) {
          launchLoser.play();
          setShowAlertError(true);
        } else {
          Alert.alert('Falló la reproducción ...');
        }
      });
    } else {
      let launchWinner = new Sound(Winner, (error: boolean) => {
        if (!error) {
          launchWinner.play();
          setShowAlert(true);
        } else {
          Alert.alert('Falló la reproducción ...');
        }
      });
    }
  };

  const handleTimeOutSound = () => {
      let launchTimeout = new Sound(Timeout, (error: boolean) => {
        if (!error) {
          launchTimeout.play();
        } else {
          Alert.alert('Fallo la reproducción...');
        }
      });
  };

  const handleCongratulations = () => {
    let launchCongratulations = new Sound(Congratulations, (error: boolean) => {
      if(!error){
        launchCongratulations.play();
      }else{
        Alert.alert('Fallo la reproducción...');
      }
    })
  }

  /** Callbacks */
  const downTimeHandler = useCallback(() => {
    let timer = setInterval(() => {
      if (downTime === 0) {
        setShowAlertTimeout(true);
        clearInterval(timer);
      } else {
        setTime(downTime--);
      }
    }, 1000);
  }, [downTime]);

  

  useEffect(() => {
    downTimeHandler();
    setShowAlert(false);
    setShowAlertError(false);
  }, []);

  return {
    time,
    showAlert,
    showAlertTimeout,
    showAlertError,
    handleResponse,
    handleCongratulations
  };
};

export default useQuestions;
