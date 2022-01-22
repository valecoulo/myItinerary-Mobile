import axios from "axios" 

const authActions = {
    signUp: (newUser) => {
        return async (dispatch, getState) => {
            let response = await axios.post("https://myitinerary-lamothe.herokuapp.com/api/auth/signUp", {...newUser})
            console.log("actionauth:",response)
            if (response.data.success){
                dispatch({type: "LOGGED", payload: response.data.response})
            }
            else {
                console.log(response.data.errors.map(error => error.message))
            }
           return response 
        }
    },

    signIn: (signUser) => {
        return async (dispatch, getState) => {
            let response = await axios.post("https://myitinerary-lamothe.herokuapp.com/api/auth/signIn", {...signUser})
            console.log("actionauth", response)
            if (response.data.success){
                dispatch({type: "LOGGED", payload: response.data.response})   
            }
            else {
                console.log(response.data.errors)
            }
            return response
        }
    },
    signOutUser : () => {
        return(dispatch) => {
            dispatch({type:"LOG_OUT_USER"})
        }
    }, 
    signInUserLS: (token) => {
        return async (dispatch) => {
            try{
                const response = await axios.get('http://localhost:4000/api/verifytoken', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        }
                })
                dispatch({type:"LOGGED", payload:{token, userName:response.data.userName, userImage: response.data.userImage, _id: response.data._id}})   
            }catch(error) {
                console.log(error)
               return  dispatch({type:'LOG_OUT_USER' })
            }
        }
    }
}

export default authActions