import MainNavBar from "../MainNavBar.jsx"
import {
    Container,
    Row,
    Col,
    Button,
    InputGroup,
    FormControl,
  } from "react-bootstrap";import "../../styleSheets/homeStyle.css"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useEffect } from "react"


const CreateGame = ({basicAuth}) => {
    const [games, setGames] = useState(null)

    const fetchUserData = async () => {
        console.log("basic 64 auth : ", basicAuth)
        const response = await fetch("http://localhost:3150/user/me", {
            headers:{
              authorization:basicAuth 
            }
          })
    }

    useEffect(() => {
        fetchUserData()
    }, []);

    const [gameName, setGameName] = useState("")
    const [baseGame, setBaseGame] = useState("")
    const [characterSheet, setCharacterSheet] = useState("")
    const [players, setPlayers] = useState("")

    return(
        <div className="mt-5 d-flex " >

        <Container className="mt-5 background-grayed " fluid>
        <Row className="justify-content-center">
            <Col sm={12} md={8} lg={6} >
                <Row>
                    <Col sm={12}>
                    <Row>
                  <Col>
                    <InputGroup className="mb-3">
                    <InputGroup.Text className="justify-content-center" id="basic-addon1"><span>Name</span></InputGroup.Text>                    
                    <FormControl
                        placeholder="Game Name"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        onChange={(e) => {setGameName(e.currentTarget.value)}}
                        value={gameName}
                      />
                    </InputGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <InputGroup className="mb-3">
                      <InputGroup.Text className="justify-content-center" id="basic-addon1"><span>Base Game</span></InputGroup.Text>
                      <FormControl
                      type="password"
                        placeholder="enter password"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        onChange={(e) => {setBaseGame(e.currentTarget.value)}}
                        value={baseGame}
                        />
                    </InputGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <InputGroup className="mb-3">
                      <InputGroup.Text className="justify-content-center" id="basic-addon1"><span>Character Sheet</span></InputGroup.Text>
                      <FormControl
                      type="password"
                        placeholder="enter password"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        onChange={(e) => {setCharacterSheet(e.currentTarget.value)}}
                        value={characterSheet}
                        />
                    </InputGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <InputGroup className="mb-3">
                      <InputGroup.Text className="justify-content-center" id="basic-addon1"><span>Players</span></InputGroup.Text>
                      <FormControl
                      type="password"
                        placeholder="enter password"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        onChange={(e) => {setPlayers(e.currentTarget.value)}}
                        value={players}
                        />
                    </InputGroup>
                  </Col>
                </Row>
  
          <Row className="justify-content-center">
            <Col sm={6}>
              <div className="d-flex justify-content-center">
              <div className="button-red  inverted-glow"  as="Link">
                <span>Create Game  <i class="fas fa-dice-d20"></i></span></div>
                      </div>
            </Col>
          </Row>
                    </Col>
                </Row>
            </Col>
        </Row>

        </Container>
        </div>
        
    )
}

export default CreateGame