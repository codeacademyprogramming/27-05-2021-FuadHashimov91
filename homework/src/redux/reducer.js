import {ADD_PRODUCT} from './actions';


const productReducer = (state=[],action) => {
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