import MainNavBar from "../MainNavBar.jsx"
import { Row, Container, Col } from "react-bootstrap"
import "../../styleSheets/homeStyle.css"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useEffect } from "react"


const Home = ({basicAuth}) => {
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

    return(
        <>
        <Container className="background-grayed" fluid>
        <Row> 
            <Col className="user-schedule" sm={6}>
                <div >
                    <h4 className="mt-2 bottom-border">Scheduled Games</h4>
                    {/* fetch users schedule of games 
                    IF no games => "you schedule is empty oh no!"
                     */}
                </div>
            </Col>
            <Col className="your-games" sm={6}>
            <div >
                <h4 className="mt-2 bottom-border">Your Games</h4>
                <Link to="/createGame"> 
                    <div>
                        <div>   
                            <h6><i className=" bold bi bi-plus-lg"></i> create a new game </h6>
                        </div>
                    </div>
                </Link>
                {/* 
                SEARCH component = search for game by name , tag or player 
                If no games found display others  
                IF no games at all => "you're not yet part of any gamers, find a game?"
                */}
            </div>
            </Col>
       </Row>

        </Container>
        </>
    )
}

export default Home