import { FormControl, Col, Row, Container, InputGroup } from "react-bootstrap";
import "../styleSheets/characterSheetStyle.css";
import { useState, useEffect } from "react";

const CharacterSheet = () => {
     const [name, setName] = useState("")
     const [race, setRace] = useState("")
     const [characterClass, setCharacterClass] = useState("")
     const [level, setLevel] = useState("")
  return (
    <Container fluid className="characterSheet">
      <Row>
        <Col sm={3}>
          <div id="characterBasicInfo">
            <InputGroup className="mb-1">
              <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
              <FormControl
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <InputGroup className="mb-1 prepend-name">
              <InputGroup.Text  id="basic-addon1">Class</InputGroup.Text>
              <FormControl
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <InputGroup className="mb-1">
              <InputGroup.Text  id="basic-addon1">Race</InputGroup.Text>
              <FormControl
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <InputGroup className="mb-1">
              <InputGroup.Text  id="basic-addon1">Exp</InputGroup.Text>
              <FormControl
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <InputGroup className="mb-1">
              <InputGroup.Text  id="basic-addon1">Next Lvl</InputGroup.Text>
              <FormControl
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </div>
            <div id="characterStats" className="p-1">
                
                <Row id="statTitle" className="statContainer d-flex justify-content-between bottom-border">
                    <Col className="statName" sm={6}>
                        <p>Statistic</p>
                    </Col>
                    <Col className="p-0" sm={3}>
                        <p>score</p>
                    </Col>
                    <Col className="p-0" sm={3}>
                    <p>Mod</p>
                    </Col>
                </Row>
                <Row className="statContainer d-flex mt-2 justify-content-between">
                    <Col className="statName" sm={6}>
                        <p>Strength</p>
                    </Col>
                    <Col className="p-0" sm={3}>
                        <input type="number" placeholder="10"></input>
                    </Col>
                    <Col className="p-0" sm={3}>
                    <input type="number" placeholder="10"></input>
                    </Col>
                </Row>
                <Row className="statContainer d-flex justify-content-between">
                    <Col className="statName" sm={6}>
                        <p>Dexterity</p>
                    </Col>
                    <Col className="p-0" sm={3}>
                        <input type="number" placeholder="10"></input>
                    </Col>
                    <Col className="p-0" sm={3}>
                    <input type="number" placeholder="10"></input>
                    </Col>
                </Row>
                <Row className="statContainer d-flex justify-content-between">
                    <Col className="statName" sm={6}>
                        <p>Constitution</p>
                    </Col>
                    <Col className="p-0" sm={3}>
                        <input type="number" placeholder="10"></input>
                    </Col>
                    <Col className="p-0" sm={3}>
                    <input type="number" placeholder="10"></input>
                    </Col>
                </Row>
                <Row className="statContainer d-flex justify-content-between">
                    <Col className="statName" sm={6}>
                        <p>Wisdom</p>
                    </Col>
                    <Col className="p-0" sm={3}>
                    <input type="number" placeholder="10"></input>
                    </Col>
                    <Col className="p-0" sm={3}>
                    <input type="number" placeholder="10"></input>
                    </Col>
                </Row>
                <Row className="statContainer d-flex justify-content-between">
                    <Col className="statName" sm={6}>
                        <p>Intelligence</p>
                    </Col>
                    <Col className="p-0" sm={3}>
                    <input type="number" placeholder="10"></input>
                    </Col>
                    <Col className="p-0" sm={3}>
                    <input type="number" placeholder="10"></input>
                    </Col>
                </Row>
                <Row className="statContainer d-flex justify-content-between">
                    <Col className="statName" sm={6}>
                        <p>Charisma</p>
                    </Col>
                    <Col className="p-0" sm={3}>
                    <input type="number" placeholder="10"></input>
                    </Col>
                    <Col className="p-0" sm={3}>
                    <input type="number" placeholder="10"></input>
                    </Col>
                </Row>

            </div>
        </Col>
        <Col sm={4}></Col>
        <Col sm={4}></Col>
      </Row>
    </Container>
  );
};

export default CharacterSheet;
