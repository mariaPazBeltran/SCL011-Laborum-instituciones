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
            
           
            <div className='select4'>
                <h3>Upgrade a </h3><img className='logoHR' src={hiringRoom} alt=''/>
                <p>Texto explicativo de porqué la plataforma pagada es más genial</p>
                <button>Ver planes</button>
            </div>
            <div className='select3'>
                <p className='links'>Conoce más</p>
                <p className='links'>FAQ</p>
                <p className='links'>Privacidad</p>
                <p className='links'>Términos y Condiciones</p>
            </div>

        </div>
    )
}
export default Select;