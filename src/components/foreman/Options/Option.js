import { Link } from 'react-router-dom';
import './Option.css'
import { Fragment, useState } from 'react';
import Modal from '../Launch/Modal';

const Option =()=>{

    const [openModal, setOpenModal] = useState(false);
    
    // setOpenModal(true).style.blur('4');
   
    
    console.log("onClicked");
    return(<Fragment>

        <table>
            {/* Quick Action */}
            <tbody>

            <tr>
                <td>


                    <button className='button' onClick={()=>{setOpenModal(true);}}><span>Launch</span></button>
                   {openModal && <Modal closeModal={setOpenModal}/> } 
                   
                </td>
                
                <td>
                    <button className='button'><span>Auction</span></button>

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
            </tbody>
        </table>
        </Fragment>
    )

}

export default Option;