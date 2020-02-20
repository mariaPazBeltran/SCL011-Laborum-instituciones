import './style.css'
import React, { useContext } from "react";
import "firebase/auth";
//import { useFirebaseApp } from "reactfire";
import Context from "../../states/context";
import db from "../../config/config-firebase";

const Information = () => {
  const { state, dispatch } = useContext(Context);
  //const firebase = useFirebaseApp();

  const onChange = event => {
    dispatch({
      type: "saveUserInformation",
      field: event.target.name,
      value: event.target.value
    });
  };
  const sendFirebase = () => {
    db.collection("profileInstitution")
      .add({
        nameoftheinstitution: state.nameoftheinstitution,
        businessname: state.businessname,
        address: state.address,
        city: state.city,
        country: state.country,
        registrationdate: state.registrationdate,
        lastmodification: state.lastmodification,
        briefdescriptionoftheinstitution:
        state.briefdescriptionoftheinstitution,
        googleanalytics: state.googleanalytics,
        mail: state.mail,
        telephonecode: state.telephonecode,
        numberphone: state.numberphone,
        telephonecodesecond: state.telephonecodesecond,
        numberphonesecond: state.numberphonesecond,
        webpage: state.webpage,
        facebook: state.facebook,
        linkedin: state.linkedin,
        youtube: state.youtube,
        twitter: state.twitter
      })
      .then(docRef => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(error => {
        console.error("Error adding document: ", error);
      });
  };
    return(
        <div className='containerInstitutionProfile col-9'>
            <section className='title'>
            <h2>Perfil Institución</h2>
            </section>
            
            <div className='institutionData1 '>
            <h2 className='subtitle'>Información de Contacto</h2>
                <section className='box-file1'>
                    <p className='p'>Correo</p>
                    <input className='input-text' name='mail' onChange={onChange}/>
                </section >
                <div className='box-file2'>
                    <section className='box-file2-2'>
                    <p className='p'>Teléfono</p>
                    <section className='phone'>
    <input className='input-cod' placeholder='569' name='telephonecode' onChange={onChange}/>
    <input className='input-num' name='numberphone' onChange={onChange}/></section>
                    </section>
                    <section className='box-file2-22'>
                    <p className='p'>Teléfono Adicional (opcional)</p>
                    <section className='phone'>
                      <input className='input-cod' placeholder='569' name='telephonecodesecond' onChange={onChange}/>
                        <input className='input-num' name='numberphonesecond' onChange={onChange}/></section>
                    </section>
                </div> 
                <section className='box.file1'>
                <p className='p'>Pagina Web</p>
                <input className='input-text' name='webpage' onChange={onChange}/>
                </section>
                <div className='box-file3'>
                    <section className='box-file2-2'>
                        <p className='p'>Facebook</p>
                        <input className='input-text' name='facebook' onChange={onChange}/>
                    </section>
                    <section className='box-file2-2'>
                        <p className='p'>Linkedin</p>
                        <input className='input-text' name='linkedin' onChange={onChange}/>
                    </section>
                </div>
                <div className='box-file4'>
                    <section className='box-file2-2'>
                        <p className='p'>Youtube</p>
                        <input className='input-text' name='youtube' onChange={onChange}/>
                    </section>
                    <section className='box-file2-2'>
                        <p className='p'>Twitter</p>
                        <input className='input-text' name='twitter' onChange={onChange}/>
                    </section>
                </div>
            
                <div className='buttonpag1'>
                <button className='btn-atras1'>Atrás</button>
                 <button className="btn-atras" onClick={sendFirebase}>
          {" "}
          Terminar
        </button>
                </div>
            </div>
        </div>
    )
}
export default information;
