import React from 'react'
import Header from '../independent/Header';
import Sidebar from '../independent/Sidebar';
import Footer from '../independent/Footer';
import InstitutionProfile from './InstitutionProfile';

const Profile=()=>{
    return (
       <React.Fragment>
            <Header/>
            <Sidebar/>
            <InstitutionProfile/>
            <Footer/>
        </React.Fragment>
    );
}

export default Profile;