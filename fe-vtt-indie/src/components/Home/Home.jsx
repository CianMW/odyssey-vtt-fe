import { Row, Container, Col } from "react-bootstrap";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { setLocation, setUser } from "../../Actions/index.js";
import "../../styleSheets/homeStyle.css";
import RecentGames from "./RecentGames.jsx";

const Home = () => {
  const [games, setGames] = useState(null);
  const currentState = useSelector((state) => state);
  const dispatch = useDispatch();
  const location = useLocation();

  const updateUser = async () => {
    const response = await fetch("http://localhost:3150/user/me", {
      headers: {
        authorization: currentState.auth.b64Auth,
      },
    });

    if (response.ok) {
      const data = await response.json();
      dispatch(setUser(data));
      console.log("here is the user: ", data);
    }
  };

  useEffect(() => {
    // fetchUserData()
    updateUser();
    console.log(location.pathname);
  }, []);

  return (
      <Container className="background-grayed">
        <Row >
          <Col className="your-games" sm={12}>
            <div>
              <h4 className="mt-2 bottom-border text-center">Dashboard</h4>
              {/* <Link to="/createGame">
                    <h6>
                      <i className=" bold bi bi-plus-lg"></i> create a new game{" "}
                    </h6>

              </Link> */}
              {/* 
                SEARCH component = search for game by name , tag or player 
                If no games found display others  
                IF no games at all => "you're not yet part of any gamers, find a game?"
                */}
            </div>
             <RecentGames/>
          {/* --------------- */}
          </Col>
        </Row>
      </Container>
  );
};

export default Home;
