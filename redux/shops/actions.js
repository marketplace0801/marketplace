import axios from "axios";

const serveruri = 'http://marketplaceserve.herokuapp.com'
export const getallShops = () => async(dispatch) => {
    try {
        dispatch({ type: "allshopsRequest"})

        const {data} = await axios.get(`${serveruri}/getallshops`)

        dispatch({ type: "allshopsSuccess", payload: data})
    } catch (error) {
        dispatch({ type: "allshopsFailure", payload: error })
    }
}