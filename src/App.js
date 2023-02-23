import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';
import Signup from './components/Signup';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
function App() {
  return (
    <div>
      <header>
        <h1>CORD</h1>
        <h5 className="welcome">Welcome to The CORD!</h5>
      </header>
      <div style={{ width: '100px', marginLeft: '700px',display:'inline' }}>
        <Link to="/signup"><button type="button" className="btn btn-outline-danger">Sign In</button></Link>
        <Link to="/login"><button type="button" className="btn btn-outline-danger">Login</button></Link>
      </div>
      <Routes>
        <Route exact path='/signup' element={<Signup />}></Route>
        <Route path='/step1' element={<Step1 />}></Route>
        <Route path='/step2' element={<Step2 />}></Route>
        <Route path='/step3' element={<Step3 />}></Route>
        <Route path='/step4' element={<Step4 />}></Route>
        <Route path='/homepage' element={<Homepage />}></Route>

      </Routes>
    </div>
  );
}

export default App;
