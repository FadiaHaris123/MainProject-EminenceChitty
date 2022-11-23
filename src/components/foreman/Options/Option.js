import './Option.css'
import { Link } from 'react-router-dom';
const Option =()=>{
    return(
        <table>
                {/* Quick Action */}
           
            <tr>
                <td>
           
                    
                <button className='button'><span>Launch</span></button>
                </td>
                <td>
                <button className='button'><span>Auction</span></button>
              
                </td>
            </tr>
            <tr>
                <td>
                    <Link to="/managerList">
                <button className='button'><span>Employees</span></button>
                </Link>
                </td>
                <td>
                <button className='button'><span>Earnings</span></button>
            
                </td>
            </tr>
        </table>
    )

}

export default Option;