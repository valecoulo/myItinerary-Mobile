 const citiesReducer = (state= {allCities: [], citiesFiltered: [], oneCity: []}, action) => {
    switch(action.type) {
       case 'ALL_CITIES' :
         return {
            ...state,
            allCities: action.payload,
            citiesFiltered: action.payload
         }
      case 'ONE_CITY':
         return {
            ...state,
            oneCity: action.payload
         }
      case 'GET_CITIES_FILTERED':
         const {cities, e} = action.payload
         const filtered = cities.filter(city => city.cityName.toLowerCase().startsWith(e.toLowerCase().trim()))
         return {
            ...state,
            citiesFiltered: filtered
         }
       default:
         return state
    }
 }

 export default citiesReducer;