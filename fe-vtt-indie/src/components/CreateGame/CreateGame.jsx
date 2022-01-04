import MainNavBar from "../MainNavBar.jsx"
import { Row, Container, Col } from "react-bootstrap"
import "../../styleSheets/homeStyle.css"
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

    return(
        <>
        <Container className="background-grayed" fluid>
        <Row className="justify-content-center">
            <Col sm={12} md={8} lg={6} >
                <Row>
                    
                </Row>
            </Col>
        </Row>

        </Container>
        </>
    )
}

export default CreateGame