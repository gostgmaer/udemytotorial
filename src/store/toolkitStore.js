

const initialState = { count: 0, showCounter: true };
const counterReducer = (state = initialState, action) => {
    if (action.type === "inc") {
      return { count: state.count + 1, showCounter: state.showCounter };
    }
    if (action.type === "dec") {
      return { count: state.count - 1, showCounter: state.showCounter };
    }
    if (action.type === "incr") {
      return {
        count: state.count + action.amount,
        showCounter: state.showCounter,
      };
    }
    if (action.type === "toggle") {
      return { showCounter: !state.showCounter, count: state.count };
    }
    return state;
  };