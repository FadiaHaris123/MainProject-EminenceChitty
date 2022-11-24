import { Link } from 'react-router-dom';
import './Option.css'

const Option =()=>{
    return(

        <table>
            {/* Quick Action */}

            <tr>
                <td>


                    <button className='button'><span>Launch</span></button>
                </td>
                <td>
                <Link to="/auction">
                    <button className='button'><span>Auction</span></button>
                    </Link>
                </td>
            </tr>
            <tr>
                <td>
                    <Link to="/employee">
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