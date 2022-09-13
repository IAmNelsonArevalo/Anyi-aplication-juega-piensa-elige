import useCreateSelector from '../createSelector';

const useLoginSelectors = () => {
  // Constructor
  const {createSelector} = useCreateSelector();

  const loginSelector = createSelector(
    (state: any) => state.login,
    (login: any) => login,
  );

  const level1Selector = createSelector(
    (state: any) => state.level1,
    (level1: any) => level1,
  );

  const levelsSelector = createSelector(
    (state: any) => state.levels,
    (levels: any) => levels,
  );

  return {
    loginSelector,
    level1Selector,
    levelsSelector,
  };
};

export default useLoginSelectors;
