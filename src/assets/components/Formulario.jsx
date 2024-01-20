import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Formulario = ({ setError, setSuccess }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const validarDatos = (e) => {
    e.preventDefault();

    const { nombre, email, password, confirmPassword } = formData;
    const ValidacionDatos = !nombre || !email || !password || !confirmPassword;
    const ValidarPassword = password !== confirmPassword;

    if (ValidacionDatos) {
      setError({
        error: true,
        msg: "Es necesario completar todos los campos",
        color: "warning",
      });
      setSuccess(false);
    } else if (ValidarPassword) {
      setError({
        error: true,
        msg: "Contraseñas no coinciden, intenta de nuevo",
        color: "danger",
      });
      setSuccess(false);
    } else {
      setError({
        error: false,
        msg: "Gracias por registrar tu cuenta",
        color: "success",
      });
      setSuccess(true);

      // Limpiar el formulario después de un registro exitoso
      setFormData({
        nombre: "",
        email: "",
        password: "",
        confirmPassword: ""
      });

      // Agregar console.log para verificar que success se ha actualizado correctamente
      console.log("success se ha actualizado a true:", true);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const formStyle = {
    paddingTop: '30px',
  };

  return (
    <Form
      style={formStyle}
      onSubmit={(e) => validarDatos(e)}
    >
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Control
          name="nombre"
          type="text"
          placeholder="Ingresa tu nombre"
          value={formData.nombre}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          name="email"
          type="email"
          placeholder="tuemail@ejemplo.com"
          value={formData.email}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control
          name="password"
          type="password"
          placeholder="Contraseña"
          value={formData.password}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicVerifyPassword">
        <Form.Control
          name="confirmPassword"
          type="password"
          placeholder="Confirma tu contraseña"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
      </Form.Group>

      <Button variant="success" type="submit">
        Registrarse
      </Button>
    </Form>
  );
};

export default Formulario;
