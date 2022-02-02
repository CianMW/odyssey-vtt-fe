import logo from './logo.svg';
import './App.css';
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
import MainNavBar from './components/MainNavBar';
import { useEffect, useState } from 'react';
import CreateGame from './components/CreateGame/CreateGame';
import { Container } from 'react-bootstrap';
import GameSocket from './components/LaunchGame/GameSocket';
import { useSelector, useDispatch } from 'react-redux';
import { setLocation } from './Actions';
import { PreLaunchGame } from './components/LaunchGame/PreLaunchGame';

function App() {

  const currentState = useSelector(state => state)
 const dispatch = useDispatch()


  return (


    <div className="App">
        <Router>

          {/* checks if the urlParams are equal to any routes that don't require a navbar */}
          {
             currentState.data.loggedIn ? (
              <MainNavBar/>
            ):(
              <LoginNavBar className="static-margin"/>
            )
          }
          <Container fluid className="m-0 p-0 justify-content-center align-items-center full-length">

          <Routes>
            {
               currentState.data.loggedIn ? (
                 <Route path="/:userId" element={<Home/>}/>
                 ) : (
                   <Route path="/" element={<LandingPage/>}/>
                   
               )
            }
            <Route path="/gameroom/:gameId" element={<GameSocket/>}/>
            <Route path="/pregamelaunch/:gameId" element={<PreLaunchGame />}/>
            <Route path="/character" element={<CharacterSheet/>}/>
            <Route path="/signUp" element={<SignUp/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/createGame" element={<CreateGame/>}/>
          </Routes>

          </Container>
          {!currentState.data.inGame && 
           <MainFooter/>
          }
        </Router>
    </div>
  );
}

export default App;
