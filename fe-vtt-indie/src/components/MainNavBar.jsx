import {Container, Navbar, Nav, NavDropdown} from "react-bootstrap"
import "../styleSheets/mainNavBarStyle.css"

const MainNavBar = () => {


    return(
        <>
        <Container className="p-0" id="navbar-container" fluid>
          <Navbar id="main-navbar" className="linked navbar-dark" expand="lg" >
            <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
             <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" navbarScroll>
            <Nav.Link className="linked" href="#home">Home <i class="bi bi-caret-down-fill"></i></Nav.Link>
            {/* start dropdown on hover */}
        <NavDropdown className="linked" title="Games" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">My Games</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Create a New Game</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Find a Game
          </NavDropdown.Item>
        </NavDropdown>

        {/* end dropdown on hover */}
            </Nav>
            </Navbar.Collapse>
            </Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
             <Navbar.Collapse id="responsive-navbar-nav">
        <Nav.Link className="linked" href="#home">My Account<i class="bi bi-caret-down-fill"></i></Nav.Link>
            </Navbar.Collapse>

        </Navbar>
     </Container>
        </>
    )
}

export default MainNavBar