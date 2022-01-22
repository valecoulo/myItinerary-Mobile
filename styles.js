import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    title: {
        color: 'white',
        fontSize: 25,
    },
    container: {
        flex: 1,
        backgroundColor: '#292929'
      },
    body: {
        backgroundColor: 'black',
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerForm: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleSignIn: {
        fontSize: 30,
        marginBottom:10
    },
    inputSignIn: {
        borderBottomWidth: 2,
        borderRadius: 2,
        height: 35,
        fontSize:15,
        padding: 3,
        color: 'gray',
        marginBottom: 10
    }, 
    backgroundImageSignIn: {
        flex: 1,
        justifyContent: 'center'
    },
    formBackground: {
        backgroundColor: 'white',
        padding: 40,
        borderRadius: 3
    },
    buttonForm : {
        backgroundColor: '#000',
        color: '#fff',
        margin: 15,
        alignItems: 'center',
        padding: 10,
        borderRadius: 3
    },
    containerCities: {
        backgroundColor: '#000',
        flex: 1,
        alignItems: 'center',
    },
    textCity: {
        color: '#fff',
        fontSize: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundHome: {
        width: 400,
        height: 500,
        flex: 1,
        alignItems: 'center',
        marginTop: 40,
        paddingTop: '18%',
        borderRadius: 5
    },
    homeContainer: {
        backgroundColor: 'black',
        height: '100%',
        flex: 1,
        alignItems: 'center',
    }
})

export default styles;