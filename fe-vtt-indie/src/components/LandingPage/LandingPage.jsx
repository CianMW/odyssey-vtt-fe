import { Container, Row , Col, Button} from "react-bootstrap"
import LoginNavBar from "../login-signup/LoginNavBar"
import { Link } from "react-router-dom"
import "../../styleSheets/landingPageStyle.css"


const LandingPage = () => {

    return(
    
        <div className="parent-size background-cover">
            <Container className="landing-folder parent-size m-0 p-0"  >
                <Row className="header-block"></Row>

                <Row className="d-flex set-height-5 m-0 rounded background-fixed">
            <Row className="justify-content-center intro-container align-items-center">
                <Col sm={2}></Col>
                <Col sm={8}>
                    <h4 className="landing-text text-center">Bring your games to life and play with friends</h4>
                </Col>
                <Col sm={2}></Col>
            </Row>
                 <Col className="col-3 d-none d-md-block" >
                 </Col>
                <Col className="col-6" md={3}>
                    <Link to="/login">
                    <div className="d-flex justify-content-center">
                        <div className="button-red glow" as="Link"><span>
                            Log In
                            </span></div>
                    </div>
                    </Link>
                </Col>
                <Col className="col-6" md={3}>
                    <Link to="/SignUp">
                    <div className="d-flex justify-content-center">
                        <div className="button-red glow"  as="Link"><span>
                            Sign Up
                            </span></div>
                    </div>
                    </Link>
                </Col>
                <Col className="col-3 d-none d-md-block">
                </Col>
            </Row>


                <Row className=" parent-width m-0 mt-5">
                {/* <Row>
                <Col className="d-none d-sm-block col-sm-1">
                </Col> */}

                <Col id="center-landing" className=" parent-width col-12">
                <Row id="second-section" className=" parent-width p-0 m-0">
                    <Col id="left-image-holder" className=" p-0 m-0 d-flex flex-row flex-md-column align-items-center justify-content-between col-12 col-md-2">
                    <div className="d-flex d-none d-md-block landing-image">
                    </div>
                    <div className="landing-image">
                        <img className="landing-image" src="/image-files/character-sheet-icon.png"/>
                    </div>
                    <div className="landing-image">
                        <img className="landing-image" src="/image-files/d6-icon.png"/>
                    </div>
                    <div className="landing-image">
                        <img className="landing-image" src="/image-files/magic-book.png"/>
                    </div>
                    </Col>
                    <Col className="col-12 col-md-8">
                        <Row>
                            <div>
                                <h4 className="mb-5 landing-text text-center">Character sheets, Dice roll, lore</h4>
                                <h4 className="landing-text text-center">All in one place</h4>
                            </div>
                            <div id="sample-site-images" className="d-flex justify-content-center align-items-center">
                                <img className="placeholder-laptop" src="/image-files/laptop-placeholder.png"/>

                            </div>
                        </Row>
                        
                    </Col>
                    <Col id="right-image-holder" className="p-0 m-0 d-flex flex-row flex-md-column align-items-center justify-content-between col-12 col-md-2">
                    <div className="d-flex d-none d-md-block landing-image">
                    </div>
                    <div className="landing-image">
                        <img className="landing-image" src="/image-files/ruby-sword.png"/>
                    </div>
                    <div className="landing-image">
                        <img className="landing-image" src="/image-files/rule-book.png"/>
                    </div>
                    <div className="landing-image">
                        <img className="landing-image" src="/image-files/potion.png"/>
                    </div>
                    </Col>
                </Row>
                </Col>

                {/* <Col className="d-none d-sm-block col-sm-1">
                </Col>

                </Row> */}

        
        </Row>

</Container>
        </div>
        
    )
}

export default LandingPage