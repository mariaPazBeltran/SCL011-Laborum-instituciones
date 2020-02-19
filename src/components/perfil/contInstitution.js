import React from 'react'
import Header from '../independent/Header';
import Sidebar from '../independent/Sidebar';
import Footer from '../independent/Footer';
import InstitutionProfile from './InstitutionProfile';
// import Information from './infoInstitution'

const Profile=()=>{
    return (
       <div>
            <Header/>
            <Sidebar/>
            <InstitutionProfile/>
            {/* <Information/> */}
            <Footer/>
        </div>
    );
}

export default Profile;