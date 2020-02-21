import React from 'react'
import Header from '../independent/Header';
import Sidebar from '../independent/Sidebar';
import Footer from '../independent/Footer';

import Information from './infoInstitution'

const ProfileB=()=>{
    return (
       <div>
            <Header/>
            <Sidebar/>
            <Information/>
            <Footer/>
        </div>
    );
}

export default ProfileB;