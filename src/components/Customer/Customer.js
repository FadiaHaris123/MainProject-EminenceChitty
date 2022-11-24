import { Fragment } from "react"
import Header from './Header/Header'
import Navigation from './Navigation/Navigation'
import './Customer.css'
import BackgroundImage from '../Customer/customer3.jpg'


const Customer =()=>{
    return(
        
        
    <div className="bgimg" >
        <div className="header_nav">
            <Header></Header>
                <Navigation></Navigation>
         </div>
        <div className="imge"> </div>
                <br></br>
             <br></br>
            <div className="about">
                 <h1>About us</h1>
                 <br></br>
                 <p>A unique financial savings scheme, designed to ensure safe savings of your hard earned money. A chitty scheme with insurance coverage and pension plan, software that allows you to join chits, pay installments, and 
        take part in chitty auction from anywhere, anytime.</p>
             </div>
    </div> 
    
   
    )
}
export default Customer;

