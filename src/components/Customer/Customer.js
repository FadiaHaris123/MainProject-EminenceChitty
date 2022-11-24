import { Fragment } from "react"
import Header from './Header/Header'
import Navigation from './Navigation/Navigation'
import './Customer.css'
import BackgroundImage from '../Customer/customer3.jpg'


const Customer =()=>{
    return(
        
        
    <Fragment>    
        
       
        <div className="header_nav">
        <Header></Header>
       
          <Navigation>
         
          </Navigation>
         
        </div>
        
          <div className="Customer_bg">
         
          </div> 
          
          <header style={ HeaderStyle }>
        </header>
         
    </Fragment>
    
   
    )
}
export default Customer;

const HeaderStyle = {
    width: "90%",
    height: "90vh",
    // padding: 20% 20% 50% 50%,
    background: `url(${BackgroundImage})`,
    backgroundPosition:'fixed',
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    backgroundAttachment: "fixed",
    
}