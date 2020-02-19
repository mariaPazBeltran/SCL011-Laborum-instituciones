import React from 'react';


const information=()=>{

    return(
        <div className='containerInstitutionProfile'>
            
            <h2 className='subtitle'>Información de Contacto</h2>
            <div>
                <section>
                <p>Correo</p>
                <input className='input-text'/>
                </section>
                <p>Teléfono</p>
                <input className='input-cod'/> <input className='input-num'/>
                <p>Teléfono Adicional (opcional)</p>
                <input className='input-cod'/> <input className='input-num'/>
                <p>Pagina Web</p>
                <input className='input-text'/>
                <p>Facebook</p>
                <input className='input-text'/>
                <p>Linkedin</p>
                <input className='input-text'/>
                <p>Youtube</p>
                <input className='input-text'/>
                <p>Twitter</p>
                <input className='input-text'/>
            </div>
            <div>
                <button className='btn-atras'>Atrás</button>
                <button className='btn-atras'>Siguiente</button>
            </div>
        </div>
    )
}
export default information;