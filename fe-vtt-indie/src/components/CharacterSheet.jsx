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
                <div>
                </div>
            </Col>
            <Col sm={3}>
                <div>
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
                </div>
            </Col>
            <Col sm={3}>
                <div>
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
                </div>
            </Col>
            <Col sm={3}>
                <div>
            <InputGroup className="mb-1">
              <InputGroup.Text  id="basic-addon1">Next Lvl</InputGroup.Text>
              <FormControl
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
                </div>
            </Col>
        </Row>
      <Row>
        <Col sm={3}>
          <div id="characterBasicInfo" className="mb-2">
          </div>
            <div id="characterStats" className="mb-2 p-1">
                
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
            <div id="savingThrows" className="saving-throw-border mb-2 p-1">
                
                <Row id="statTitle" className="statContainer d-flex justify-content-between bottom-border">
                    <Col className="statName" sm={12}>
                        <p>Saving Throws</p>
                    </Col>
                </Row>
                <Row className="statContainer d-flex mt-2 justify-content-between">
                    <Col className="statName" sm={9}>
                        <p>Death Ray/Poison</p>
                    </Col>
                    <Col className="p-0" sm={3}>
                        <input id="saving-throw" type="number" placeholder="10"></input>
                    </Col>
                </Row>
                <Row className="statContainer d-flex mt-2 justify-content-between">
                    <Col className="statName" sm={9}>
                        <p>Magic Wands</p>
                    </Col>
                    <Col className="p-0" sm={3}>
                        <input id="saving-throw" type="number" placeholder="10"></input>
                    </Col>
                </Row>
                <Row className="statContainer d-flex mt-2 justify-content-between">
                    <Col className="statName" sm={9}>
                        <p>Paralysis/Turn to stone</p>
                    </Col>
                    <Col className="p-0" sm={3}>
                        <input id="saving-throw" type="number" placeholder="10"></input>
                    </Col>
                </Row>
                <Row className="statContainer d-flex mt-2 justify-content-between">
                    <Col className="statName" sm={9}>
                        <p>Dragon Breath</p>
                    </Col>
                    <Col className="p-0" sm={3}>
                        <input id="saving-throw" type="number" placeholder="10"></input>
                    </Col>
                </Row>
                <Row className="statContainer d-flex mt-2 justify-content-between">
                    <Col className="statName" sm={9}>
                        <p>Rod, staff or Spell</p>
                    </Col>
                    <Col className="p-0" sm={3}>
                        <input id="saving-throw" type="number" placeholder="1"></input>
                    </Col>
                </Row>
            </div>

        </Col>
        <Col sm={4} id="center-character-sheet">
            <Row>
                <Col className="bordered p-0" id="hitPoints" sm={6}>
                    <div fluid className="health bottom-border">
                        <p className="hit-point-title mb-1">Hit Points</p>
                    </div>
                    <div className="max-hit-points">
                        <p>max</p>
                    </div>
                    <input type="name" className="current-hit-points">
                    </input>
                    <div className="hit-die">
                        <small>max</small>
                    </div>
                </Col>
                <Col className="bordered p-0" id="hitPoints" sm={6}>
                    <div fluid className="health bottom-border">
                        <p className="hit-point-title mb-1">Attack Bonus</p>
                    </div>
                    <input type="name" className="current-hit-points">
                    </input>
                </Col>
            </Row>
            <Row className="bordered mt-3">
                <Row className="p-0 bottom-border">
                    <Col sm="6" className="inventoryTitle">
                        <span>Inventory</span>
                    </Col>
                    <Col sm="3" className="inventoryTitle">
                        <span>Quantity</span>
                    </Col>
                    <Col sm="3" className="inventoryTitle">
                        <span>Weight</span>
                    </Col>
                <p className="p-0">Inventory</p>
                <div className="inventory-item bottom-border-light p-0">
                <p className="p-0">Inventory</p>
                </div>
                </Row>
            </Row>
        </Col>
        <Col sm={4}></Col>
      </Row>
    </Container>
  );
};

export default CharacterSheet;
