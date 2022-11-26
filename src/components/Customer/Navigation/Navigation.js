import './Navigation.css'

import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';

const Navigation=()=>{
    return(
      <div class="btn-group">     
<button class="button">About us</button>

      <Link to = "http://localhost:3001/">
        <button class="button" >Products and Services <i class="fas fa-caret-down"></i></button>
        </Link>
        <button class="button">Customer Service</button>
        <Link to = "/">
        <button class="logout-button ">Log Out</button>
        </Link>
      </div>
    )
   
}
export default Navigation;