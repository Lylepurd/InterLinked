import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Landing } from './Pages/Landing/Landing';
import { Login } from './Pages/Login/Login';
import { Signup } from './Pages/Signup/Signup';
import { Home } from './Pages/Home/Home';
import { Profile } from './Pages/Profile/Profile';


function App() {

  return (
    <>
      <Router>

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>

      </Router>
    </>
  )
}

export default App
