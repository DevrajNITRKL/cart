/* eslint-disable no-unused-vars */
import React from'react';
import CartItem from "./CartItem";
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {
  
  constructor () {
    super();
    this.state = {
        products:[
            {
                price:999,
                title:'Watch',
                qty:2,
                img:'https://m.media-amazon.com/images/I/71VxRe7HeKL._AC_UY1000_.jpg',
                id:1
                
            },
            {
                price:9999,
                title:'Mobile Phone',
                qty:1,
                img:'https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/r/l/c/-original-imah3xk892aj9gck.jpeg?q=90&crop=false',
                id:2
                
            },
            {
                price:29999,
                title:'Laptop',
                qty:1,
                img:'https://rukminim2.flixcart.com/image/850/1000/l1nwnm80/computer/l/c/c/tuf-gaming-f15-gaming-laptop-asus-original-imagd6kg3m5vjgcz.jpeg?q=90&crop=false',
                id:3
                
            },
                

        ]
    }
    // this.increaseQuantity = this.increaseQuantity(this);;
    // this.testing();
}
handleIncreaseQuantity = (product) => {
    console.log('Heyy please increase the quantity of',product);
    const {products}=this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
        products: products // or you can use short hand products ask key and value pair are same
    })
}
handleDecreaseQuantity = (product) => {
    console.log('Heyy please decrease the quantity of',product);
    const {products}=this.state;
    const index = products.indexOf(product);

    if(products[index].qty === 0){return;}
    products[index].qty -= 1;

    this.setState({
        products: products // or you can use short hand products ask key and value pair are same
    })
}

handleDeleteProduct = (id) => {
    const {products} = this.state;
    const items = products.filter((item) => item.id !== id); // [{   }]

    this.setState({
        products:items
    })
}

getCartCount = () => {
  const {products} = this.state;

  let count = 0;

  products.forEach((product)=>{
    count += product.qty;
  })

  return count;
}

getCartTotal = () =>{
  const {products} = this.state;

  let cartTotal=0;

  products.map((product)=>{
    cartTotal += product.qty *product.price;
  })
  return cartTotal;
}
  
  render(){

    const {products} = this.state;
      
    return (
    <div className="App">
    <Navbar count={this.getCartCount()}/>
    <Cart
      products = {products}
      onIncreaseQunatity={this.handleIncreaseQuantity}
      onDecreaseQunatity={this.handleDecreaseQuantity}
      onDeleteQunatity={this.handleDeleteProduct}
    />

    <div style={{fontSize:20}}>
      TOTAL: {this.getCartTotal()}
    </div>
    </div>
    );
  }  
}

export default App;
