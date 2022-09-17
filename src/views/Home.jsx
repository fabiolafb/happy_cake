import React from 'react'
import { Container } from "react-bootstrap";
import pastel from "../assets/img/pastel_home.png"

export default () => {
    return (
    <>
      <Container className="text-center">
          <h1 className="pt-5">
          Bienvenido a <span className="fw-bold">Sweet Cake</span> 
          </h1>
          <h5> El lugar de los pasteles felices </h5>
          <img src={ pastel } alt='' className='pastel' />
      </Container>
      
    </>
  )
}
