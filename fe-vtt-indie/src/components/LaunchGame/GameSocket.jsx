import {
  Container,
  Row,
  Col,
  Form,
  FormControl,
  ListGroup,
  ListGroupItem,
  Button,
} from "react-bootstrap";
import { useState, useEffect, FormEvent } from "react";
import { io } from "socket.io-client";
import { useLocation } from "react-router";
import "../../styleSheets/GameSocketStyle.css";
import GameChat from "./GameChat";
import ADDRESS from "./addressSetup.js";
import { useDispatch, useSelector } from "react-redux";
import CharacterSheet from "../CharacterSheet";
import { setInGame } from "../../Actions";
// import socket  from "./Socket";




const socket = io(ADDRESS, { transports: ["websocket"] });



const GameSocket = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [inGameUsers, setInGameUsers] = useState([]);
  const [chatHistory, setChatHistory] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState("");
  const currentState = useSelector((state) => state);
  const dispatch = useDispatch();
  const [connected, setConnected] = useState();

  const location = useLocation();
  const getUrlParams = location.pathname.split("/gameroom/");






  // SOCKET TEST START

  // const {socket, emitEvent, emitMessage } = SocketManager({
  //   onCallback: handleCallback,
  // });

  // function handleCallback (payload) {
  //   /** Do something with the payload */
  // };


  // SOCKET TEST END
  const joinRoom = (room) => {
    socket.emit("joinRoom", {
      gameId: room,
      username: currentState.user.info.name,
    });
  };

  useEffect(() => {

    socket.connect();
    // emitDisconnect()
    return () => {
      socket.disconnect();
    };
  }, []);

  socket.on('connect', () => {
    console.log('Connection established!')
    dispatch(setInGame(true))
    joinRoom(getUrlParams[1])
  })
  socket.on("recieve_message", setMessage);

  socket.on("loggedin", () => {
    console.log("you're logged in!");
    fetchInGameUsers();

    socket.on("newConnection", () => {
      fetchInGameUsers();
    });
  });

  socket.on("message", (newMessage) => {
    console.log("a new message appeared!");
    setChatHistory([...chatHistory, newMessage]);
  });

  socket.on("disconnect", () => {
    console.log(`disconnected!`);
    dispatch(setInGame(false));
  });

  async function handleMessageSubmit(e) {
    e.preventDefault();
    if (e.key === "Enter") {
      const newMessage = {
        text: message,
        sender: username,
        id: socket.id,
        timestamp: Date.now(),
      };

      // emitMessage(newMessage);
      console.log("reeee");
      setChatHistory([...chatHistory, newMessage]);
      setMessage("");
    }
  }

  async function fetchInGameUsers() {
    console.log("fetch in game users is being fired");
    try {
      let response = await fetch(ADDRESS + "/online-users");
      if (response) {
        let { onlineUsers } = await response.json();
        // data is an array with all the current connected users
        setInGameUsers(onlineUsers);
      } else {
        console.log("error fetching the online users");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container className=" m-0 p-0">
      <Row className="max-row static-full-height  d-flex m-0 p-0">
        {/* <Col md={2} className=" p-0 m-0 col-lg-2 full-height bg-blue">asdasd</Col> */}
        <Col
          md={9}
          className=" static-full-height-scroll px-2 m-0 col-md-8 bg-custom-textured"
        >
          <CharacterSheet />
        </Col>
        <Col md={3} className="px-0 m-0 full-height col-md-1">
          <Row className="">
            <Col
              md={3}
              className={`text-center dynamic-folder ${
                selectedFolder === "chat" ? "semi-bordered" : "bordered"
              }`}
              onClick={(e) => setSelectedFolder("chat")}
            >
              <i className="bi bi-chat-left-text-fill"></i>
            </Col>
            <Col
              md={3}
              className={`text-center dynamic-folder ${
                selectedFolder === "characters" ? "semi-bordered" : "bordered"
              }`}
              onClick={(e) => setSelectedFolder("characters")}
            >
              <i className="bi bi-folder-fill"></i>
            </Col>
            <Col
              md={3}
              className={`text-center dynamic-folder ${
                selectedFolder === "library" ? "semi-bordered" : "bordered"
              }`}
              onClick={(e) => setSelectedFolder("library")}
            >
              <i className="bi bi-search"></i>
            </Col>
            <Col
              md={3}
              className={`text-center dynamic-folder ${
                selectedFolder === "settings" ? "semi-bordered" : "bordered"
              }`}
              onClick={(e) => setSelectedFolder("settings")}
            >
              <i className="bi bi-gear-fill"></i>
            </Col>
          </Row>
          {selectedFolder === "chat" && (
            <GameChat
              chatHistory={chatHistory}
              handleMessageSubmit={handleMessageSubmit}
              message={message}
              setMessage={setMessage}
            />
          )}
        </Col>
      </Row>
    </Container>

    // <Container fluid className=' px-0'>

    //   <Row className=' my-0' style={{ height: '95vh' }}>
    //     <Col md={2} className=" bordered-hard">
    //       {/* for the users currently in game*/}
    //       <div className='mb-3'>Connected users:</div>
    //       <ListGroup>
    //         {inGameUsers.length === 0 && <ListGroupItem>No users yet!</ListGroupItem>}
    //         {inGameUsers.map((user) => (
    //           <ListGroupItem key={user.id}>{user.username}</ListGroupItem>
    //           ))}
    //       </ListGroup>
    //     </Col>
    //     {/* central space / map */}
    //     <Col sm={0} md={7} className=" bg-notebook d-none d-sm-none d-md-block bordered-hard"></Col>

    //     <Col sm={6} md={3} id="right-column" className='p-0 bordered-hard d-flex justify-content-between'>

    //       <Row className="d-flex parent-wide parent-high flex-column justify-content-between p-0 m-0">

    //           {/* Select folder */}
    //             <Row className="p-0 m-0 parent-wide mb-2">
    //             <Col md={3} className={`dynamic-folder ${selectedFolder === "chat" ? "semi-bordered":"bordered"}`} onClick={e => setSelectedFolder("chat")}>Chat</Col>
    //             <Col md={3} className={`dynamic-folder ${selectedFolder === "characters" ? "semi-bordered":"bordered"}`} onClick={e => setSelectedFolder("characters")}>Characters</Col>
    //             <Col md={3} className={`dynamic-folder ${selectedFolder === "library" ? "semi-bordered":"bordered"}`} onClick={e => setSelectedFolder("library")}>Library</Col>
    //             <Col md={3} className={`dynamic-folder ${selectedFolder === "settings" ? "semi-bordered":"bordered"}`} onClick={e => setSelectedFolder("settings")}>Settings</Col>
    //             </Row>

    //           {selectedFolder === "chat" && <GameChat chatHistory={chatHistory} handleMessageSubmit={handleMessageSubmit} message={message} setMessage={setMessage}/>}
    //           <Button onClick={e => {console.log(currentState.user.info.name)}}>socket</Button>
    //       </Row>
    //     </Col>
    //   </Row>
    // </Container>
  );
};

export default GameSocket;
