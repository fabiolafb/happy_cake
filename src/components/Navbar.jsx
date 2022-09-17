import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo_pastel.png"

export default function Navigation() {
  return (
    <>
      <Navbar bg="" variant="light" className="color_navbar ">
        <Container className="justify-content-between">
          <div className="menu_principal">
            <Link to="/" className="text-dark ms-3 text-decoration-none">
              🏠Home
            </Link>
            <Link to="/contacto" className="text-dark ms-3 text-decoration-none">
              ✉Contacto
            </Link>
          </div>
          <div className="div_logo  ms-5">
            <Link to="/" className="text-dark ms-3 text-decoration-none">
              <Navbar.Brand className="m-1">Sweet Cake
              <img src={logo} alt="" className="logo_navbar" /></Navbar.Brand>
            </Link> 
          </div>
        </Container>
      </Navbar>
    </>
  );
}