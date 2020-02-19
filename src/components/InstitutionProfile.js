import React from "react";
import "firebase/auth";
/* import { useFirebaseApp, useUser } from "reactfire";
import Context from "../../states/context"; */
import './InstitutionProfile.css'
import FileUpload from "./FileUpload";

const InstitutionProfile =()=>{


  
return(

<div className='containerInstitutionProfile'>


  <h2>Perfil Institución</h2>
  <div className='imgPerfilInst col-1'>
<FileUpload/>
    {/* <div className='logo'>   */}
{/*   
    <h2 className='titleimgPerfilInst'>Sube tu logo</h2>
    <p className='textimgPerfilInst'>Esta foto aparecerá en tu perfil. Debe medir 235px x 65px</p>
    {/* <div className='color'> 
    <img href='' alt=''></img>
    <h2 className='titleimgPerfilInst'>Escoge color</h2>
    <p className='textimgPerfilInst'>Se sugiere que sea el color corporativo </p>
     <div className='inicio'>  
    <img href='' alt=''></img>
    <h2 className='titleimgPerfilInst'>Sube tu foto de inicio</h2>
    <p className='textimgPerfilInst'>Esta foto aparecerá en tu login de bolsa de trabajo. Debe medir 975px x 720px</p> */}

  </div>

  <div className='modification'> <img href='' alt=''></img></div>

  <div className='institutionData '>

    <img href='' alt=''></img>
    <div className='fileinfo1'>
    <label>Nombre de la Institución</label>
    <input type='text'></input>
    <label>Razón Social</label>
    <input type='text'></input>
    </div>
    <div className='fileinfo2'>
    <label>Dirección</label>
    <input type='text'></input>
    <label>Ciudad</label>
    <input type='text'></input>
    <label>País</label>
    <input type='text'></input>
    </div>
    <div className='fileinfo3'>
    <label>Fecha de Registro (No editable)</label>
    <input type='date'></input>
    <label>Última modificación (No editable)</label>
    <input type='date'></input>
    </div>
    <hr/>
    <div className ='decription'>
    <label>Breve descripción de la Institución</label>
    <input type='textarea'></input>
    </div>
    <div className ='google'>
    <label>Google Analytics</label></div>
    <input type='text'></input>
    <div className='count'> 
    <p className='num'>0</p>
    <p className='textcount'>Avisos</p>
    <p className='num'>0</p>
    <p className='textcount'>Vínculos</p>
    <p className='num'>0</p>
    <p className='textcount'>Postulantes</p> 
    </div>
  </div>
<div className='buttonpag'><button>Atrás</button> <button>Siguiente</button></div>
</div>

)

}
export default InstitutionProfile;