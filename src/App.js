
import logo from './logo.svg';
import './App.css';
import Test from './Test'
import Setup from './Setup';
import Analyze from './Analyze';
import Settings from './Settings';
import Navbar from './navbar';
import Home from './Home';
import {Route,Link, Routes, Router} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route exact path="/home" element={<Home />} />        
        <Route exact path="/test" element={<Test />} />
        <Route exact path="/setup" element={<Setup />} />
        <Route exact path="/analyze" element={<Analyze />} />
        <Route exact path="/settings" element={<Settings />} />
      </Routes>

    </div>
  );
}

export default App;

