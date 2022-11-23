import './Navigation.css'
import { Link } from 'react-router-dom'
const Navigation=()=>{
    return(
        <div class="btn-group">
        <button class="button">Auction</button>
        <button class="button">Chitty <i class="fas fa-caret-down"></i></button>
        <button class="button">Customer Choice</button>
        {/* <button class="button">Hi, Foreman</button> */}
        <Link to = "/">
        <button class="logout-button ">Log Out</button>
        </Link>
      </div>
    )
   
}
export default Navigation;