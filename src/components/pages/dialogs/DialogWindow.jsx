import { useState} from "react"
import Message from '../../Ucomponents/Message';
import { makeMessageDto } from "../../../services/message-service";

function DialogWindow({messages, setMessages, currentDialog}) {
    
    const [message,setMessage] =useState([])
    const userId = JSON.parse(localStorage.getItem("user")).user.id 
    const socket = new WebSocket("ws://localhost:4000/")

    socket.onopen = () => console.log("Connected") 

    socket.onmessage = (event) => {
        const mes = JSON.parse(event.data)
        setMessages(mes)
        console.log(messages)
    }

    const sendMessage = (message) => {
        socket.send(makeMessageDto(currentDialog.dialogId, userId, message))
        setMessage([])
    }

    return ( 
        <div className="current_dialog">
            <div className='current_dialog_header'>
                Current dialog
            </div>
            <div className='message-box'>
                { 
                    messages.map((message,index) => {
                        return <Message 
                                    myMes={(userId === message.userId) ? true : false} 
                                    key={index} 
                                    message = {message}
                                />})
                }
            </div>
            <div className='message-form' >
                <input 
                    placeholder="Your message..." 
                    type="text"
                    value={message}
                    onChange={event => setMessage(event.target.value)}
                />
                <button onClick={()=>sendMessage(message)}>Send</button>
            </div>
        </div>
     )
}

export default DialogWindow;