import classes from './Navigation.module.css'
import { Link } from 'react-router-dom'


const Navigation=()=>{
    return(
      <div className={classes.btn_group}>     
<button className={classes.button}>About us</button>

      <Link to = "http://localhost:3001/">
        <button className={classes.button}>Products and Services <i class="fas fa-caret-down"></i></button>
        </Link>
        <button className={classes.button}>Customer Service</button>
        <Link to = "/">
        <button className={classes.logout_button}>Log Out</button>
        </Link>
      </div>
    )
   
}
export default Navigation;