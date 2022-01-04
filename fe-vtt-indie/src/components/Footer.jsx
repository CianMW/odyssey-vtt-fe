import { Container, Navbar } from "react-bootstrap"
import "../styleSheets/mainFooterStyle.css"


const MainFooter = () => {
    return(

  <Navbar bg="dark" variant="dark" fixed="bottom">
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