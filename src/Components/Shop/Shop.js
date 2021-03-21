import React, { useState } from 'react';
import fakeData from '../../fakeData/index'
import Product from '../Product/Product';
import './Shop.css'


const Shop = () => {
    const [products, setProducts] = useState(fakeData.slice(0, 10)); 

   const  handleAddProduct = (props)=>{
        console.log('Product adeed', props );
    }
    return (
        
        <div className="shop-container">
        
            <div className="product-container">
           {
                products.map(pd => 
                    
                <Product product = {pd} 
                handleAddProduct = {handleAddProduct}>
                </Product>
                )
                }
            </div>
            <div className="cart-container"><h1>this is cart</h1></div>
            
        </div>
    );
};

export default Shop;