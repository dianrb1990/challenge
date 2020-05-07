import axios from "axios";

const apiURL = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_GIPHY_KEY;
  
  export function fillList() {

    return (dispatch) =>{
      return axios.get(`${apiURL}/trending?api_key=${apiKey}&limit=5`)
      .then((response) => {
        dispatch({type: "GET_ITEMS_LIST", payload: response.data.data})
      })
      .catch((err) => {
        dispatch({type: "GET_ITEMS_LIST_ERROR", payload: err})
      })
    }
  }

  export function findItem(text) {
    return (dispatch) =>{
      return axios.get(`${apiURL}/search?api_key=${apiKey}&q=${text}&limit=5`)
      .then((response) => {
        dispatch({type: "FIND_ITEM", payload: response.data.data})
      })
      .catch((err) => {
        dispatch({type: "FIND_ITEM_LIST_ERROR", payload: err})
      })
    }
  }
  
  export function getCurrentItems(id) {
    return {
      type: 'GET_CURRENT_ITEM',
      payload: id,
    }
  }


  export default {
    fillList,
    findItem,
    getCurrentItems,
  };