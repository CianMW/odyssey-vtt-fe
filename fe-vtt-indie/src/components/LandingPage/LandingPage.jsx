import { Container, Row , Col, Button} from "react-bootstrap"
import LoginNavBar from "../login/LoginNavBar"
import { Link } from "react-router-dom"
import "../../styleSheets/landingPageStyle.css"


const LandingPage = () => {

    return(
    
        <div id="overflow-cutoff">

        <LoginNavBar/> 

        <Container className="intro-container background-fixed p-0 m-0" fluid>

            <Row>
                <Col sm="6">
                    <div className="d-flex justify-content-center">
                        <Button as="Link">Log In</Button>
                    </div>
                </Col>
                <Col sm="6">
                    <div className="d-flex justify-content-center">
                        <Button as="Link">Sign Up</Button>
                    </div>
                </Col>
            </Row>
        </Container>
        </div>
        
    )
}

export default LandingPage