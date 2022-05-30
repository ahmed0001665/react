import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes , Route } from "react-router-dom"
import Login from './pages/Login';
import Register from './pages/Register';
import Home_Particulier from './pages/Home_Particulier';
import Home_Professionnel from './pages/Home_Professionnel';
import RDV_Particulier from './pages/RDV_Particulier';
import RDV_professionnel from './pages/RDV_professionnel';

function App() {
  return (
        <Router>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/home_particulier" element={<Home_Particulier />} />
              <Route path="/home_professionnel" element={<Home_Professionnel />} />
              <Route path="/rdv_particulier" element={<RDV_Particulier />} />
              <Route path="/rdv_professionnel" element={<RDV_professionnel />} />
              <Route path="*"element={<Login />}/>
            </Routes>
        </Router>
  );
}

export default App;
