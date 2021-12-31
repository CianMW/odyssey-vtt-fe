import { Container, Row , Col, Button} from "react-bootstrap"
import LoginNavBar from "../login-signup/LoginNavBar"
import { Link } from "react-router-dom"
import "../../styleSheets/landingPageStyle.css"


const LandingPage = () => {

    return(
    
        <div id="overflow-cutoff">

        <Container className="intro-container d-flex justify-content-center background-fixed p-0 m-0" fluid>
            <Row>

            <Row className="justify-content-center align-items-center">
                <Col sm={2}></Col>
                <Col sm={8}>
                    <h4 className="landing-text">Bring your games to life and play with friends</h4>
                </Col>
                <Col sm={2}></Col>
            </Row>

            <Row className="d-flex">
                <Col sm={4}>
                    <Link to="/logIn">
                    <div className="d-flex justify-content-center">
                        <div className="glow">
                        <div className="button-red" as="Link"><span>
                            Log In
                            </span></div>
                        </div>
                    </div>
                    </Link>
                </Col>
                <Col sm={4}>
                </Col>
                <Col sm={4}>
                    <Link to="/SignUp">
                    <div className="d-flex justify-content-center">
                        <div className="button-red"  as="Link"><span>
                            Sign Up
                            </span></div>
                    </div>
                    </Link>
                </Col>
            </Row>
            </Row>
        </Container>
        </div>
        
    )
}

export default LandingPage