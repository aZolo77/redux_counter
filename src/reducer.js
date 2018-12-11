// {Reducer} fn
const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INC':
      return state + 1;
    case 'DEC':
      return state - 1;
    case 'RND':
      return state + action.randomNum;
    // if action is unknown - return initial state
    default:
      return state;
  }
};

export default reducer;
