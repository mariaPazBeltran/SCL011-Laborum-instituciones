import React, { useContext, useEffect } from 'react';
//import firebase from 'firebase';
import { useFirebaseApp} from "reactfire";
import Context from '../../states/context';
import "firebase/storage";
import './style.css'
import ColorPicker from './ColorPicker';

const FileUpload =()=>{
  const {state, dispatch} = useContext(Context)
  const firebase = useFirebaseApp();

  useEffect(() => {
    
    const logoInstitucion = localStorage.getItem("picture")
    const logoInicio=localStorage.getItem("picture2")
    if(logoInstitucion && logoInicio){
      dispatch({
        type: "getLocalStorageImg",
        payload: { logoInstitucion, logoInicio }
      });
    }
    
  }, [dispatch]);

const upload=async(event)=>{



  const picture= event.target.files[0];
  const storageRef=  firebase.storage().ref(`/fotosInstitucion/${picture.name}`);

  

  if(document.getElementsByClassName('uno')) await  storageRef.put(picture)
    storageRef.getDownloadURL().then(url => {
    dispatch({type:'uploadFile', payload: url})
    
    localStorage.setItem('picture', url)
   })


  
}
const upload2=async(event)=>{

  const picture2= event.target.files[0];
  const storageRef2=  firebase.storage().ref(`/fotosInstitucion2/${picture2.name}`);
  await  storageRef2.put(picture2)
  storageRef2.getDownloadURL().then(url2 => {
  dispatch({type:'uploadFile', payload: url2})
  
  localStorage.setItem('picture2', url2)
 })
}
const showColor = () => {
  dispatch({type:'showColor'})
}

  return(
    
  <div className='file_container'>
    
    <div className="image-upload">
      <label htmlFor='file-input'>
        <img className='one' src={state.picture} alt="logo"/>
      </label>   
        <input id='file-input' className='uno' type="file" onChange={upload} />
    </div> 
    
    <h2 className='titleimgPerfilInst'>Sube tu logo</h2>
    <p className='textimgPerfilInst'>Esta foto aparecerá en tu perfil. Debe medir 235px x 65px</p>

 <div className='picker-color'>
 <button onClick={showColor}>
    
  </button>
    {state.showColorPicker && <ColorPicker/>}
 </div>

  <h2 className='titleimgPerfilInst'>Escoge color</h2>
  <p className='textimgPerfilInst'>Se sugiere que sea el color corporativo </p>

    <div className="image-upload2">
      <label htmlFor='file-input2'>
       <img  className='one' src={state.picture2} alt="logo2"/>
      </label>
      <input id='file-input2' className='dos' type="file" onChange={upload2} />
   
    </div>

  <h2 className='titleimgPerfilInst'>Sube tu foto de inicio</h2>
  <p className='textimgPerfilInst'>Esta foto aparecerá en tu login de bolsa de trabajo. Debe medir 975px x 720px</p>

    </div>
  )

}
export default FileUpload;









