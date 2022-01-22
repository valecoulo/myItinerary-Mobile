const citiesReducer = (state= {itineraries: []}, action) => {
    switch(action.type) {
      case 'ONE_ITINERARY':
         return {
            ...state,
            itineraries: action.payload
         }
       default:
         return state
    }
 }

 export default citiesReducer;