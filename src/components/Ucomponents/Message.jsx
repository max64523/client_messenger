function Message(props) {
    return ( 
    <>
        <div className={"message" + (props.myMes ? " right" : " left")}>
            {props.message.message}
        </div> 
    </>);
}

export default Message;