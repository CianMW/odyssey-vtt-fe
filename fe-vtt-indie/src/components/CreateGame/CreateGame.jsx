import MainNavBar from "../MainNavBar.jsx"
import {
    Container,
    Row,
    Col,
    Button,
    InputGroup,
    FormControl,
    Form,
  } from "react-bootstrap";
import "../../styleSheets/homeStyle.css"
import { useState } from "react"
import { Link , useLocation} from "react-router-dom"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { setLocation } from "../../Actions/index.js";
import DefaultInfo from "./DefaultInfo.jsx";
import BasicFantasy from "./BasicFantasy.jsx";


const CreateGame = () => {

    const [gameName, setGameName] = useState("")
    const [baseGame, setBaseGame] = useState(false)
    const [characterSheet, setCharacterSheet] = useState("")
    const state = useSelector(state => state)
    const dispatch = useDispatch()


    const createGame = async () => {
      const gameData = {
        name: gameName,
        baseGame: baseGame,
        characterSheet: characterSheet,
      }

      try{
        const response = await fetch("http://localhost:3150/game/",{
         method: 'POST',
         headers: {
          'Content-Type': 'application/json',
           authorization: state.auth.b64Auth
          },
          body: JSON.stringify(gameData),
        } )
        if (response.ok) {
          const data = await response.json()
          console.log("correct!!!!", data)
        } else {
          console.log("Problem!!!!")
        }
      } catch(error) {
        console.log(error)
      }
    }
    return(
        <Container className="parent-wide parent-height align-items-center" >
          <Container >

          <Row className="justify-content-center ">
            <Col>
                <h2>Create a New Game</h2>
            </Col>
          </Row>
          </Container>

        <Container className="parent-wide mt-3 background-grayed " fluid>
        <Row className="mb-4">
        <Col sm={12} md={6}>
          <Form>
          <Col sm={10}>

              <Row className="justify-content-center">
                    <h3 className="d-flex align-text-left">Name</h3>
                    <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Game Name"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        onChange={(e) => {setGameName(e.currentTarget.value)}}
                        value={gameName}
                        required
                        />
                    </InputGroup>
             </Row>
             <Row className="mb-4">
              <h3 className="d-flex align-text-left">Choose a game to play</h3>

                    <InputGroup className="mb-3">
                    <Form.Select 
                      required
                    onChange={(e) => {setBaseGame(e.currentTarget.value)}} aria-label="Default select example">
                      <option value={false}>none</option>
                      <option value="basic fantasy">Basic Fantasy</option>
                      
                    </Form.Select>

                    </InputGroup>



            </Row>
            <Row className="mb-4">
                <h3 className="d-flex align-text-left">Select A Character Sheet</h3>
                    <InputGroup className="mb-3">
                      <Form.Select 
                      required
                      onChange={(e) => {setCharacterSheet(e.currentTarget.value)}} aria-label="Default select example">
                      <option value="null">none</option>
                      <option value="basic fantasy">Basic Fantasy</option>
                    </Form.Select>
                    </InputGroup>
            </Row>
            </Col>

                <Row>

          
          <Row className="justify-content-center">
            <Col onClick={e => createGame()} sm={5} md={5} className="col-6">
              <div className="d-flex justify-content-center">
              <div className="button-red parent-wide inverted-glow"  as="Link">
                <span>Create Game <i class="fas fa-dice-d20"></i></span></div>
                      </div>
            </Col>
          </Row>

          
        </Row>
        </Form>

            </Col>
            {/* game information */}
            <Col sm={12} md={6} id="confirmation-container" className="border-left">
              {baseGame ? (<BasicFantasy/>) : (<DefaultInfo/>)}
            </Col>
          </Row>
        </Container>
        </Container>
        
    )
}

export default CreateGame