import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ADDITEM } from '../store/actions';

const Products = ({products}) => {
    const dispatch=useDispatch();
    return (
            products&& products.map((data)=>{
                return(
                    <div className='card' key={data.id}>
            <div className='image-container'><img src={data.image} alt={data.image} /></div>
            
            <div className='content'>
                 <h3>{data.title.split(" ")[0]}</h3> 
            <h4 className='description'>{data.title}</h4> 
            <h4>Cost: ${data.price}</h4> 
            <Link to='/cart' ><button className='button' onClick={()=>dispatch(ADDITEM(data))}>Add to cart</button></Link>
            </div>
            </div>
                )
            })
        
    );
};

export default Products;