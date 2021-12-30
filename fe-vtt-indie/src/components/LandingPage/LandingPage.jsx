import { Container, Row , Col, Button} from "react-bootstrap"
import LoginNavBar from "../login/LoginNavBar"
import { Link } from "react-router-dom"
import "../../styleSheets/landingPageStyle.css"


const LandingPage = () => {

    return(
    
        <div id="overflow-cutoff">

        <LoginNavBar/> 

        <Container className="intro-container d-flex justify-content-center background-fixed p-0 m-0" fluid>
            <Row>

            <Row className="justify-content-center align-items-center">
                <Col sm={2}></Col>
                <Col sm={8}>
                    <h4 className="landing-info">Bring your games to life and play with friends</h4>
                </Col>
                <Col sm={2}></Col>
            </Row>

            <Row className="d-flex">
                <Col sm={4}>
                    <div className="d-flex justify-content-center">
                        <Button as="Link">Log In</Button>
                    </div>
                </Col>
                <Col sm={4}>
                </Col>
                <Col sm={4}>
                    <div className="d-flex justify-content-center">
                        <Button as="Link">Sign Up</Button>
                    </div>
                </Col>
            </Row>
            </Row>
        </Container>
        </div>
        
    )
}

export default LandingPage