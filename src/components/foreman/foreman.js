import { Fragment } from "react"
import AvailableChit from "./AvailableChits/AvailableChit"
import Header from './Header/Header'
import Navigation from './Navigation/Navigation'
import Option from './Options/Option'
import classes from './foreman.module.css';

const foreman =()=>{
    return(
    <Fragment>    
        <div className={classes.header_nav}>
        <Header></Header>
        <Navigation></Navigation>
        </div>
          <div className={classes.foreman_bg}><Option></Option> 
          <AvailableChit></AvailableChit>
          </div> 
    </Fragment>)
}
export default foreman;