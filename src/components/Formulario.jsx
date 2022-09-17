import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Formulario() {
  return (
    <form>
      <Form.Group className="mb-3 text-center" controlId="formBasicEmail">
        <Form.Label className='name_form'>Correo</Form.Label>
        <Form.Control type="email" placeholder="Ingrese su correo electrónico" />
      </Form.Group>
      <Form.Group className="mb-3 text-center" controlId="formBasicEmail">
        <Form.Label className='text-center' >Mensaje</Form.Label>
        <Form.Control type="text" placeholder="" />
      </Form.Group>
      <div className='text-center'>
        <Button variant="default" style={{background: "#f9a59a", color: 'white', marginTop: "1rem"}}>Enviar</Button>
      </div>
    </form>
    
  )
}
