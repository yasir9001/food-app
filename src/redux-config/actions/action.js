function saveLoginData(data){
    return dispatch => {
        dispatch({
            type:'SAVE_LOGIN_DATA',
            payload:data
        })
    }
}


export {
    saveLoginData
}