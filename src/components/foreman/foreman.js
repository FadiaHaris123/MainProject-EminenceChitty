import { Fragment } from "react"
import AvailableChit from "./AvailableChits/AvailableChit"
import Header from './Header/Header'
import Navigation from './Navigation/Navigation'
import Option from './Options/Option'

const foreman =()=>{
    return(<Fragment>
     
     <Header></Header>
      <Navigation></Navigation>
      
      <Option></Option>  
      <AvailableChit></AvailableChit>
    </Fragment>)
}
export default foreman;