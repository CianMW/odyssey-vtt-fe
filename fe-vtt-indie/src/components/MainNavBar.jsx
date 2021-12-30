import {Container, Navbar, Nav} from "react-bootstrap"
import "../styleSheets/mainNavBarStyle.css"
const MainNavBar = () => {


    return(
        <>
        <Container className="p-0" id="navbar-container" fluid>
          <Navbar id="main-navbar" variant="light" >
            <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link className="linked" href="#home">Home <i class="bi bi-caret-down-fill"></i></Nav.Link>
            <Nav.Link  className="linked" href="#features">Features <i class="bi bi-caret-down-fill"></i></Nav.Link>
            <Nav.Link className="linked"  href="#pricing">Pricing <i class="bi bi-caret-down-fill"></i></Nav.Link>
            </Nav>
            </Container>
        </Navbar>
     </Container>
        </>
    )
}

export default MainNavBar