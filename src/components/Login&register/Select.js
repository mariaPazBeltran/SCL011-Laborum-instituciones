import React from 'react';
import './style.css'
import hiringRoom from '../../assets/HiringRoom.png'

const Select =()=>{
    return (
          
        <div className='login-photo'>
            
            <div className='select1'>
                <h1 className='title-select'>Sé parte de Alerta Empleos</h1>
                <p className='parraf-select'>Encuentra y conecta a tus talentos con las mejores ofertas de trabajo</p>
            </div>
            <div className='select2'>
                <button className='btn-select'>Instituciones</button>
                <button className='btn-select'>Empresas</button>
            </div>
<<<<<<< HEAD
           <div className='select3'>
            <section className='select3-1'>
                <div className='text-logo'><h3 className='title-hr'>Upgrade a </h3><img className='logoHR' src={hiringRoom} alt=''/></div>
                <p className='text-hr'>Texto explicativo de porqué la plataforma pagada es más genial</p>
                <button className='btn-hr'>Ver planes</button>
            </section>
            <section className='select3-2'>
                <p className='links'>Conoce más</p>
                <p className='links'>FAQ</p>
                <a href="https://portalu.alertaempleos.com/politica-de-privacidad" className='links'>Privacidad</a>
                <a href="https://portalu.alertaempleos.com/terminos-y-condiciones" className='links'>Términos y Condiciones</a>
            </section>
            </div>
=======
            
           <div className='select3'>
            <section className='select3-1'>
                <div className='text-logo'><h3 className='title-hr'>Upgrade a </h3><img className='logoHR' src={hiringRoom} alt=''/></div>
                <p className='text-hr'>Texto explicativo de porqué la plataforma pagada es más genial</p>
                <button className='btn-hr'>Ver planes</button>
            </section>
            <section className='select3-2'>
                <p className='links'>Conoce más</p>
                <p className='links'>FAQ</p>
                <p className='links'>Privacidad</p>
                <p className='links'>Términos y Condiciones</p>
            </section>
            </div>
<<<<<<< HEAD

>>>>>>> css de el componente login
=======
>>>>>>> CSS del registro y del login listo
        </div>
    )
}
export default Select;