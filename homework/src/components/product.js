import { useEffect } from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import { addProduct } from '../redux/actions';



const Products = ()=>{
    const state = useSelector(state=>state);
    const dispatch = useDispatch();
  
    useEffect(()=>{
        fetch("https://isko88.github.io/coffee.json")
        .then(response => {
            return response.json()
        })
        .then(data=>{
            dispatch(addProduct(data))
        },[state])
    })



    return(
        <div>
            Product Page
        </div>
    )
}

export default Products;