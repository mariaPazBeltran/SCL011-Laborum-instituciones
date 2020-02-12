import initialState from '../states/inicialStates';
function reducer(state, action){
  switch(action.type){
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