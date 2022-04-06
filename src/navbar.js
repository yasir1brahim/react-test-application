import logo1 from './logo1.jpg'
import Home from './Home';
import { Link } from 'react-router-dom'
function Navbar(){

    return(
        <div class="topbar">
        <div class="container">
           <div class="app-brand demo">
              <div class="logo_bar">
                 <a href="index.html"> 
                 <img src={logo1} title="logo" /> 
                 </a>
              </div>
              <div class="menu_bar">
                 <ul class="menu-inner">
                    <li class="menu-item active"> 
                    <Link to="/home">   Home</Link>
                    
                      
                    </li>
                    <li class="menu-item">
                    <Link to="/setup"> Setup</Link>
                    </li>
                    <li class="menu-item"> 
                    <Link to="/analyze">   Analyze</Link>
                    </li>
                    <li class="menu-item"> <Link to="/settings"> Settings</Link>
                    </li>
                 </ul>
              </div>
           </div>
        </div>
     </div>
    );
}

export default Navbar;