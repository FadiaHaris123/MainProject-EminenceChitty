import './ManagerNav.css'
import { Link } from 'react-router-dom'
const ManagerNav=()=>{
    return(
      <div class="btnn-group">
        <button class="button">Auction</button>
        <button class="button">Chitty <i class="fas fa-caret-down"></i></button>
        <Link to = "/">
        <button class="logout-button ">Log Out</button>
        </Link>
      </div>
    )
   
}
export default ManagerNav;