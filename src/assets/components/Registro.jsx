import React from 'react';
import Alert from "./Alert";
import Formulario from "./Formulario";
import SocialButton from "./SocialButton";

const Registro = ({ error, setError, success, setSuccess }) => {
  return (
    <>
      <h1>Crear tu cuenta</h1>
      <SocialButton facebook={"facebook"} />
      <SocialButton github={"github"} />
      <SocialButton linkedin={"linkedin"} />
      <Formulario setError={setError} setSuccess={setSuccess} />
      <Alert error={error.error} msg={error.msg} color={error.color} success={success} />
    </>
  );
}

export default Registro;
