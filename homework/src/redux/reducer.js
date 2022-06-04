import {ADD_PRODUCT} from './actions';
let initialState = [];

const productReducer = (state=initialState,action) => {
    let newProduct;
    switch (action.type) {
        case ADD_PRODUCT:
            newProduct = [...state];
            newProduct.push(action.payload);
            return newProduct;
        default:
            return state;
    }
}

export default productReducer;