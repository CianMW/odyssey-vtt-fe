import { Container, Navbar } from "react-bootstrap"
import "../styleSheets/mainFooterStyle.css"


const MainFooter = () => {
    return(
        <Container fluid className="footer" id="mainFooter">
        <Navbar fixed="bottom" />
        </Container>
    )
}

export default MainFooter