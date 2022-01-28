import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { AntDesign } from '@expo/vector-icons';
import { connect } from "react-redux";
import authActions from '../redux/actions/authActions';
import { showMessage, hideMessage } from "react-native-flash-message";


const CustomDrawer = props => {

    return (
        <View style={{flex: 1}}>
            <DrawerContentScrollView>
                <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            {props.userImage !== null 
            ?  
            <TouchableOpacity onPress={() => props.logOut()}>
            <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#ccc' }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <AntDesign name="man" size={24} color="black" />
                <Text style={{paddingLeft: 10}}>Log Out</Text>
                </View>
            </View>
         </TouchableOpacity>
            : 
            <>
            </> 
            }
        </View>
    )
}

const mapStateToProps = state => {
    return {
        userImage: state.authReducer.userImage
    }
  }

const mapDispatchToProps = {
    logOut: authActions.signOutUser
  }

export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawer);
