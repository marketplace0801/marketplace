import axios from "axios";

const serveruri = 'https://marketplaceserve.herokuapp.com'
export const CreateStore = (formData) => async(dispatch) => {
    try {
        dispatch({ type: "createStoreRequest"})

        const {data} = await axios.post(`${serveruri}/createshop`, formData, {
            headers: { "Content-Type": `multipart/form-data` },}
        )
        dispatch({ type: "createStoreSuccess", payload: data})

    } catch (error) {
        dispatch({ type: "createStoreFailure", payload: error })
    }
}