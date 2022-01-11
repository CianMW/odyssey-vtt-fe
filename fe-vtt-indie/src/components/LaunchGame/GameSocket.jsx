import { Container, Row, Col, Form, FormControl, ListGroup, ListGroupItem } from 'react-bootstrap'
import { useState, useEffect, FormEvent } from 'react'
import { io } from 'socket.io-client'
import { useLocation } from 'react-router'
import "../../styleSheets/GameSocketStyle.css"
const ADDRESS = process.env.SOCKETSERVER // <-- address of the BACKEND PROCESS
const socket = io(ADDRESS, { transports: ['websocket'] })


const GameSocket = ({setUrlParams}) => {
  const [username, setUsername] = useState('')
  const [message, setMessage] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)
  const [inGameUsers, setInGameUsers] = useState([])
  const [chatHistory, setChatHistory] = useState([])


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
        <Col md={2} className="bordered">
          {/* for the users currently in game*/}
          <div className='mb-3'>Connected users:</div>
          <ListGroup>
            {inGameUsers.length === 0 && <ListGroupItem>No users yet!</ListGroupItem>}
            {inGameUsers.map((user) => (
              <ListGroupItem key={user.id}>{user.username}</ListGroupItem>
              ))}
          </ListGroup>
        </Col>
        <Col md={7} className="bordered"></Col>
        <Col md={3} className='p-0 bordered d-flex flex-column justify-content-between'>
     
        <div className="d-flex">
        <div className="dynamic-folder">Chat</div>
        <div className="dynamic-folder">Characters</div>
        <div className="dynamic-folder">Library</div>
        </div>
          {/* MIDDLE SECTION: CHAT HISTORY */}
          <ListGroup>
            {chatHistory.length > 1 && chatHistory.map((message, i) => (
              <ListGroupItem key={i}>
                <strong>{message.sender}</strong>
                <span className='mx-1'> | </span>
                <span>{message.text}</span>
                <span className='ml-2' style={{ fontSize: '0.7rem' }}>
                  {new Date(message.timestamp).toLocaleTimeString('en-US')}
                </span>
              </ListGroupItem>
            ))}
          </ListGroup>
          {/* BOTTOM SECTION: NEW MESSAGE INPUT FIELD */}
          <Form className="parent-wide" onSubmit={handleMessageSubmit}>
            <input
              className="parent-wide"
              placeholder='send a message or roll the dice e.g. "!roll 1d6"'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              />
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default GameSocket