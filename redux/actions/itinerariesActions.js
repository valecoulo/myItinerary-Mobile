import axios from "axios"

const itinerariesActions = {
     getOneItinerary: (id) => {
        return async (dispatch) => {
           let response = await axios.get('https://myitinerary-lamothe.herokuapp.com/api/itinerarycity/' + id) 
           let infoItinerary = response.data.response
           dispatch({ type: 'ONE_ITINERARY', payload: infoItinerary })   
           
         }
      },
      sendComment: (commentInfo)=>{
         return async()=>{
            const response = await axios.post('https://myitinerary-lamothe.herokuapp.com/api/itinerary/comments', commentInfo)
            return response
         }
      },
      
      deleteComment: (IDs)=> {
         return async()=>{
            console.log("llegue a itineraryAction:", IDs);
            const response = await axios.delete('https://myitinerary-lamothe.herokuapp.com/api/itinerary/comments',  {data: IDs})
            console.log("deletecommentresponse:",response) 
            return response.data.response
         }
      },
      
      editComment: (itineraryId, commentInfo)=> {
         return async()=>{
            const response = await axios.put('https://myitinerary-lamothe.herokuapp.com/api/itinerary/comments/' + itineraryId, commentInfo )
            return response.data.response
         }
   },
   likeItinerary: (id, token) =>{
      return async () => {
              try{
                  const response = await axios.put(`https://myitinerary-lamothe.herokuapp.com/api/itineraries/like/${id}
                  `, {},{
                      headers:{
                          Authorization: `Bearer ${token}`
                      }
                  })
                  return response
              } catch(error) {
                  console.error(error)
              }
      }
  }
}

export default itinerariesActions