import { Container, Navbar } from "react-bootstrap"
import "../styleSheets/mainFooterStyle.css"


const MainFooter = () => {
    return(

  <Navbar className="parent-width" bg="dark" variant="dark" >
    <Container>
      <Navbar.Brand href="#home">
        <span>Odyssey
            <small> VTT</small>
            </span>
      </Navbar.Brand>
    </Container>
  </Navbar>
        
    )
}

export default MainFooter