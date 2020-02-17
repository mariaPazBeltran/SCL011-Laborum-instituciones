import Context from '../states/context';
import React, {useReducer} from 'react';
import reducer from '../states/reducer';
<<<<<<< HEAD
import InitialState from './inicialStates';

const ProviderContext = props =>{
  const [state, dispatch] = useReducer(reducer, InitialState)
    return (
    <Context.Provider value ={{state, dispatch}}>
      {props.children}
    </Context.Provider>     
=======
import initialState from './inicialStates';


const ProviderContext =props=>{

  const[state, dispatch]=useReducer(reducer, initialState)
    return (
    <Context.Provider value ={{state, dispatch}}>{props.children}</Context.Provider>
     
>>>>>>> becbae9224730426a8fe2f51b585b3696d73ca91
    );
};
export default ProviderContext; 