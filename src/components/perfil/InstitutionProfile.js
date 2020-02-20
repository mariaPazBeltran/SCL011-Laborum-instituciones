import React from "react";
import "firebase/auth";
/* import { useFirebaseApp, useUser } from "reactfire";
import Context from "../../states/context"; */
import './style.css';
import FileUpload from "./FileUpload";

const InstitutionProfile =()=>{

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
            <p className='p-1'>Nombre de la Institución</p> 
            <input className='input-text'type='text' name='nameoftheinstitution'/>
          </section>
          <section className='fileinfo1-2'>
            <p className='p-1'>Razón Social</p> 
            <input className='input-text' type='text' name='businessname'/>
          </section>
        </section>

        <section className='fileinfo2'>
          <section className='fileinfo2-1'>
            <p className='p-1'>Dirección</p>
            <input className='input-text' type='text' name='address'/>
          </section>
          <section className='fileinfo2-2'> 
            <p className='p-1'>Ciudad</p>
            <input  className='input-text' type='text' name='city'/>
          </section>  
          <section className='fileinfo2-3'>
            <p className='p-1'>País</p>
            <input className='input-text' type='text' name='country'/>
          </section>  
        </section>

        <section className='fileinfo3'>
          <section className='fileinfo3-1'>
            <p className='p-1'>Fecha de Registro (No editable)</p>
            <input className='input-date' type='date' name='registrationdate'/>
          </section>
          <section className='fileinfo3-2'>
            <p className='p-1'>Última modificación (No editable)</p>
            <input className='input-date' type='date' name='lastmodification'/>
          </section>
        </section>
        
        <div className='container-info'>
        <section className ='description'>
          <p className='p-1'>Breve descripción de la Institución</p>
          <textarea className='input-textarea'type='textarea' name='briefdescriptionoftheinstitution'/>
        </section>
        <section className='cont-analitics'>
          <section className ='google'>
            <p className='p-1'>Google Analytics</p>
            <input className='input-text' type='text' name='googleanalytics'></input>
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
          <button className='btn-atras'>Atrás</button>
          <button className='btn-next'>Siguiente</button>
        </section>
      </div>
    </div>
  </div>

)

}
export default InstitutionProfile;