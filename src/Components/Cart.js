import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Cart = () => {
    const state=useSelector(state=>state.cart)
    const [items,setitems]=useState([])
    // useEffect(()=>{
    //     return function(){
    //         setitems([])
    //     }
    // },[])
    const calc=(id)=>{
        let count=0;
        state.map(prod=>prod.id==id?count+=1:null)
        return count;
    }
    function total(){
        let total=0;
        state.map(prod=>total+=prod.price)
        return total;
    }
    useMemo(()=>{
        return total
    },[state])
    return (<>
        <Navbar />
        
        <div className='cart'>
           <div className='items'>
                <div className='shoppingcart-box'>
                    <div className='title'>
                        <h2>Shopping Cart</h2>
                        <h5>Price</h5>
                    </div>
                    
                        {
                            state.map(prod=>{
                                // if (prod.id in items){
                                //     console.log("already in cart")
                                //     return <></>
                                // }
                                // else{
                                // setitems(prev=>[...prev,prod.id])
                                return(
                                    <div key={prod.id} className='items-incart'>
                                        <img src={prod.image} alt={prod.image}></img>
                                            <div className='desc'>
                                                <h3>{prod.description}</h3>
                                                <h4>Qty:{calc(prod.id)}</h4>
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
            <h2>Subtotal: $ {total()}</h2>
                    <button>Proceed to buy</button>
            </div>
        </div>
        </>
    );
};

export default Cart;