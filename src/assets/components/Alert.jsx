import React from 'react';
// import { Alert as BootstrapAlert } from 'react-bootstrap';

const Alert = ({ error, msg, color, success }) => {
  const alertStyle = {
    marginTop: '15px', // Agrega el margen superior de 15px
  };

  return (
    <>
      {error && (
        <div className={`alert alert-${color}`} role="alert" style={alertStyle}>
          {msg}
        </div>
      )}
      {success && (
        <div className="alert alert-success" role="alert" style={alertStyle}>
          {msg}
        </div>
      )}
    </>
  );
};

export default Alert;
