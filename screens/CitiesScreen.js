import styles from '../styles';
import { Text, View, ScrollView, ImageBackground, ActivityIndicator, TouchableOpacity, TextInput } from "react-native";
import citiesActions from '../redux/actions/citiesActions';
import { connect } from "react-redux"
import React, { useEffect } from 'react';
import { showMessage, hideMessage } from "react-native-flash-message"

const CitiesScreen = (props) => {

    useEffect(() => {
        async function getCities() {
            try{
                await props.getCities()
            } catch (err){
                showMessage({
                    message: "We're having technical difficulties!",
                    type: "danger",
                    position: "top",
                    statusBarHeight: "80", 
                    backgroundColor: "rebeccapurple"
                })
                console.log(err.message)
                return false
            }
        }
        getCities()
        
       // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const {cities, citiesFiltered } = props;

    return (
        <ScrollView style={{backgroundColor: 'black'}}>
            <View style={styles.containerCities}>
                <View style={{borderBottomWidth: 1, borderColor: 'orange', width: '50%',alignItems: 'center', margin: '10%'}}>
                <TextInput placeholder="Search for a city..." onChange={(e) => props.getFiltered(cities, e.nativeEvent.text)} placeholderTextColor={'white'} style={{color: 'white', fontSize: 17}} />
                </View>
                {/* <Search placeholder="Enter a city... "
                    handleChange={e => this.props.getFiltered(cities, e.target.value)} /> */}
                {cities.length === 0
                    ? <>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', margin: '20%'}}>
                        <ActivityIndicator color='orange' size="large" />
                    </View>
                      </>
                    : (citiesFiltered.length > 0
                        ? citiesFiltered.map((city, index) => {
                            return (
                                // <NavLink to={`/city/${city._id}`}>
                                <TouchableOpacity key={city._id} onPress={() => props.navigation.navigate('OneCity', {params: city._id})}>
                                <View style={{}} >
                                    <ImageBackground style={{width:200, height:200,marginBottom: 30,borderRadius: 30,  alignItems:'center',borderRadius: 10}} source={{uri: city.image}} imageStyle={{ borderRadius: 6}} >
                                        <View style={{backgroundColor: 'black', width: '90%', alignItems:'center', justifyContent: 'center', borderRadius: 2.5, marginTop:'40%'}}>
                                        <Text style={styles.textCity}>{city.cityName}</Text>
                                        </View>
                                        </ImageBackground>
                                    </View>
                                    </TouchableOpacity>
                                // </NavLink>
                                )
                        })
                        : <View style={{padding: '2%', backgroundColor: 'white', margin: '10%', borderRadius: 4, width: '50%', alignItems: 'center'}}>
                            <Text style={{color: 'black'}}>NO CITIES FOUND</Text>
                           </View>
                           )}
                        <TouchableOpacity style={{padding: '2%', backgroundColor: 'orange', margin: '10%', borderRadius: 3}} onPress={() => props.navigation.navigate('Home')}>
                            <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>Back to Home</Text>
                        </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const mapStateToProps = state => {
    return {
        cities: state.cities.allCities,
        citiesFiltered: state.cities.citiesFiltered
    }
  }
  
  const mapDispatchToProps = {
    getCities: citiesActions.getCities,
    getFiltered: citiesActions.getFiltered
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(CitiesScreen)