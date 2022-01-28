import { Text, View, ScrollView, ImageBackground, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import SignUpScreen from './SignUpScreen';
import SignInScreen from './SignInScreen';
import CitiesScreen from './CitiesScreen';
import authActions from '../redux/actions/authActions'
import { connect } from "react-redux";
import CustomDrawer from '../components/CustomDrawer';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';



const Drawer = createDrawerNavigator(); 

const HomeScreen = ({ navigation }) => {

    const backgroundImage = { uri: "https://i.imgur.com/Ivydeff.jpg" };

    return (
    <>
        <SafeAreaView>
            <View style={styles.homeContainer}>
                <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.backgroundHome}>
                    <View style={styles.containerTextsAndtitle}>
                    <Text style={styles.title}>Mytinerary</Text>
                    <View style={{alignItems: 'center'}}>
                    <Text style={styles.textHome}>Find your perfect trip, </Text>
                    <Text style={styles.textHome}>designed by insiders</Text>
                    <Text style={styles.textHome}>who know and love their cities!</Text>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cities')}>
                        <Text style={styles.fontButton}>Go to Cities!</Text>
                    </TouchableOpacity>
                    </View>
                </ImageBackground>
                <Text style={styles.titleCarousel}>Popular MYtineraries</Text>
            </View>
        </SafeAreaView>
    </>
    )
}

const HomeNavigate = (props) => {
    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />} initialRouteName="Home" screenOptions={{
            headerShown: true,
            }}>

            <Drawer.Screen 
                name='Home' 
                component={HomeScreen}
                options={{
                    drawerIcon: () => {
                      return <Entypo name="home" size={22} color="black" />
                    }
                  }}
            />

            <Drawer.Screen 
                name='Cities' 
                component={CitiesScreen}
                options={{
                    drawerIcon: () => {
                       return <FontAwesome5 name="city" size={22} color="black" />
                    }
                  }}
            />

            {props.userName ?
            <></>
            :
            <Drawer.Screen 
            name='Sign In' 
            component={SignInScreen}
            options={{
                drawerIcon: () => {
                    return <Ionicons name="person" size={22} color="black" />
                }
              }}
            />
            }

            {props.userName ? 
            <></>
            :
            <Drawer.Screen 
                name='Sign Up' 
                component={SignUpScreen}
                options={{
                    drawerIcon: () => {
                     return <Ionicons name="person-add" size={24} color="black" />
                    }
                  }}
            />
            }
            

        </Drawer.Navigator>
    )
}


const styles = StyleSheet.create({
    backgroundHome: {
        width: '100%',
        height: 500,
        alignItems: 'center',
        paddingTop: '18%',
        borderRadius: 5
    },
    homeContainer: {
        backgroundColor: 'black',
        height: '100%',
        width: '100%'
    },
    title: {
        color: 'black',
        fontSize: 40,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.30)',
        textShadowOffset: {width: 0, height: 0},
        textShadowRadius: 10
    },
    textHome: {
        fontSize:18,
        color: 'white',
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: 0, height: 0},
        textShadowRadius: 10
    },
    containerTextsAndtitle: {
        flex: 1, 
        alignItems: 'center', 
        width: '90%',
        justifyContent: 'space-around'
    },
    button: {
        backgroundColor: 'orange',
        padding: '4%',
        borderRadius: 3,
    },
    fontButton: {
        fontSize: 20,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.50)',
        textShadowOffset: {width: 0, height: 0},
        textShadowRadius: 10
    },
    titleCarousel: {
        color: 'white', 
        alignSelf: 'center',
        margin: '15%', 
        fontSize: 22,
        textShadowColor: 'rgba(0, 0, 0, 0.200)',
        textShadowOffset: {width: 0, height: 0},
        textShadowRadius: 10,
        fontWeight: 'bold'
    }
  })

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

  export default connect(mapStateToProps, mapDispatchToProps)(HomeNavigate)