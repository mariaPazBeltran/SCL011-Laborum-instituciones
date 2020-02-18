import React, { useContext } from 'react';
//import firebase from 'firebase';
import { useFirebaseApp} from "reactfire";
import Context from '../states/context';
import "firebase/storage";


const FileUpload =()=>{
  const {state, dispatch} = useContext(Context)
  const firebase = useFirebaseApp();

 
const upload=async(event)=>{
  event.preventDefault()
  //const uploadValue=  
  const picture= event.target.files[0];
  //localStorage.setItem('uploadValue',fileupload ? uploadValue:'')
  localStorage.setItem('picture', picture )
  const storageRef=  firebase.storage().ref(`/fotosInstitucion/${picture.name}`);
  await storageRef.put(picture)
  dispatch({type:'uploadFile', payload:picture})

}


  return(
    <div>
       <img with="150px" src={state.picture} alt="foto"/>
      <input type="file"
      onChange={upload}  ></input>
     
    </div>
  )

}
export default FileUpload;