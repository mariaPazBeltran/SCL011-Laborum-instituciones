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
      case 'getLocalStorage':
        return{
          ...state,
          email: action.payload.email,
          password: action.payload.password,
          rememberMe: action.payload.rememberMe
        }
      case 'uploadFile':
       
       return{
        ...state,
        picture: action.payload
       }
       case 'uploadFile2':
       
       return{
        ...state,
        picture2: action.payload
       }
       case 'getLocalStorageImg':
       return{
        ...state,
        picture: action.payload.logoInstitucion,
        picture2:action.payload.logoInicio
       }
       case 'backgroundColor':
         return{
           ...state,
           background: action.payload,
           showColorPicker: false
         }
        case 'showColor':
          return{
            ...state,
            showColorPicker: true
          }
          
      case 'reset':
        return InitialState
      
      default:
        throw new Error();
  }
}
export default reducer;