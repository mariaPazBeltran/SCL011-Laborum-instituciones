import React from 'react'
import Header from '../independent/Header';
import Sidebar from '../independent/Sidebar';
import Footer from '../independent/Footer';
import InstitutionProfile from './InstitutionProfile';


const Profile=()=>{
    return (
       <div>
            <Header/>
            <Sidebar/>
            <InstitutionProfile/>
            <Footer/>
        </div>
    );
}

export default Profile;