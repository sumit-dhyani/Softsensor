import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { INCREASEQTY, REMOVE } from '../store/actions';
import Navbar from './Navbar';

const Cart = () => {
    const state=useSelector(state=>state.cart)
    const dispatch=useDispatch()
    const arr=[1,2,3,4,5,6,7,8,9,10]
    const calc=(data)=>{
        
        if (data.quantity){
            return data.quantity;
        }
        else{
            return 1;
        }
    }
    function total(){
        let total=0;
        let count=0
        state.map(prod=>{
            if(prod.quantity){
                total+=prod.quantity*prod.price;
                count+=prod.quantity
            }
            else{
                total+=prod.price
                count+=1
            }
        })
        return `(${count} items): $${total.toFixed(2)}`;
    }
    useMemo(()=>{
        return total
    },[state])
    return (<>
        <Navbar />
        
        <div className='cart'>
           <div className='items'>
                <div className='shoppingcart-box'>
                    <div className='title bd'>
                        <h2>Shopping Cart</h2>
                        <h5>Price</h5>
                    </div>
                    
                        {   state&&
                            state.map(prod=>{
                                return(
                                    <div key={prod.id} className='items-incart bd'>
                                        <img src={prod.image} alt={prod.image}></img>
                                            <div className='desc'>
                                                <h3>{prod.description}</h3>
                                                <div>
                                                    <h4 className=''>Qty:</h4>
                                                    <select onChange={(e)=>dispatch(INCREASEQTY(prod,e.target.value))} value={calc(prod)}>
                                                        {arr.map(count=>{
                                                            return(
                                                                <option key={count}>{count}</option>
                                                            )
                                                        })}
                                                    </select>
                                                <div className='br'></div>
                                                <a onClick={()=>dispatch(REMOVE(prod))}>Delete</a>
                                                </div>
                                            </div>
                                        <h4>${prod.price}</h4>
                                    </div>
                                )
                                // }
                            })
                            
                        }
                    <Link to="/"> <span  className='back'>◄ Continue Shopping</span></Link>
                </div>
                
            </div> 
            <div className='checkout'>
                    <h2>Subtotal {total()}</h2>
                    <button className='button'>Proceed to buy</button>
            </div>
        </div>
        </>
    );
};

export default Cart;