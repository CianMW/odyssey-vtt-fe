import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";



const MyCharacters = () => {
    const currentState = useSelector((state) => state);
    const dispatch = useDispatch();

    return (
      <Accordion.Item eventKey="1" className="mb-2">
        <Accordion.Header>
          <h3>
          Recent Games
          </h3>
          </Accordion.Header>
        <Accordion.Body>
        <Container className="bordered py-2 ">
        <Row className="p-0 m-0 pb-2">
          <h3 className="m-0 p-0">
              <u>
              My Characters
              </u>
          </h3>
        </Row>
        <Row className="p-0 m-0">
    {currentState.user.info.games.filter((game, idx) => idx <= 3).map((game) => ( 
      <Col key={Math.random()} md={6} className="col-12 p-0 m-0">
         <Row className="justify-content-center align-items-center gx-0">
                  <Col className="col-6 p-0 m-0" sm={6}>
            <h3 className="text-wrap">{game.name}</h3>
                  </Col>
                  <Col className="col-6 p-0 m-0">
                  <div className="d-flex justify-content-center">
                <Link to={`/pregamelaunch/${game._id}`}>
              <div className="button-red  inverted-glow" >
                <span className="text-nowrap">
                  Launch Game <i class="fas fa-dice-d20"></i>
                </span>
              </div>
                </Link>
            </div>
                  </Col>
          <Col className="col-12 p-0 m-0">
          <p><span>Last Played: </span>{game.updatedAt}</p>
          </Col>
         </Row>
      </Col>
    ))}
    </Row>
  </Container>
  </Accordion.Body>
  </Accordion.Item>
        
    )
}

export default MyCharacters