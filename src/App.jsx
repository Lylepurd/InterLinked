import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Landing } from './Pages/Landing/Landing';
import { Login } from './Pages/Login/Login';
import { Signup } from './Pages/Signup/Signup';


function App() {

  return (
    <>
      <Router>
        {/* <Link to="/"> Create Post </Link> */}

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>

      </Router>
    </>
  )
}

export default App
