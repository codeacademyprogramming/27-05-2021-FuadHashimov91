export const ADD_PRODUCT = "ADD_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";

export const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product
    }
}
const deleteProduct = (id) => {
    return {
        type: DELETE_PRODUCT,
        payload: id
    }
}
const updateProduct = (product) => {
    return {
        type: UPDATE_PRODUCT,
        payload: product
    }
}