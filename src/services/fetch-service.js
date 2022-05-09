import axios from 'axios';

export const fetchDialogs = async (userId) => {
    return await axios.post("http://localhost:5000/api/dialogs", {id:userId} );
}

export const fetchMessages = async (currentDialog, userId) => {
    return await axios.post("http://localhost:5000/api/messages", 
                {dialogId:currentDialog.dialogId, userId} )
}

export const fetchUsers = async (name, id) => {
    return await axios.post('http://localhost:5000/api/users',{name,id});
}