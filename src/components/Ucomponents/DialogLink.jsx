import avatar from "../../img/avatar.png";

function DialogLink(props) {
    return ( 
        <li
            onClick={() => props.setCurrentDialog(props.dialog)} 
            className={(props.currentDialog ? "current" : "")} 
        > 
            <img  src={avatar} alt="" />
            <p>{props.user.name}</p>
        </li> 
        );
}

export default DialogLink;