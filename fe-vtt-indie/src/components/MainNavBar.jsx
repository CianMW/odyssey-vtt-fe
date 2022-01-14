import {Container, Navbar, Nav, NavDropdown} from "react-bootstrap"
import "../styleSheets/mainNavBarStyle.css"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"

const MainNavBar = () => {

  const currentState = useSelector(state => state)
  const dispatch = useDispatch()


    return(
        <>
        <Container className="p-0 static-margin" id="navbar-container" fluid>
          <Navbar id="main-navbar" className="linked navbar-dark" expand="lg" fixed="top" >
            <Container className="d-flex justify-content-between">
              <Link to={`/${currentState.user.info._id}` }>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
             <Navbar.Collapse className="justify-content-between" id="responsive-navbar-nav">
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