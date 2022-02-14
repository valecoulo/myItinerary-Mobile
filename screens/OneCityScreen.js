import React from 'react';
import { connect } from 'react-redux';
import { Text, View, Image, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import citiesActions from '../redux/actions/citiesActions';
import { useEffect } from 'react';
import itinerariesAction from '../redux/actions/itinerariesActions';


export const OneCityScreen = ({route, cities, navigation, getCities, getOneItinerary, itineraries}) => {

  useEffect(() => {
      getCities();
      getOneItinerary(id);
  }, [])

  let id = route.params.params;

  console.log('route', route.params);

  const city = cities.find(city => city._id === id)

  const itinerary = itineraries.filter(() => id === city._id)

  console.log('itinerary', itinerary)

  console.log('itineraries', itineraries)

  console.log('in', city);

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} imageStyle={{ borderRadius: 6}}  source={{uri: city.image}}>
        <Text style={styles.city}>{city.cityName}</Text>
      </ImageBackground>
      <Text style={styles.country}>{city.country}</Text>
      <Text style={styles.title}>Join Us In This Wonderfull Adventure</Text>
    { itineraries.length > 0 
    ?
    <>
    {itinerary.map( itinerary => {
          return <View key={itinerary._id}>
                  <Image style={styles.authorImg} source={{uri: itinerary.authorImg}} />
                 </View>
        })}
    </>
    :
    <>
    <Text style={styles.notFound}>NO ITINERARIES FOUND</Text>
    </>
  }
        
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cities')}>
        <Text>BACK TO CITIES</Text>
      </TouchableOpacity>
    </View>
  )
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 222
    
  },
  country: {
    color: 'white',
    marginBottom: 20,
    fontWeight: 'bold',
    fontSize: 20
  },
  city: {
    color: 'white',
    marginBottom: 20,
    fontWeight: 'bold',
    fontSize: 20,
    backgroundColor: 'black',
    textAlign: 'center',
    marginTop: '50%'
  },
  title: {
    color: 'white',
    marginBottom: 20,
    fontWeight: 'bold',
    fontSize: 16
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
    borderRadius: 10
  },
  button: {
    borderWidth: 1,
    padding: 5,
    backgroundColor: 'white'
  },
  authorImg: {
    width: 50,
    height: 50,
  },
  notFound: {
    margin: 30,
    color: 'white',
    backgroundColor: 'black',
    padding: 5,
    fontWeight: 'bold',
    letterSpacing: 1
  }
})

const mapStateToProps = (state) => ({
  cities: state.cities.allCities,
  itineraries: state.itineraries.itineraries
});

const mapDispatchToProps = {
  getCities: citiesActions.getCities,
  getOneItinerary: itinerariesAction.getOneItinerary,
};

export default connect(mapStateToProps, mapDispatchToProps)(OneCityScreen);
