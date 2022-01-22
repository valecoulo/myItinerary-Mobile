import styles from '../styles';
import { Text, View, ScrollView, ImageBackground, Image, Keyboard } from "react-native";
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

    console.log(props);


    console.log('CITIES:', cities)

    return (
        <ScrollView style={{backgroundColor: 'black'}}>
            <View style={styles.containerCities}>
                {/* <Search placeholder="Enter a city... "
                    handleChange={e => this.props.getFiltered(cities, e.target.value)} /> */}
                {cities.length === 0
                    ? <Text style={{margin: '40%', color: 'white'}}>LOADING...</Text>
                    : (citiesFiltered.length > 0
                        ? citiesFiltered.map((city , index) => {
                            return (
                                // <NavLink to={`/city/${city._id}`}>
                                    <View key={index} >
                                        <ImageBackground style={{width:200, height:200,marginTop: 30, justifyContent: 'center', alignItems:'center'}} source={{uri: city.image}} >
                                            <Text style={styles.textCity}>{city.cityName}</Text>
                                        </ImageBackground>
                                    </View>
                                // </NavLink>
                                )
                        })
                        : <Text className="text-light">NO CITIES FOUND</Text>)}
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