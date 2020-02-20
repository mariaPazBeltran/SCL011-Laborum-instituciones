import React from 'react';


const information=()=>{

    return(
        <div className='containerInstitutionProfile'>
            
            <h2 className='subtitle'>Información de Contacto</h2>
            <div>
                <section>
                <p>Correo</p>
                <input className='input-text' name='mail'/>
                </section>
                <p>Teléfono</p>
                <input className='input-cod' name='telephonecode'/> <input className='input-num' name='numberphone'/>
                <p>Teléfono Adicional (opcional)</p>
                <input className='input-cod' name='telephonecodesecond'/> <input className='input-num' name='numberphonesecond'/>
                <p>Pagina Web</p>
                <input className='input-text' name='webpage'/>
                <p>Facebook</p>
                <input className='input-text' name='facebook'/>
                <p>Linkedin</p>
                <input className='input-text' name='linkedin'/>
                <p>Youtube</p>
                <input className='input-text' name='youtube'/>
                <p>Twitter</p>
                <input className='input-text' name='twitter'/>
            </div>
            <div>
                <button className='btn-atras'>Atrás</button>
                <button className='btn-atras'>Siguiente</button>
            </div>
        </div>
    )
}
export default information;