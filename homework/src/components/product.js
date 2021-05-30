import { useEffect } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { addProduct } from '../redux/actions';



const Products = () => {
    const state = useSelector(state => state.reducer);
    console.log(state);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch("https://isko88.github.io/coffee.json")
            .then(response => {
                return response.json()
            })
            .then(data => {
                dispatch(
                    addProduct(data)   
                )
                
            })
    })



    return (
        <div>

        </div>
    )
}

export default Products;