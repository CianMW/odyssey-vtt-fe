import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useParams, useLocation } from 'react-router-dom';
import CharacterSheet from './components/CharacterSheet.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home/Home';
import Login from './components/login-signup/Login';
import LandingPage from './components/LandingPage/LandingPage';
import MainFooter from './components/Footer';
import SignUp from './components/login-signup/SignUp';
import LoginNavBar from './components/login-signup/LoginNavBar';
import MainNavBar from './components/MainNavBar';
import { useEffect, useState } from 'react';
import CreateGame from './components/CreateGame/CreateGame';
import { Container } from 'react-bootstrap';
import GameSocket from './components/LaunchGame/GameSocket';

function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [userId, setUserId] = useState(null)
  const [basicAuth, setBasicAuth] = useState(null)
  const [urlParams, setUrlParams] = useState("")
 

  return (
    <div className="App">
        <Router>

          {/* checks if the urlParams are equal to any routes that don't require a navbar */}
          {urlParams !== "/" && (
             loggedIn ? (
              <MainNavBar/>
            ):(
              <LoginNavBar className="static-margin"/>
            )
          )}
          <Container fluid className="m-0 p-3 align-items-center full-length">

          <Routes>
            <Route path="/" element={<GameSocket setUrlParams={setUrlParams}/>}/>
            {/* <Route path="/character" element={<CharacterSheet/>}/> */}
            {/* <Route path="/" element={<LandingPage/>}/> */}
            <Route path="/signUp" element={<SignUp/>}/>
            <Route path="/home/:userId" element={<Home basicAuth={basicAuth}/>}/>
            <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setUserId={setUserId} loggedIn={loggedIn} setBasicAuth={setBasicAuth}/>}/>
            <Route path="/createGame" element={<CreateGame  basicAuth={basicAuth}/>}/>
          </Routes>

          </Container>
          {urlParams !== "/" && 
           <MainFooter/>
          }
        </Router>
    </div>
  );
}

export default App;
