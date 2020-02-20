import React, {useContext} from "react";
import "firebase/auth";
/* import { useFirebaseApp, useUser } from "reactfire";
import Context from "../../states/context"; */
import './style.css';
import FileUpload from "../FileUpload";
import Context from "../../states/context";
import {Link} from 'react-router-dom';

const InstitutionProfile =()=>{

 const {  dispatch } = useContext(Context);
  //const firebase = useFirebaseApp();

  const onChange = event => {
    dispatch({
      type: "saveUserInformation",
      field: event.target.name,
      value: event.target.value
    });
  };


return(
  <div className='containerInstitutionProfile col-9'>

    <section className='title'>
      <h2>Perfil Institución</h2>
      
    </section>

    <div className='contDatos'>
      <section className='imgPerfilInst'>
        <FileUpload/>
      </section>

      <div className='modification'> <img href='' alt=''></img></div>

      <div className='institutionData '>

        <img href='' alt=''></img>
        <h2 className='subtitle'>Datos Institución </h2>
        <section className='fileinfo1'>
          <section className='fileinfo1-1'>
            <p>Nombre de la Institución</p> 
            <input className='input-text'type='text' name='nameoftheinstitution' onChange={onChange}/>
          </section>
          <section className='fileinfo1-2'>
            <p>Razón Social</p> 
            <input className='input-text' type='text' name='businessname' onChange={onChange}/>
          </section>
        </section>

        <section className='fileinfo2'>
          <section className='fileinfo2-1'>
            <p>Dirección</p>
            <input className='input-text' type='text' name='address' onChange={onChange}/>
          </section>
          <section className='fileinfo2-2'> 
            <p>Ciudad</p>
            <input  className='input-text' type='text' name='city' onChange={onChange}/>
          </section>  
          <section className='fileinfo2-3'>
            <p>País</p>
            <input className='input-text' type='text' name='country' onChange={onChange}/>
          </section>  
        </section>

        <section className='fileinfo3'>
          <section className='fileinfo3-1'>
            <p>Fecha de Registro (No editable)</p>
            <input className='input-date' type='date' name='registrationdate' onChange={onChange}/>
          </section>
          <section className='fileinfo3-2'>
            <p>Última modificación (No editable)</p>
            <input className='input-date' type='date' name='lastmodification' onChange={onChange}/>
          </section>
        </section>
        
        <div className='container-info'>
        <section className ='description'>
          <p>Breve descripción de la Institución</p>
          <textarea className='input-textarea'type='textarea' name='briefdescriptionoftheinstitution' onChange={onChange}/>
        </section>
        <section className='cont-analitics'>
          <section className ='google'>
            <p>Google Analytics</p>
            <input className='input-text' type='text' name='googleanalytics' onChange={onChange}></input>
          </section>

          <div className='count'> 
          <section className='counter'>
            <p className='num'>0</p>
            <p className='textcount'>Avisos</p>
          </section>  
          <section className='counter'> 
            <p className='num'>0</p>
            <p className='textcount'>Vínculos</p>
          </section>   
          <section className='counter'>
            <p className='num'>0</p>
            <p className='textcount'>Postulantes</p> 
            </section>  
          </div>
        </section>
        </div>
        <section className='buttonpag'>
          <button className='btn-atras' >Atrás</button>
          
          <button className='btn-next' > <Link to="/InformacionContacto">Siguiente</Link></button>
        </section>
      </div>
    </div>
  </div>

)

}
export default InstitutionProfile;