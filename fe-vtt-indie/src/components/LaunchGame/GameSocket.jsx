import { Container, Row, Col, Form, FormControl, ListGroup, ListGroupItem } from 'react-bootstrap'
import { useState, useEffect, FormEvent } from 'react'
import { io } from 'socket.io-client'
import { useLocation } from 'react-router'
import "../../styleSheets/GameSocketStyle.css"
import GameChat from './GameChat'
const ADDRESS = process.env.SOCKETSERVER // <-- address of the BACKEND PROCESS
const socket = io(ADDRESS, { transports: ['websocket'] })


const GameSocket = ({setUrlParams}) => {
  const [username, setUsername] = useState('')
  const [message, setMessage] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)
  const [inGameUsers, setInGameUsers] = useState([])
  const [chatHistory, setChatHistory] = useState([])
  const [selectedFolder, setSelectedFolder] = useState("")
  


  useEffect(() => {
    socket.on('connect', () => {

      console.log('Connection established!')
    })


    socket.on('loggedin', () => {
      console.log("you're logged in!")
      fetchInGameUsers()

      socket.on('newConnection', () => {
        fetchInGameUsers()
      })
    })

    socket.on('message', (newMessage) => {
      console.log('a new message appeared!')
      setChatHistory((chatHistory) => [...chatHistory, newMessage])
    })
  }, [])


  const handleMessageSubmit = (e) => {
    e.preventDefault()

    const newMessage = {
      text: message,
      sender: username,
      id: socket.id,
      timestamp: Date.now(),
    }

    socket.emit('sendmessage', newMessage)
    setChatHistory([...chatHistory, newMessage])
    setMessage('')
  }

  const fetchInGameUsers = async () => {
    try {
      let response = await fetch(ADDRESS + '/online-users')
      if (response) {
        let { onlineUsers } = await response.json()
        // data is an array with all the current connected users
        setInGameUsers(onlineUsers)
      } else {
        console.log('error fetching the online users')
      }
    } catch (error) {
      console.log(error)
    }
  }
  const location = useLocation().pathname
  useEffect(() => {
  console.log("these are the params",location)
  setUrlParams(location)

  }, [])



  return (


    <Container fluid className=' px-0'>

      <Row className=' my-0' style={{ height: '95vh' }}>
        <Col md={2} className=" bordered-hard">
          {/* for the users currently in game*/}
          <div className='mb-3'>Connected users:</div>
          <ListGroup>
            {inGameUsers.length === 0 && <ListGroupItem>No users yet!</ListGroupItem>}
            {inGameUsers.map((user) => (
              <ListGroupItem key={user.id}>{user.username}</ListGroupItem>
              ))}
          </ListGroup>
        </Col>
        {/* central space / map */}
        <Col sm={0} md={7} className="d-none d-sm-none d-md-block bordered-hard"></Col>

        <Col sm={6} md={3} id="right-column" className='p-0 bordered-hard d-flex justify-content-between'>


          <Row className="d-flex parent-wide parent-high flex-column justify-content-between p-0 m-0">
  
              {/* Select folder */}
                <Row className="p-0 m-0 parent-wide mb-2">
                <Col md={3} className={`dynamic-folder ${selectedFolder === "chat" ? "semi-bordered":"bordered"}`} onClick={e => setSelectedFolder("chat")}>Chat</Col>
                <Col md={3} className={`dynamic-folder ${selectedFolder === "characters" ? "semi-bordered":"bordered"}`} onClick={e => setSelectedFolder("characters")}>Characters</Col>
                <Col md={3} className={`dynamic-folder ${selectedFolder === "library" ? "semi-bordered":"bordered"}`} onClick={e => setSelectedFolder("library")}>Library</Col>
                <Col md={3} className={`dynamic-folder ${selectedFolder === "settings" ? "semi-bordered":"bordered"}`} onClick={e => setSelectedFolder("settings")}>Settings</Col>
                </Row>
     
              {selectedFolder === "chat" && <GameChat chatHistory={chatHistory} handleMessageSubmit={handleMessageSubmit} message={message} setMessage={setMessage}/>}

          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default GameSocket