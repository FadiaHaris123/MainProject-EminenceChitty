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
                <button className='button'><span>Auction</span></button>
              
                </td>
            </tr>
            <tr>
                <td>
                <button className='button'><span>Employees</span></button>
              
                </td>
                <td>
                <button className='button'><span>Earnings</span></button>
            
                </td>
            </tr>
        </table>
    )

}

export default Option;