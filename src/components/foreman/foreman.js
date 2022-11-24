import { Fragment } from "react"
import AvailableChit from "./AvailableChits/AvailableChit"
import Header from './Header/Header'
import Navigation from './Navigation/Navigation'
import Option from './Options/Option'
import './foreman.css'

const foreman =()=>{
    return(
    <Fragment>    
        <div className="header_nav">
        <Header></Header>
          <Navigation></Navigation>
        </div>
          <div className="foreman_bg"><Option></Option> 
          <AvailableChit></AvailableChit>
          </div> 
    </Fragment>)
}
export default foreman;