const initState = {
  projects: [
    {
      id: '1',
      title: 'a;gqogihasdogijqer',
      content: '1111111 sfgdsf0dsgg[dfgdfbsdgfraerg'
    },
    {
      id: '2',
      title: 'edgf3e4ogihasergtfwergwetadogijqer',
      content: '22222 fdgwe wrtghwe'
    },
    {
      id: '3',
      title: 'a;asdqwertqwefasq34dfgdfg',
      content: '3333333 dfg0dsgg[dfgdfbsdgfraerg'
    }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('Create Project: ', action.project);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
