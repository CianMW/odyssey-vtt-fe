import { FormControl, Col, Row, Container, InputGroup } from "react-bootstrap";
import "../styleSheets/characterSheetStyle.css";
import { useState, useEffect } from "react";
import rough from "roughjs"

const CharacterSheet = () => {
  const [name, setName] = useState("");
  const [race, setRace] = useState("");
  const [characterClass, setCharacterClass] = useState("");
  const [level, setLevel] = useState("");
  return (
    <Container className="characterSheet image-border">
      <Row>
        <Col sm={3}>
          <div></div>
        </Col>
        <Col sm={3}>
          <div>
            <InputGroup className="mb-1">
              <InputGroup.Text
                className="justify-content-center"
                id="basic-addon1"
              >
                <span>Name</span>
              </InputGroup.Text>
              <FormControl
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <InputGroup className="mb-1 prepend-name">
              <InputGroup.Text
                className="justify-content-center"
                id="basic-addon1"
              >
                <span>Class</span>
              </InputGroup.Text>
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
              <InputGroup.Text
                className="justify-content-center"
                id="basic-addon1"
              >
                <span>Race</span>
              </InputGroup.Text>
              <FormControl
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <InputGroup className="mb-1">
              <InputGroup.Text
                className="justify-content-center"
                id="basic-addon1"
              >
                <span>Exp</span>
              </InputGroup.Text>
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
              <InputGroup.Text
                className="justify-content-center"
                id="basic-addon1"
              >
                <span>Next Lvl</span>
              </InputGroup.Text>
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
        {/* Left Character sheet */}

        <Col className="p-0" id="left-character-sheet" sm={4}>
          <div id="characterStats" className="mb-2 p-0 image-border ">
            <div className="background-color">

            <Row
              className="statTitle statContainer d-flex justify-content-between bottom-border"
              >
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
          </div>
          <div id="savingThrows" className="saving-throw-border mb-2 p-1">
            <Row
              className="statTitle statContainer d-flex justify-content-between bottom-border"
            >
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

        {/* Center Character sheet */}

        <Col sm={4} className="px-3" id="center-character-sheet">
          <Row>
            <Col className="bordered p-0" id="hitPoints" sm={6}>
              <div fluid className="health bottom-border">
                <p className="hit-point-title mb-1">Hit Points</p>
              </div>
              <div className="max-hit-points">
                <p>max</p>
              </div>
              <input type="name" className="current-hit-points"></input>
              <div className="hit-die">
                <small>max</small>
              </div>
            </Col>
            <Col className="bordered p-0" id="hitPoints" sm={6}>
              <div fluid className="health bottom-border">
                <p className="hit-point-title mb-1">Attack Bonus</p>
              </div>
              <input type="name" className="current-hit-points"></input>
            </Col>
          </Row>
          <div className="d-flex justify-content-center">
            <Row className="mt-2">
              <div className="shield sketchy">
                <Col className="p-0" id="inner-AC" sm={12}>
                  <div className="health">
                    <p className="bolder mt-1 bottom-border">Armour Class</p>
                  </div>
                  <input
                    type="name"
                    placeholder="10"
                    className="current-AC"
                  ></input>
                </Col>
              </div>
            </Row>
          </div>
          <Row
            id="characterSheetInventory"
            className="d-flex justify-content-center bordered mt-3"
          >
            <Row className="p-0 bottom-border">
              <Col sm="6" className="p-0 inventoryTitle">
                <span className="p-0 bolder">Inventory</span>
              </Col>
              <Col sm="3" className="p-0 inventoryTitle">
                <span className="p-0 bold">Quantity</span>
              </Col>
              <Col sm="3" className="p-0 inventoryTitle">
                <span className="p-0 bold">Weight</span>
              </Col>
            </Row>
            <Row className="p-0">
              <Col sm="6" className="p-0 inventoryTitle">
                <span className="p-0">Map</span>
              </Col>
              <Col sm="3" className="p-0 inventoryTitle">
                <span className="p-0">1</span>
              </Col>
              <Col sm="3" className="p-0 inventoryTitle">
                <span className="p-0">2lb</span>
              </Col>
            </Row>
            <Row className="p-0">
              <Col sm="6" className="p-0 inventoryTitle">
                <span className="p-0">pearl</span>
              </Col>
              <Col sm="3" className="p-0 inventoryTitle">
                <span className="p-0">1</span>
              </Col>
              <Col sm="3" className="p-0 inventoryTitle">
                <span className="p-0">2lb</span>
              </Col>
            </Row>
            <Row className="p-0">
              <Col sm="6" className="p-0 inventoryTitle">
                <span className="p-0">Charm kit</span>
              </Col>
              <Col sm="3" className="p-0 inventoryTitle">
                <span className="p-0">1</span>
              </Col>
              <Col sm="3" className="p-0 inventoryTitle">
                <span className="p-0">2lb</span>
              </Col>
            </Row>
            <Row className="p-0">
              <Col sm="6" className="p-0 inventoryTitle">
                <span className="p-0">Alchemy kit</span>
              </Col>
              <Col sm="3" className="p-0 inventoryTitle">
                <span className="p-0">1</span>
              </Col>
              <Col sm="3" className="p-0 inventoryTitle">
                <span className="p-0">2lb</span>
              </Col>
            </Row>
            <Row className="p-0">
              <Col sm="6" className="p-0 inventoryTitle">
                <span className="p-0">Poison</span>
              </Col>
              <Col sm="3" className="p-0 inventoryTitle">
                <span className="p-0">1</span>
              </Col>
              <Col sm="3" className="p-0 inventoryTitle">
                <span className="p-0">2lb</span>
              </Col>
            </Row>
            <Row className="p-0">
              <Col sm="6" className="p-0 inventoryTitle">
                <span className="p-0">Alcohol</span>
              </Col>
              <Col sm="3" className="p-0 inventoryTitle">
                <span className="p-0">1</span>
              </Col>
              <Col sm="3" className="p-0 inventoryTitle">
                <span className="p-0">2lb</span>
              </Col>
            </Row>
            <Row className="p-0">
              <Col sm="6" className="p-0 inventoryTitle">
                <span className="p-0">Will to live</span>
              </Col>
              <Col sm="3" className="p-0 inventoryTitle">
                <span className="p-0">1</span>
              </Col>
              <Col sm="3" className="p-0 inventoryTitle">
                <span className="p-0">2lb</span>
              </Col>
            </Row>
            <Row className="p-0">
              <Col sm="6" className="p-0 inventoryTitle">
                <span className="p-0">Thieves tools</span>
              </Col>
              <Col sm="3" className="p-0 inventoryTitle">
                <span className="p-0">1</span>
              </Col>
              <Col sm="3" className="p-0 inventoryTitle">
                <span className="p-0">2lb</span>
              </Col>
            </Row>
            <Row className="p-0">
              <Col sm="6" className="p-0 inventoryTitle">
                <span className="p-0">willpower</span>
              </Col>
              <Col sm="3" className="p-0 inventoryTitle">
                <span className="p-0">1</span>
              </Col>
              <Col sm="3" className="p-0 inventoryTitle">
                <span className="p-0">2lb</span>
              </Col>
            </Row>
            <Row className="p-0">
              <Col sm="6" className="p-0 inventoryTitle">
                <span className="p-0">Rations</span>
              </Col>
              <Col sm="3" className="p-0 inventoryTitle">
                <span className="p-0">1</span>
              </Col>
              <Col sm="3" className="p-0 inventoryTitle">
                <span className="p-0">2lb</span>
              </Col>
            </Row>
            <Row className="p-0">
              <Col sm="6" className="p-0 inventoryTitle">
                <span className="p-0">health potion</span>
              </Col>
              <Col sm="3" className="p-0 inventoryTitle">
                <span className="p-0">1</span>
              </Col>
              <Col sm="3" className="p-0 inventoryTitle">
                <span className="p-0">2lb</span>
              </Col>
            </Row>
            <Row className="p-0">
              <Col sm="6" className="p-0 inventoryTitle">
                <span className="p-0">tea</span>
              </Col>
              <Col sm="3" className="p-0 inventoryTitle">
                <span className="p-0">1</span>
              </Col>
              <Col sm="3" className="p-0 inventoryTitle">
                <span className="p-0">2lb</span>
              </Col>
            </Row>
            <Row className="p-0">
              <Col sm="6" className="p-0 inventoryTitle">
                <span className="p-0">leather armour</span>
              </Col>
              <Col sm="3" className="p-0 inventoryTitle">
                <span className="p-0">1</span>
              </Col>
              <Col sm="3" className="p-0 inventoryTitle">
                <span className="p-0">2lb</span>
              </Col>
            </Row>
            <Row className="p-0">
              <Col sm="6" className="p-0 inventoryTitle">
                <span className="p-0">shield</span>
              </Col>
              <Col sm="3" className="p-0 inventoryTitle">
                <span className="p-0">1</span>
              </Col>
              <Col sm="3" className="p-0 inventoryTitle">
                <span className="p-0">2lb</span>
              </Col>
            </Row>
            <Row className="p-0">
              <Col sm="6" className="p-0 inventoryTitle">
                <span className="p-0">backpack</span>
              </Col>
              <Col sm="3" className="p-0 inventoryTitle">
                <span className="p-0">1</span>
              </Col>
              <Col sm="3" className="p-0 inventoryTitle">
                <span className="p-0">2lb</span>
              </Col>
            </Row>
            <Row className="p-0">
              <Col sm="6" className="p-0 inventoryTitle">
                <span className="p-0">belt</span>
              </Col>
              <Col sm="3" className="p-0 inventoryTitle">
                <span className="p-0">1</span>
              </Col>
              <Col sm="3" className="p-0 inventoryTitle">
                <span className="p-0">2lb</span>
              </Col>
            </Row>
          </Row>
        </Col>

        {/* Right Character sheet */}

        <Col id="Right-character-sheet" className="px-3" sm={4}>
          {/* Weapon container */}
          <div>
            <Row className="bordered hidden-border justify-content-center">
              <div className="bottom-border">
                <span className="bolder">Weapons</span>
              </div>
              <Row className="bottom-border">
                <Col className="border-right" sm={6}>
                  <span>Item</span>
                </Col>
                <Col className="border-right" sm={3}>
                  <span>Damage</span>
                </Col>
                <Col sm={3}>
                  <span>Range</span>
                </Col>
              </Row>
              <Row className="bottom-border-light">
                <Col className="border-right" sm={6}>
                  <span>Item</span>
                </Col>
                <Col className="border-right" sm={3}>
                  <span>Damage</span>
                </Col>
                <Col sm={3}>
                  <span>Range</span>
                </Col>
              </Row>
              <Row className="bottom-border-light">
                <Col className="border-right" sm={6}>
                  <span>Item</span>
                </Col>
                <Col className="border-right" sm={3}>
                  <span>Damage</span>
                </Col>
                <Col sm={3}>
                  <span>Range</span>
                </Col>
              </Row>
              <Row className="bottom-border-light">
                <Col className="border-right" sm={6}>
                  <span>Item</span>
                </Col>
                <Col className="border-right" sm={3}>
                  <span>Damage</span>
                </Col>
                <Col sm={3}>
                  <span>Range</span>
                </Col>
              </Row>
              <Row className="bottom-border-light">
                <Col className="border-right" sm={6}>
                  <span>Item</span>
                </Col>
                <Col className="border-right" sm={3}>
                  <span>Damage</span>
                </Col>
                <Col sm={3}>
                  <span>Range</span>
                </Col>
              </Row>
            </Row>
          </div>
          {/* Armour container */}
          <div className="mt-2">
            <Row className="bordered hidden-border justify-content-center">
              <div className="bottom-border">
                <span className="bolder">Armour</span>
              </div>
              <Row className="bottom-border">
                <Col className="border-right" sm={8}>
                  <span className="bold">Item</span>
                </Col>
                <Col sm={4}>
                  <span className="bold">AC Bonus</span>
                </Col>
              </Row>
              <Row className="bottom-border-light">
                <Col className="border-right" sm={8}>
                  <span>Leather Armour</span>
                </Col>
                <Col className="p-0" sm={4}>
                  <span>Damage</span>
                </Col>
              </Row>
              <Row className="bottom-border-light">
                <Col className="border-right" sm={8}>
                  <span>Leather Armour</span>
                </Col>
                <Col className="p-0" sm={4}>
                  <span>Damage</span>
                </Col>
              </Row>
              <Row className="bottom-border-light">
                <Col className="border-right" sm={8}>
                  <span>Leather Armour</span>
                </Col>
                <Col className="p-0" sm={4}>
                  <span>Damage</span>
                </Col>
              </Row>
              <Row className="bottom-border-light">
                <Col className="border-right" sm={8}>
                  <span>Leather Armour</span>
                </Col>
                <Col className="p-0" sm={4}>
                  <span>Damage</span>
                </Col>
              </Row>
            </Row>
          </div>
          {/* Abilities */}
          <div className="mt-2">
            <Row className="bordered hidden-border justify-content-center">
              <div className="bottom-border">
                <span className="bolder">Abilities</span>
              </div>
              <Row className="bottom-border">
                <Col className="border-right" sm={8}>
                  <span className="bold">Item</span>
                </Col>
                <Col sm={4}>
                  <span className="bold">AC Bonus</span>
                </Col>
              </Row>
              <Row className="bottom-border-light">
                <Col className="border-right" sm={8}>
                  <span>Leather Armour</span>
                </Col>
                <Col className="p-0" sm={4}>
                  <span>Damage</span>
                </Col>
              </Row>
            </Row>
          </div>

          {/* Treasure container */}
          <div className="mt-2">
            <Row className="bordered hidden-border justify-content-center">
              <div className="bottom-border">
                <span className="bolder">Treasure</span>
              </div>
              <Row className="p-0 bottom-border">
                <Col className="border-right" sm={2}>
                  <span className="bold">Item</span>
                </Col>
                <Col className="border-right" sm={2}>
                  <span className="bold">Item</span>
                </Col>
                <Col className="border-right" sm={2}>
                  <span className="bold">Item</span>
                </Col>
                <Col className="border-right" sm={2}>
                  <span className="bold">Item</span>
                </Col>
                <Col className="border-right" sm={2}>
                  <span className="bold">Item</span>
                </Col>
                <Col sm={2}>
                  <span className="bold">Item</span>
                </Col>
              </Row>
            </Row>
          </div>

          {/* Languages Container */}

          <div className="mt-2">
            <Row className="bordered hidden-border justify-content-center">
              <div className="bottom-border">
                <span className="bolder">Languages</span>
              </div>
              <Row className="bottom-border-light">
                <Col className="d-flex justify-content-left" sm={12}>
                  <span>Common</span>
                </Col>
              </Row>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CharacterSheet;
