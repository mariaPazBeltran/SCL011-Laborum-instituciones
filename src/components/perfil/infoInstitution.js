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

  return (
    <div className="containerInstitutionProfile">
      <h2 className="subtitle">Información de Contacto</h2>

      <div>
        <section>
          <p>Correo</p>
          <input className="input-text" name="mail" onChange={onChange} />
        </section>
        <p>Teléfono</p>
        <input className="input-cod" name="telephonecode" />{" "}
        <input className="input-num" name="numberphone" onChange={onChange} />
        <p>Teléfono Adicional (opcional)</p>
        <input className="input-cod" name="telephonecodesecond" />{" "}
        <input
          className="input-num"
          name="numberphonesecond"
          onChange={onChange}
        />
        <p>Pagina Web</p>
        <input className="input-text" name="webpage" onChange={onChange} />
        <p>Facebook</p>
        <input className="input-text" name="facebook" onChange={onChange} />
        <p>Linkedin</p>
        <input className="input-text" name="linkedin" onChange={onChange} />
        <p>Youtube</p>
        <input className="input-text" name="youtube" onChange={onChange} />
        <p>Twitter</p>
        <input className="input-text" name="twitter" onChange={onChange} />
      </div>
      <div>
        <button className="btn-atras">Atrás</button>
        <button className="btn-atras" onClick={sendFirebase}>
          {" "}
          Terminar
        </button>
      </div>
    </div>
  );
};
export default Information;
