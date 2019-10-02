export const createProject = project => {
  return (dispatch, getState) => {
    // ******************************************************
    // тут должн быть асинхранный код обращения к базе данных
    // ******************************************************

    dispatch({ type: 'CREATE_PROJECT', project });
  };
};
