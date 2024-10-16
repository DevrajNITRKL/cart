/* eslint-disable no-unused-vars */
import React from'react';
import CartItem from "./CartItem";
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from "firebase/compat/app"; 
class App extends React.Component {
  
  constructor () {
    super();
    this.state = {
        products:[
          // {
          //     price:39999,
          //     title:'Watch',
          //     qty:2,
          //     img:'https://idestiny.in/wp-content/uploads/2022/09/Apple_Watch_SE_LTE_40mm_Starlight_Aluminum_Starlight_Sport_Band_PDP_Images_Position-1__en-IN.jpg',
          //     id:1
              
          // },
          // {
          //     price:99999,
          //     title:'Mobile Phone',
          //     qty:1,
          //     img:'https://www.reliancedigital.in/medias/Apple-iPhone16ProMax-494423059-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyOTM2MXxpbWFnZS9qcGVnfGltYWdlcy9oM2EvaGEzLzEwMTk1OTA4OTg0ODYyLmpwZ3w2MjMyOGJjMTFhMDRjZjFiNWRkOGU4NjNjZWJiMDUwNWNkNmE0YzdhMjE3MjVjNDRjNWFlMjA0ZDU2MDFjODhk',
          //     id:2
              
          // },
          // {
          //     price:89999,
          //     title:'Laptop',
          //     qty:1,
          //     img:'https://www.apple.com/newsroom/images/product/mac/standard/Apple_16-inch-MacBook-Pro_111319_big.jpg.large.jpg',
          //     id:3
              
          // }    

        ],
        loading:true
    }
    // this.increaseQuantity = this.increaseQuantity(this);;
    // this.testing();
}

componentDidMount(){
  firebase
    .firestore()
    .collection('products')
    .get()
    .then((snapshot)=>{
      console.log(snapshot);

      snapshot.docs.map((doc)=>{
        console.log(doc.data())
      });

      const products = snapshot.docs.map((doc)=>{
        const data = doc.data();
        data['id']=doc.id;
        return data;
      })

      this.setState({
        products,
        loading:false
      })

    })
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

getCartCount = () =>{
  const {products} = this.state;
  let count = 0;

  products.forEach((product) => {
    count += product.qty;
  })
  return count;
}

getCartTotal = () =>{
  const {products} = this.state;
  let cartTotal = 0;

  products.map((product)=>{
    cartTotal += product.qty*product.price;
  })
  return cartTotal;
}



  render(){

    const {products,loading} = this.state;
    return (
      <div className="App">
      <Navbar count = {this.getCartCount()}/>
      <Cart
        products = {products}
        onIncreaseQunatity={this.handleIncreaseQuantity}
        onDecreaseQunatity={this.handleDecreaseQuantity}
        onDeleteQunatity={this.handleDeleteProduct}

      />
      {loading && <h1>Loading Products .....</h1>}
      <div style={{fontSize:25,padding:15}}>TOTAL:{this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
