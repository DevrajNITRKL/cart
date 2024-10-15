/* eslint-disable no-unused-vars */
import React from 'react';
import CartItem from './CartItem';

const Cart = (props) => {
    
// render(){
    const {products} = props;
    return (
        <div className='cart'>
            
            {products.map((product)=>{
                return (<CartItem
                    product={product}
                    key={product.id}
                    onIncreaseQunatity={props.onIncreaseQunatity}
                    onDecreaseQunatity={props.onDecreaseQunatity}
                    onDeleteQunatity={props.onDeleteQunatity}
                    />
                    
                )
            })}
        </div>
    );
// }
}

export default Cart;