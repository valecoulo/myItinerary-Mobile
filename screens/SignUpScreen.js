import styles from '../styles';
import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, TextInput, ImageBackground, TouchableOpacity } from "react-native";
import { showMessage, hideMessage } from "react-native-flash-message"
import authActions from '../redux/actions/authActions';
import { connect } from "react-redux";
import axios from 'axios';

const SignUpScreen = (props) => {

  console.log('propsSignUp', props);

  const [countries, setCountries] = useState([]);

  useEffect(async () => {
    const data = await axios.get('https://restcountries.com/v2/all?fields=name')
    setCountries(data.data)
  }, [])

    const backgroundImage = { uri: "https://i.imgur.com/T55mGg1.jpg" };

    const [newUser, setNewUser] = useState({
      userName: "",
      email: "",
      password: "",
      country: "none",
      userImage: ""
    })

    const inputHandler = (e, field, value) => {
      setNewUser({
        ...newUser,
        [field]: e || value
      })
    }

    const submitForm = () => {
      let info = Object.values(newUser).some(infoUser => infoUser === '')
      if(info) {
        showMessage({
          message: 'There are fields incomplete, please complete them',
          type: 'danger'
        })
      } else {
        props.signUp(newUser)
        .then(response => {
          if(response.data.success) {
            showMessage({
              message: 'Your account has been created!',
              type: 'success'
            })
          } else {
            response.data.errors.map(error => setErrorInput(messageError => {
              return {
                ...messageError,
                [error.path]: error.message
              }
            }))
          }
        })
        .catch(error => {
          console.log(error)
          showMessage({
            message: 'We are facing technical difficulties! Come back later!',
            type: 'danger'
          })
        })
      }
    }

    return (
        <>
        <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.backgroundImageSignIn}>
        <View style={styles.containerForm}>
        <View>
          <View>
          <View style={styles.formBackground}>
            <Text style={styles.titleSignIn}>Sign up</Text>
            <TextInput style={styles.inputSignIn} type="text" onChangeText={e => {inputHandler(e, 'userName')}} name="userName" placeholder="Username" />
            {/* <Text className='text-danger'>{errorInput.userName}</Text> */}
            <TextInput style={styles.inputSignIn} type="text" onChangeText={e => {inputHandler(e, 'email')}} name="email" placeholder="E-mail" />
            {/* <Text className="text-danger">{errorInput.email}</Text> */}
            <TextInput style={styles.inputSignIn}  onChangeText={e => {inputHandler(e, 'password')}}name="password" placeholder="Password" secureTextEntry={true} />
            {/* <Text className="text-danger">{errorInput.password}</Text> */}
            <TextInput style={styles.inputSignIn} type="url" onChangeText={e => {inputHandler(e, 'userImage')}} name="userImage" placeholder="URL profile image" />
            {/* <select name="country" onChange={inputHandler}>
              {countries.map(country => {
                return <option>{country.name}</option>
              })}
            </select> */}

          <TouchableOpacity style={styles.buttonForm} name="signup_submit"  onPress={() => submitForm()}  value="Sign me up"><Text style={{color:'white'}}>Sign Up</Text></TouchableOpacity>
  
          <Text style={{marginTop: 10}}>Already have an account? </Text>
          </View>
          </View>
        </View>
      </View>
      </ImageBackground>
      </>
    )
}

const mapStateToProps = state => {
  return {     
    userName: state.authReducer.userName     
  }     
}

const mapDispatchToProps = {
  signUp: authActions.signUp
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen)