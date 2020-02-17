import Context from '../states/context';
import React, {useReducer} from 'react';
import reducer from '../states/reducer';
import InitialState from './inicialStates';

const ProviderContext = props =>{
  const [state, dispatch] = useReducer(reducer, InitialState)
    return (
    <Context.Provider value ={{state, dispatch}}>
      {props.children}
    </Context.Provider>     
    );
};
export default ProviderContext; 