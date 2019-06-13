const initState = {
    userLoginData: null,
    
}

export default (state=initState, action) => {
    switch(action.type) {
        case "SAVE_LOGIN_DATA":
            alert('ads')
            return {
                ...state,
                userLoginData:action.payload
            };
        default:
            return state;
    }
}