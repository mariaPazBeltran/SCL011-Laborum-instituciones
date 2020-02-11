import initialState from '../states/inicialStates';
function reducer(state, action){
  switch(action.type){
    case 'register':
     const dehe= action.payload.email
      return{
      ...state,
      email: dehe
      return{
      }
      case 'login':
        return{
          
        }
      case 'reset':
        return initialState
      default:
        throw new Error();
  }
}
export default reducer;