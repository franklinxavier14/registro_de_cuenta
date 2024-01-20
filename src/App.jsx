import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Registro from './assets/components/Registro';

function App() {
  const [error, setError] = useState({
    error: false,
    msg: "",
    color: "",
  });
  const [success, setSuccess] = useState(false);

  return (
    <>
      <Registro error={error} setError={setError} success={success} setSuccess={setSuccess} />
    </>
  );
}

export default App;
