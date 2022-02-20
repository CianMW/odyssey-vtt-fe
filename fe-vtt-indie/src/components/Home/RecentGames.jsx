
import { Row, Col, Container, Accordion } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { CButton } from "../../SingleComponents/CButton";


const RecentGames = () => {
    const currentState = useSelector((state) => state);
    const dispatch = useDispatch();


    return(
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <h3>
          Recent Games
          </h3>
          </Accordion.Header>
        <Accordion.Body>
  
         <Container className="bordered py-2 bg-white">
                <Row className="p-0 m-0">
            {currentState.user.info.games.filter((game, idx) => idx <= 3).map((game) => ( 
              <Col key={Math.random()} className="col-12 p-0 m-0">
                 <Row className="justify-content-center align-items-center gx-0">
                          <Col className="col-6 p-0 m-0" sm={6}>
                    <h3 className="text-wrap">{game.name}</h3>
                          </Col>
                          <Col className="col-6 p-0 m-0">
                          <div className="d-flex justify-content-center">
                            <CButton label="  Launch Game" link={`/gameroom/${game._id}`} type="primary" icon="fas fa-dice-d20"></CButton>
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

export default RecentGames