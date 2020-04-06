import BUY_CAKE from './cakeActions';

const initialState = {
  numOfCakes: 200
}

const cakeReducer = (state = initialState, action ) => {
  switch(action.type) {
    case BUY_CAKE: return {
      ...state,
      numOfCakes: state.numOfCakes -1
    }
    default: return state
  }
}

export default cakeReducer;