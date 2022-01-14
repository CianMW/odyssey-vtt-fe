import {Container, Navbar, Nav, NavDropdown} from "react-bootstrap"
import "../styleSheets/mainNavBarStyle.css"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { setBasicAuth, setLoggedIn, setUser } from "../Actions"

const MainNavBar = () => {

  const currentState = useSelector(state => state)
  const dispatch = useDispatch()

  const navigate = useNavigate()
  
  const userLogOut = async () => {
    dispatch(setLoggedIn(false))
    dispatch(setUser(""))
     dispatch(setUser(""))
     await dispatch(setBasicAuth(null))

    navigate(`/`, {replace: true})
  }

    return(
        <>
        <Container className="p-0 static-margin" id="navbar-container" fluid>
          <Navbar id="main-navbar" className="linked navbar-dark" expand="lg" fixed="top" >
            <Container className="d-flex justify-content-between">
              {/* <Link to={`/${currentState.user.info._id}` }> */}
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              {/* </Link> */}
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
             <Navbar.Collapse className="justify-content-between" id="responsive-navbar-nav">
            <Nav className="me-auto d-flex-block" navbarScroll>

            <Nav.Link className="linked" href="#home">Home </Nav.Link>
            {/* start dropdown on hover */}
        <NavDropdown className="linked" title="Games" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">My Games</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Create a New Game</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">Find a</NavDropdown.Item>
        </NavDropdown>

        <NavDropdown className="linked" title="My Account" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Messages</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Settings</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item className="d-flex justify-content-around" onClick={e => userLogOut()}><span>Logout</span><i class="bi bi-box-arrow-right"></i></NavDropdown.Item>
        </NavDropdown>

        {/* end dropdown on hover */}
            </Nav>
            </Navbar.Collapse>
            </Container>

        </Navbar>
     </Container>
        </>
    )
}

export default MainNavBar