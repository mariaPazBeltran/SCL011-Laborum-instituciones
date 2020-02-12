import InitialState from '../states/inicialStates';
function reducer(state, action){
  switch(action.type){
    case 'rememberMe':
      const input = action.payload
      const value = input.type === 'checkbox' ? input.checked : input.value;
      return{
      ...state,
      rememberMe: value
      }
    case 'saveUserInformation':
      return{
      ...state,
      [action.field]: action.value
      }
      
      case 'reset':
        return initialState
      default:
        throw new Error();
  }
}
export default reducer;