import React from 'react';
import './style.css'


const information=()=>{

    return(
        <div className='containerInstitutionProfile col-9'>
            <section className='title'>
            <h2>Perfil Institución</h2>
            </section>
            
            <div className='institutionData1 '>
            <h2 className='subtitle'>Información de Contacto</h2>
                <section className='box-file1'>
                    <p className='p'>Correo</p>
                    <input className='input-text' name='mail'/>
                </section >
                <div className='box-file2'>
                    <section className='box-file2-2'>
                    <p className='p'>Teléfono</p>
                    <section className='phone'><input className='input-cod' placeholder='569' name='telephonecode'/> <input className='input-num' name='numberphone'/></section>
                    </section>
                    <section className='box-file2-22'>
                    <p className='p'>Teléfono Adicional (opcional)</p>
                    <section className='phone'><input className='input-cod' placeholder='569' name='telephonecodesecond'/> <input className='input-num' name='numberphonesecond'/></section>
                    </section>
                </div> 
                <section className='box.file1'>
                <p className='p'>Pagina Web</p>
                <input className='input-text' name='webpage'/>
                </section>
                <div className='box-file3'>
                    <section className='box-file2-2'>
                        <p className='p'>Facebook</p>
                        <input className='input-text' name='facebook'/>
                    </section>
                    <section className='box-file2-2'>
                        <p className='p'>Linkedin</p>
                        <input className='input-text' name='linkedin'/>
                    </section>
                </div>
                <div className='box-file4'>
                    <section className='box-file2-2'>
                        <p className='p'>Youtube</p>
                        <input className='input-text' name='youtube'/>
                    </section>
                    <section className='box-file2-2'>
                        <p className='p'>Twitter</p>
                        <input className='input-text' name='twitter'/>
                    </section>
                </div>
            
                <div className='buttonpag1'>
                <button className='btn-atras1'>Atrás</button>
                <button className='btn-next2'>Siguiente</button>
                </div>
            </div>
        </div>
    )
}
export default information;