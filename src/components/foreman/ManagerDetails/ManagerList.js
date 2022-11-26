import './ManagerList.css'


const ManagerList = (props) => {
    return(
        <section class="wrapper">
            <li className="div1">{props.firstName}</li>
            <li className="div2">{props.lastName}</li>
            <li className="div3">{props.email}</li>
        </section>

    )
    }
    
    export default ManagerList;