import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CharacterSheet from './components/CharacterSheet.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home/Home';
import Login from './components/login-signup/Login';
import LandingPage from './components/LandingPage/LandingPage';
import MainFooter from './components/Footer';
import SignUp from './components/login-signup/SignUp';
import LoginNavBar from './components/login-signup/LoginNavBar';
import MainNavBar from './components/MainNavBar';
import { useState } from 'react';

function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [userId, setUserId] = useState(null)
  return (
    <div className="App">
        <Router>
          { loggedIn ? (
            <MainNavBar/>
          ):(
            <LoginNavBar/>
          )}
          <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/signUp" element={<SignUp/>}/>
            <Route path="/home/:userId" element={<Home/>}/>
            <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setUserId={setUserId} loggedIn={loggedIn}/>}/>
          </Routes>
           <MainFooter/>
        </Router>
    </div>
  );
}

export default App;
