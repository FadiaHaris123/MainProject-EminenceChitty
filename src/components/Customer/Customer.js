import { Fragment } from "react"
import Header from './Header/Header'
import Navigation from './Navigation/Navigation'
import classes from './Customer.module.css'



const Customer =()=>{
    return(
      <div className={classes.bgimg}>

        <div className={classes.navbar}>
            <Header></Header>
                <Navigation></Navigation>
         </div>
         
        <div className={classes.imge}> </div>
                <br></br>
             <br></br>
            <div className={classes.about}>
                 <h1>About us</h1>
                 <br></br>
                 <p>A  unique  financial  savings  scheme, designed to ensure safe savings of your hard earned money. A chitty scheme with insurance coverage and pension plan, software that allows you to join chits, pay installments, and 
        take part in chitty auction from anywhere, anytime. Chitty  duration  50  months and below   is 12.00% (simple) and for  defaulted accounts  14.25%.

Chitty duration above 50 months is 11.50% (simple) and for defaulted accounts 13.75%.</p>
            
     </div>

     
     <div className={classes.products}>
                 <h1>Products and services</h1>
                 <br></br>
                 <p>A unique financial savings scheme, designed to ensure safe savings of your hard earned money. A chitty scheme with insurance coverage and pension plan, software that allows you to join chits, pay installments, and 
        take part in chitty auction from anywhere, anytime.</p>
            
     </div>

     <div className={classes.services}>
                 <h1>Customer services</h1>
                 <br></br>
                 <p>A unique financial savings scheme, designed to ensure safe savings of your hard earned money. A chitty scheme with insurance coverage and pension plan, software that allows you to join chits, pay installments, and 
        take part in chitty auction from anywhere, anytime.</p>
            
     </div>

     </div> 
    
   
    )
}
export default Customer;

