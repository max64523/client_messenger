
export const makeMessageDto = (dialogId,userId,message) => {
    return JSON.stringify({dialogId,userId,message})
}
