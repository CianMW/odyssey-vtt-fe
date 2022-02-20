import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CButton } from "../../SingleComponents/CButton";

const MyCharacters = () => {
  const currentState = useSelector((state) => state);
  const dispatch = useDispatch();


  const characterNameSlicer = (charName) => {


    if ( window.innerWidth < 450) {     
      return charName.slice(0,6) + "..."
      }
      else {
        if (charName.length > 12) {
          return charName.slice(0, 10) + "..."
        } else {
          return charName
        }
      }
  }

  return (
    <Accordion.Item eventKey="1" className="mt-2">
      <Accordion.Header>
        <h3>My Characters</h3>
      </Accordion.Header>
      <Accordion.Body>
        <Container className="bordered py-2 ">
          <Row className="p-0 m-0">
            {currentState.user.info.characters.length > 0 ? (
              currentState.user.info.characters
                .filter((char, idx) => idx <= 3)
                .map((char, idx) => (
                  <Col
                    key={Math.random() + "/" + idx}
                  
                    className="col-12 p-0 m-0"
                  >
                    <Row className="align-items-center justify-content-center mb-2">
                      <Col className="col-6 col-md-4 col-lg-3">
                        <h5><u>
                          {characterNameSlicer(char.characterName)}
                          </u>
                          </h5>
                      </Col>
                      <Col className="col-6 col-md-4 col-lg-3">
                        <h6>Lvl : {char.level}</h6>
                      </Col>
                      <Col className="col-6 col-md-4 col-lg-3">
                        <h6>AC : {char.armorClass}</h6>
                      </Col>
                      <Col className="col-6 col-md-4 col-lg-3">
                        <h6><i class="text-danger bi bi-heart-fill"></i> : {char.hitPoints.maxHitPoints} / {char.hitPoints.currentHitPoints}</h6>
                      </Col>
                      <Col className="col-6 col-md-4 col-lg-3">
                        <h6>{char.class}</h6>
                      </Col>
                      <Col className="col-6 col-md-4 col-lg-3">
                        <h6>{char.race}</h6>
                      </Col>
                      <Col className="col-6 col-md-4 col-lg-3">
                        <CButton label="Open Character" type="primary" link={"/character" + char._id} /> 
                      </Col>

                    </Row>



                  </Col>
                ))
            ) : (
              <h5>Click here to create a character</h5>
            )}
          </Row>
          <Row className="justify-content-center text-center">
            <Link to="/createCharacter">
              <h4> + New Character</h4>
            </Link>
          </Row>
        </Container>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default MyCharacters;
