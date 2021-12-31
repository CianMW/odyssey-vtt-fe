import {Container, Navbar, Nav, NavDropdown} from "react-bootstrap"
import "../../styleSheets/mainNavBarStyle.css"

const LoginNavBar = () => {

    return(
        <>
        <Container className="p-0" id="navbar-container" fluid>
          <Navbar id="main-navbar" className="linked navbar-dark" expand="lg" fixed="top" >
            <Container fluid>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
             <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="d-flex justify-content-center">
            <Nav.Link className="linked" href="#home"> Get Started </Nav.Link>
            <Nav.Link className="linked" href="#home"> Player Portal</Nav.Link>
            <Nav.Link className="linked" href="#home"> About </Nav.Link>
            <Nav.Link className="linked" href="#home">Contact</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
     </Container>
        </>
    )
}

export default LoginNavBar