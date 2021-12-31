import {
  Container,
  Row,
  Col,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import LoginNavBar from "./LoginNavBar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../../styleSheets/signUpLogInStyle.css";

const SignUp = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  useEffect(() => {
    console.log(name, email, password)
  }, [name, password, email])

  
  return (
      <div className="d-flex align-items-center">
      <Container className="intro-container mt-5">
        <Container className="mt-5">
          <Row className="justify-content-center align-items-center">
            <Col sm={12} md={8} lg={6} className="bordered-login p-3">
              <Row>
                <Col>
                  <h4>Sign up</h4>
                </Col>
              </Row>
              <Row>
                <Col>
                  <InputGroup className="mb-3">
                  <InputGroup.Text className="justify-content-center" id="basic-addon1"><span>Name</span></InputGroup.Text>                    
                  <FormControl
                      placeholder="Username"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      onChange={(e) => {setName(e.currentTarget.value)}}
                      value={name}
                    />
                  </InputGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <InputGroup className="mb-3">
                  <InputGroup.Text className="justify-content-center" id="basic-addon1"><span>Email</span></InputGroup.Text>                    
                  <FormControl
                      placeholder="input email"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      onChange={(e) => {setEmail(e.currentTarget.value)}}
                      value={email}
                    />
                  </InputGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <InputGroup className="mb-3">
                    <InputGroup.Text className="justify-content-center" id="basic-addon1"><span>Password</span></InputGroup.Text>
                    <FormControl
                    type="password"
                      placeholder="enter password"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      onChange={(e) => {setPassword(e.currentTarget.value)}}
                      value={password}
                    />
                  </InputGroup>
                </Col>
              </Row>

        <Row className="justify-content-center">
          <Col sm={6}>
            <div className="d-flex justify-content-center">
              <Button as="Link">Sign Up</Button>
            </div>
          </Col>
        </Row>

            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default SignUp;
