import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Cart = () => {
    const state=useSelector(state=>state.cart)
    const [items,setitems]=useState([])
    
    const calc=(data)=>{
        // let count=0;
        // state.map(prod=>prod.id==id?count+=1:null)
        // return count;
        if (data.quantity){
            return data.quantity;
        }
        else{
            return 1;
        }
    }
    function total(){
        let total=0;
        state.map(prod=>{
            if(prod.quantity){
                total+=prod.quantity*prod.price;
            }
            else{
                total+=prod.price
            }
        })
        return `(${state.length} items): $${total.toFixed(2)}`;
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
                                                <h4>Qty:{calc(prod)}</h4>
                                            </div>
                                        <h4>${prod.price}</h4>
                                    </div>
                                )
                                // }
                            })
                            
                        }
                    <Link to="/"> <span onClick={()=>setitems([])} className='back'>◄ Continue Shopping</span></Link>
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