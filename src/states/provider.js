import Context from '../states/context';
import React, {useReducer} from 'react';
import reducer from '../states/reducer';
import initialState from './inicialStates';


const ProviderContext = props =>{

  const[state, dispatch]=useReducer(reducer, initialState)
    return (
    <Context.Provider value ={{state, dispatch}}>
      {props.children}
      </Context.Provider>
     
    );
};
export default ProviderContext; 