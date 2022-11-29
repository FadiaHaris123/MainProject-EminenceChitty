const Users = (props) => {
    return(
        <div >
            <li>
                <h2>User ID:{props.userid}</h2>
                <h2>Name: {props.name}</h2>
                <h2>place:{props.place}</h2>
                <h2>email:{props.email}</h2>
            </li>
        </div>
    );
}

export default Users;