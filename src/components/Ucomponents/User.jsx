import Avatar from "../../img/avatar.png"
import { Link } from "react-router-dom";
import axios from "axios";

function User(props) {

    const createDialog = async () => {
        await axios.post("http://localhost:5000/api/createdialog",
        {
            id1:JSON.parse(localStorage.getItem("user")).user.id, 
            id2:props.user.id
        })
    }

    return ( 
    <div className="user-box">
        <img className="user-box__photo" src={Avatar} alt="error loading"/>
        <div className="user-box__name">
            {props.user.name}
        </div>
        <Link onClick = {createDialog} to="/dialogs"> Начать диалог</Link>

    </div> );
}

export default User;