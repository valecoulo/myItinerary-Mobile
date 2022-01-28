import { showMessage, hideMessage } from "react-native-flash-message"


const authReducer = (state = {userName: null,email: null, _id: null, userImage: null, token: null, user: null}, action) => {
    
    switch(action.type) {
        case "LOGGED": 
            return {
                ...state, 
                userName: action.payload.userName,
                email: action.payload.email,
                userImage: action.payload.userImage,
                token: action.payload.token,
                _id: action.payload._id,
                user: action.payload
        } 
        case "LOG_OUT_USER" :
            showMessage({
                message: 'See you later, aligator',
                backgroundColor: 'black',
                color: 'white',
                type: 'success'
            })
            return{
                token:null,
                userName:null,
                userImage:null,
                _id:null,
                user: null
            }

        default: 
            return state
    } 
}

export default authReducer