import React, { useState } from 'react';
import styles from '../styles';
import { Text, View, TextInput, Button, ImageBackground, TouchableOpacity, TouchableWithoutFeedback, keyBoard  } from "react-native";
import { showMessage, hideMessage } from "react-native-flash-message"
import authActions from '../redux/actions/authActions';
import { connect } from "react-redux";


const SignInScreen = (props) => {

    const [signUser, setSignUser] = useState ({
        email: "", 
        password: "",
    })

    const [ errorInput, setErrorInput ] = useState(null)

    const inputHandler = (e, field, value) => {
        setSignUser({
            ...signUser, 
            [field]: e || value
        })
    }

    const submitForm = () => {
        let info = Object.values(signUser).some(infoUser => infoUser === "")
        if(info) {
            showMessage({
                type: 'danger',
                message: 'There are fields incomplete, please complete them'
            })
        } else {
            props.signIn(signUser)
            .then(response => {
                if(!response.data.success) {
                    showMessage({
                     type: 'danger',
                     message: 'Email and/or password incorrect'
                   })
                } else {
                    showMessage({
                        type: 'success',
                        message: `Welcome back ${response.data.response.userName}!`
                    })
                }
            })
            .catch(() => showMessage({
                type: 'danger',
                message: 'catch'
            }))
        }
    }

    const backgroundImage = { uri: "https://i.imgur.com/EF5tG5I.jpg" };

    return (
    <>
    <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()
        }}>
        <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.backgroundImageSignIn}>
            <View style={styles.containerForm}>
                <View style={styles.formBackground}>
                    <View>
                        <Text style={styles.titleSignIn}>Sign in </Text>

                        <TextInput style={styles.inputSignIn}  onChangeText={e => {inputHandler(e, 'email')}} type="text" name="email" placeholder="E-mail" />
                        <TextInput style={styles.inputSignIn}  onChangeText={e => {inputHandler(e, 'password')}} secureTextEntry={true} name="password" placeholder="Password" />
                        <TouchableOpacity style={styles.buttonForm} name="signup_submit" onPress={() => submitForm()}  value="Sign me up"><Text style={{color:'white'}}>Sign in</Text></TouchableOpacity>
                       
                        <Text style={{marginTop: 10}}>You dont have an account?</Text>
                    </View>
                </View>
            </View>
        </ImageBackground>
        </TouchableWithoutFeedback>
    </>
    )
}

const mapStateToProps = state => {
    return {
        userName: state.authReducer.userName,
        email: state.authReducer.email,
        userImage: state.authReducer.userImage
    }
}

const mapDispatchToProps = {
    signIn: authActions.signIn
}

export default connect (mapStateToProps, mapDispatchToProps) (SignInScreen)