import InitialState from '../states/inicialStates';
function reducer(state, action){
  switch(action.type){
    case 'rememberMe':
      const input = action.payload
      const value = input.type === 'checkbox' ? input.checked : input.value;
     console.log(action.payload)
      return{
      ...state,
      rememberMe: value
      }
    
      case 'reset':
        return InitialState
      default:
        throw new Error();
  }
}
export default reducer;