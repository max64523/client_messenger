import DialogLink from "../../Ucomponents/DialogLink";

function DialogsList(props) {

    return ( 
        <div className="dialogs_nav">
            <div className="dialogs_nav_header">Your dialogs</div>
            <ul>
                {
                    props.dialogs.map(dialog => {  
                        return (
                            <DialogLink 
                                setCurrentDialog = {props.setCurrentDialog}
                                currentDialog = {dialog.dialogId === props.currentDialog.dialogId}
                                key = {dialog.dialogId}
                                dialog = {dialog}
                                user={dialog.user}
                            />)
                    }) 
                }
            </ul>
        </div>
     );
}

export default DialogsList;