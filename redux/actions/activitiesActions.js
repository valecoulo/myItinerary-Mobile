import axios from "axios"

const activitiesActions = {
    getActivitiesByItinerary: (itineraryId) => {
        return async () => {
            try {
                let response = await axios.get(`https://myitinerary-lamothe.herokuapp.com/api/activities/${itineraryId}`)
                console.log('action', response);
                let data = response.data.response
                return data
            } catch (error){
                return {
                    success: false, response: error
                }
            }
        }
    }
}

export default activitiesActions