import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import SignUpScreen from '../screens/SignUpScreen';
import SignInScreen from '../screens/SignInScreen';
import CitiesScreen from '../screens/CitiesScreen';

const StackNav = createNativeStackNavigator();

const Stack = () => {
  return (
      <StackNav.Navigator>
        {/* <StackNav.Screen component={MainScreen} name="Main" options={{headerShown: false}} /> */}
        <StackNav.Screen component={HomeScreen} name="Home" options={{headerShown: false}} />
        <StackNav.Screen component={CitiesScreen} name="Cities" options={{headerShown: false}} />
        <StackNav.Screen component={SignUpScreen} name="SignUp" options={{headerShown: false}} />
        <StackNav.Screen component={SignInScreen} name="SignIn" options={{headerShown: false}} />
        {/* <StackNav.Screen component={OneDrinkScreen} name="OneDrink" options={{headerShown: false}} /> */}
      </StackNav.Navigator>     
  );
}

export default Stack;