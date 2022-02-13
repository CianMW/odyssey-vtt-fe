import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes, useParams, useLocation } from 'react-router-dom';
import CharacterSheet from './components/CharacterSheet.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home/Home';
import Login from './components/login-signup/Login';
import LandingPage from './components/LandingPage/LandingPage';
import MainFooter from './components/Footer';
import { connect } from "react-redux";
import SignUp from './components/login-signup/SignUp';
import LoginNavBar from './components/login-signup/LoginNavBar';
import { useEffect, useState } from 'react';
import CreateGame from './components/CreateGame/CreateGame';
import { Container } from 'react-bootstrap';
import GameSocket from './components/LaunchGame/GameSocket';
import { useSelector, useDispatch } from 'react-redux';
import { setLocation } from './Actions';
import { PreLaunchGame } from './components/LaunchGame/PreLaunchGame';
import TopNav from './components/TopNav';
import MainSideBar from './components/MainSideBar';
import './App.css';
import LandingSideBar from './components/LandingSideBar';
import CreateCharacter from './components/CreateCharacter/CreateCharacter';

function App() {
  const [wid, setWid] = useState("closed");
  const [display, setDisplay] = useState("inline-block");
  const currentState = useSelector(state => state)
 const dispatch = useDispatch()

 const openSideNav = () => {
  setWid("open")
  setDisplay("none")
}

const closeSideNav = () => {
  setWid("closed")
  setDisplay("inline-block")
}

const loggedIn = currentState.data.loggedIn ? "none" : "block"

  return (
      <Container  className=" full-parent-size m-0 p-0 full-length column-wrapper">
          <Router>
          <TopNav openSideNav={openSideNav} loggedIn={loggedIn} display={display}/>

          {
            currentState.data.loggedIn ? (
              <MainSideBar closeSideNav={closeSideNav} wid={wid} />
            ):(
              <LandingSideBar closeSideNav={closeSideNav} wid={wid} />
              )
            }
            <div className="max-height">
          <Routes>
            {
              currentState.data.loggedIn ? (
               <Route path="/:userId" element={<Home/>}/>
               ) : (
               <Route exact path="/" element={<LandingPage/>}/>
               )
            }
            <Route path="/gameroom/:gameId" element={<GameSocket/>}/>
            {/* <Route path="/pregamelaunch/:gameId" element={<PreLaunchGame />}/> */}
            <Route path="/character" element={<CharacterSheet/>}/>
            <Route path="/signUp" element={<SignUp/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/createGame" element={<CreateGame/>}/>
            <Route path="/createCharacter" element={<CreateCharacter/>} />

          </Routes>
          </div>
          </Router>

          {!currentState.data.inGame && 
           <MainFooter/>
          }
          </Container>
  );
}

export default App;
