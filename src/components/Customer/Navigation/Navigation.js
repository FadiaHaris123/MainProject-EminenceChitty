import './Navigation.css'

import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';

const Navigation=()=>{
    return(
      <div class="btn-group">     
<button class="button">About us</button>

{/* <Dropdown>

        <Dropdown.Toggle variant="success">

          Products and Services

        </Dropdown.Toggle>

        <Dropdown.Menu>

          <Dropdown.Item href="#">

            Chitty

          </Dropdown.Item>

          <Dropdown.Item href="#">

            Online bidding

          </Dropdown.Item>

          <Dropdown.Item href="#">

            Online payment

          </Dropdown.Item>

        </Dropdown.Menu>

      </Dropdown> } */}
     
        
        <button class="button">Products and Services <i class="fas fa-caret-down"></i></button>
      
        <button class="button">Customer Service</button>
        <Link to = "/">
        <button class="logout-button ">Log Out</button>
        </Link>
      </div>
    )
   
}
export default Navigation;