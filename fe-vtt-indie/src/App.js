import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CharacterSheet from './components/CharacterSheet.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<CharacterSheet/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
