/* eslint-disable no-unused-vars */
import React from 'react';
import CartItem from './CartItem';

const Cart = (props) => {
    // constructor () {
    //     super();
    //     this.state = {
    //         products:[
    //             {
    //                 price:999,
    //                 title:'Watch',
    //                 qty:2,
    //                 img:'',
    //                 id:1
                    
    //             },
    //             {
    //                 price:9999,
    //                 title:'Mobile Phone',
    //                 qty:1,
    //                 img:'',
    //                 id:2
                    
    //             },
    //             {
    //                 price:29999,
    //                 title:'Laptop',
    //                 qty:1,
    //                 img:'',
    //                 id:3
                    
    //             }    

    //         ]
    //     }
    //     // this.increaseQuantity = this.increaseQuantity(this);;
    //     // this.testing();
    // }
    // handleIncreaseQuantity = (product) => {
    //     console.log('Heyy please increase the quantity of',product);
    //     const {products}=this.state;
    //     const index = products.indexOf(product);

    //     products[index].qty += 1;

    //     this.setState({
    //         products: products // or you can use short hand products ask key and value pair are same
    //     })
    // }
    // handleDecreaseQuantity = (product) => {
    //     console.log('Heyy please decrease the quantity of',product);
    //     const {products}=this.state;
    //     const index = products.indexOf(product);

    //     if(products[index].qty === 0){return;}
    //     products[index].qty -= 1;

    //     this.setState({
    //         products: products // or you can use short hand products ask key and value pair are same
    //     })
    // }

    // handleDeleteProduct = (id) => {
    //     const {products} = this.state;
    //     const items = products.filter((item) => item.id !== id); // [{   }]

    //     this.setState({
    //         products:items
    //     })
    // }
    
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
}

export default Cart;