import React from "react";
import "firebase/auth";
/* import { useFirebaseApp, useUser } from "reactfire";
import Context from "../../states/context"; */
import './style.css';

const InstitutionProfile =()=>{
return(

  <div className='containerInstitutionProfile col-9'>

    <section className='title'>
      <h2>Perfil Institución</h2>
      
    </section>

    <div className='contDatos'>
      <section className='imgPerfilInst'>

        {/* <div className='logo'>   */}
        <img href='' alt=''></img>
        <h2 className='titleimgPerfilInst'>Sube tu logo</h2>
        <p className='textimgPerfilInst'>Esta foto aparecerá en tu perfil. Debe medir 235px x 65px</p>
        {/* <div className='color'>  */}
        <img href='' alt=''></img>
        <h2 className='titleimgPerfilInst'>Escoge color</h2>
        <p className='textimgPerfilInst'>Se sugiere que sea el color corporativo </p>
        {/* <div className='inicio'>  */}
        <img href='' alt=''></img>
        <h2 className='titleimgPerfilInst'>Sube tu foto de inicio</h2>
        <p className='textimgPerfilInst'>Esta foto aparecerá en tu login de bolsa de trabajo. Debe medir 975px x 720px</p>

      </section>

      <div className='modification'> <img href='' alt=''></img></div>

      <div className='institutionData '>

        <img href='' alt=''></img>
        <h2 className='subtitle'>Datos Institución </h2>
        <section className='fileinfo1'>
          <section className='fileinfo1-1'>
            <p>Nombre de la Institución</p> 
            <input className='input-text'type='text'/>
          </section>
          <section className='fileinfo1-2'>
            <p>Razón Social</p> 
            <input className='input-text' type='text'/>
          </section>
        </section>

        <section className='fileinfo2'>
          <section className='fileinfo2-1'>
            <p>Dirección</p>
            <input className='input-text' type='text'/>
          </section>
          <section className='fileinfo2-2'> 
            <p>Ciudad</p>
            <input  className='input-text' type='text'/>
          </section>  
          <section className='fileinfo2-3'>
            <p>País</p>
            <input className='input-text' type='text'/>
          </section>  
        </section>

        <section className='fileinfo3'>
          <section className='fileinfo3-1'>
            <p>Fecha de Registro (No editable)</p>
            <input className='input-date' type='date'/>
          </section>
          <section className='fileinfo3-2'>
            <p>Última modificación (No editable)</p>
            <input className='input-date' type='date'/>
          </section>
        </section>
        
        <div className='container-info'>
        <section className ='description'>
          <p>Breve descripción de la Institución</p>
          <textarea className='input-textarea'type='textarea'/>
        </section>
        <section className='cont-analitics'>
          <section className ='google'>
            <p>Google Analytics</p>
            <input className='input-text' type='text'></input>
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