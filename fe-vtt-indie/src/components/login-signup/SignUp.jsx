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

  // return (
  //     <div>
  //       {/* Hello world */}
  //       <div className="awesome" style={{}}>
  //         <div className="form_container">
  //           <div className="title_container">
  //             <h2>Responsive Registration Form</h2>
  //           </div>
  //           <div className="row clearfix">
  //             <div className>
  //               <form>
  //                 <div className="input_field"> <span><i aria-hidden="true" className="fa fa-envelope" /></span>
  //                   <input type="email" name="email" placeholder="Email" required />
  //                 </div>
  //                 <div className="input_field"> <span><i aria-hidden="true" className="fa fa-lock" /></span>
  //                   <input type="password" name="password" placeholder="Password" required />
  //                 </div>
  //                 <div className="input_field"> <span><i aria-hidden="true" className="fa fa-lock" /></span>
  //                   <input type="password" name="password" placeholder="Re-type Password" required />
  //                 </div>
  //                 <div className="row clearfix">
  //                   <div className="col_half">
  //                     <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user" /></span>
  //                       <input type="text" name="name" placeholder="First Name" />
  //                     </div>
  //                   </div>
  //                   <div className="col_half">
  //                     <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user" /></span>
  //                       <input type="text" name="name" placeholder="Last Name" required />
  //                     </div>
  //                   </div>
  //                 </div>
  //                 <div className="input_field radio_option">
  //                   <input type="radio" name="radiogroup1" id="rd1" />
  //                   <label htmlFor="rd1">Male</label>
  //                   <input type="radio" name="radiogroup1" id="rd2" />
  //                   <label htmlFor="rd2">Female</label>
  //                 </div>
  //                 <div className="input_field select_option">
  //                   <select>
  //                     <option>Select a country</option>
  //                     <option>Option 1</option>
  //                     <option>Option 2</option>
  //                   </select>
  //                   <div className="select_arrow" />
  //                 </div>
  //                 <div className="input_field checkbox_option">
  //                   <input type="checkbox" id="cb1" />
  //                   <label htmlFor="cb1">I agree with terms and conditions</label>
  //                 </div>
  //                 <div className="input_field checkbox_option">
  //                   <input type="checkbox" id="cb2" />
  //                   <label htmlFor="cb2">I want to receive the newsletter</label>
  //                 </div>
  //                 <input className="button" type="submit" defaultValue="Register" />
  //               </form>
  //             </div>
  //           </div>
  //         </div>
  //       </div>"border: 1px solid red"&gt;
  //       <label htmlFor="name">Enter your name: </label>
  //       <input type="text" id="name" />
  //       <p>Enter your HTML here</p>
  //     </div>
  //   );
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
