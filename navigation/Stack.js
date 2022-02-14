import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import SignUpScreen from '../screens/SignUpScreen';
import SignInScreen from '../screens/SignInScreen';
import CitiesScreen from '../screens/CitiesScreen';
import OneCityScreen from '../screens/OneCityScreen';

const StackNav = createNativeStackNavigator();

const Stack = () => {
  return (
      <StackNav.Navigator>
        {/* <StackNav.Screen component={MainScreen} name="Main" options={{headerShown: false}} /> */}
        <StackNav.Screen component={HomeScreen} name="Main" options={{headerShown: false}} />
        <StackNav.Screen component={CitiesScreen} name="Cities" options={{headerShown: false}} />
        <StackNav.Screen component={SignUpScreen} name="SignUp" options={{headerShown: false}} />
        <StackNav.Screen component={SignInScreen} name="SignIn" options={{headerShown: false}} />
        <StackNav.Screen component={OneCityScreen} name="OneCity" options={{headerShown: false}} />
      </StackNav.Navigator>     
  );
}

export default Stack;