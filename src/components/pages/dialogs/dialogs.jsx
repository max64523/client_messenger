import {useEffect, useState} from 'react';
import DialogWindow from './DialogWindow';
import DialogsList from "./DialogsList";
import { fetchMessages, fetchDialogs } from '../../../services/fetch-service';

function Dialogs() {
    const [dialogs, setDialogs] = useState([])
    const [currentDialog,setCurrentDialog] = useState({})
    const [messages,setMessages] = useState([])
    const userId = JSON.parse(localStorage.getItem("user")).user.id 

    useEffect(  () => {
        fetchDialogs(userId)
            .then( res => { 
                setDialogs(res.data)
                setCurrentDialog(res.data[0])
            })
    }, [])

    useEffect( ()=>{
        if(currentDialog.dialogId)
            fetchMessages(currentDialog, userId)
                .then(res => setMessages(res.data))     
    } ,[currentDialog])

    return ( 
    <div className="page dialogs" >
        <DialogsList 
            setDialogs = {setDialogs}
            currentDialog={currentDialog}
            setCurrentDialog={setCurrentDialog}
            dialogs={dialogs}
        />
        <DialogWindow 
            messages = {messages}
            setMessages = {setMessages}
            currentDialog={currentDialog}
        />
    </div> );
}

export default Dialogs;