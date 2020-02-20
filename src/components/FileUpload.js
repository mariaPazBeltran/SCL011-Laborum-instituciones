import React, { useContext, useEffect } from 'react';
//import firebase from 'firebase';
import { useFirebaseApp} from "reactfire";
import Context from '../states/context';
import "firebase/storage";
import './FileUpload.css'
import ColorPicker from './perfil/ColorPicker';


const FileUpload =()=>{
  const {state, dispatch} = useContext(Context)
  const firebase = useFirebaseApp();

  useEffect(() => {
    
    const logoInstitucion = localStorage.getItem("picture")
    const logoInicio=localStorage.getItem("picture2")
    
    dispatch({
      type: "getLocalStorageImg",
      payload: { logoInstitucion, logoInicio }
    });

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
  dispatch({type:'uploadFile2', payload: url2})
  
  localStorage.setItem('picture2', url2)
 })
}
const showColor = () => {
  dispatch({type:'showColor'})
}

  return(
    <div className='file_container'>

<img  className='uno' src={state.picture} alt="logo"/>
      
      <input className='uno' type="file"
      onChange={upload} />
<h2 className='titleimgPerfilInst'>Sube tu logo</h2>
<p className='textimgPerfilInst'>Esta foto aparecerá en tu perfil. Debe medir 235px x 65px</p>
<button onClick={showColor}>
<img href='' alt='color_picker'></img>
</button>
{state.showColorPicker && <ColorPicker/>}
<h2 className='titleimgPerfilInst'>Escoge color</h2>
<p className='textimgPerfilInst'>Se sugiere que sea el color corporativo </p>

<img  className='dos' src={state.picture2} alt="logo2"/>
<input className='dos' type="file"
onChange={upload2} />


<h2 className='titleimgPerfilInst'>Sube tu foto de inicio</h2>
<p className='textimgPerfilInst'>Esta foto aparecerá en tu login de bolsa de trabajo. Debe medir 975px x 720px</p>

    </div>
  )

}
export default FileUpload;









