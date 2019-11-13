const initialState = {
  count: 0,
  countCounter: 0,
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
        countCounter: state.countCounter + 1
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
        countCounter: state.countCounter + 1
      };
    case 'SET_COUNTER':
      console.log('reducer counter loging SET_COUNTER');
      console.log(state);
      console.log(action);
      return {
        ...state,
        countCounter: (state.countCounter = 0),
        count: (state.count = parseInt(action.set_value)/*this is the spot to make set count from actions some how */)
      };
    /*
    case 'RESET':
      return {
        ...state,
        count: (state.count = 0)
      };
    */
    default:
      return state;
  }
}

export default counterReducer;