import React, {useContext} from 'react';
import { ChromePicker } from 'react-color';
import Context from '../../states/context';
import './style.css'
const ColorPicker = () => {
    const {state, dispatch} = useContext(Context)
  
  const  handleChangeComplete = (color, event) => {
      dispatch({type:'backgroundColor', payload:color.hex})
       // this.setState({ background: color.hex });
      };
    return <div className='colorPicker'>
        
        <ChromePicker
    color={ state.background }
        onChangeComplete={handleChangeComplete}/>
        </div>

}

export default ColorPicker;