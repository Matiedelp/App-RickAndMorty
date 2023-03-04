import { ADD_FAVORITE, REMOVE_FAVORITE, FILTER, ORDER } from "./action.type";
import axios from 'axios';

export const addFavorite = (character) =>{
    // return {type: ADD_FAVORITE, payload: character}
    try {
        return async (dispatch) =>{
            const response = await axios.post("http://localhost:3001/rickandmorty/fav", character)
            const data = response.data;
    
            return dispatch({
                type: ADD_FAVORITE,
                payload: data
            })
        }
    } catch (error) {
        console.error(`Se produjo un error: ${error.message}`);
    }
}

export const removeFavorite = (id) =>{
    // return {type: REMOVE_FAVORITE, payload: id}
    return async (dispatch) =>{
   try {
        const response = await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`);
        // const data = response.data;
        dispatch({type: REMOVE_FAVORITE,payload: response.data});
    }catch (error) {
    console.log(`Se produjo un error: ${error.message}`);
    dispatch({type: REMOVE_FAVORITE,payload: error.message})
   }
}
}

export const filterCards = (gender) =>{
    return {type: FILTER, payload: gender}
}

export const orderCards = (id) =>{
    return {type: ORDER, payload: id}
}

// export const getFavorites = (character) =>{
    
//    try {
//     return async (dispatch) =>{
//         const response = await axios.get(`http://localhost:3001/rickandmorty/fav`, character)
//         const data = response.data;

//         return dispatch({
//             type: GET_FAVORITE,
//             payload: data
//         })
//     }
// } catch (error) {
//     console.log(error, ('error'));
// }
// }
