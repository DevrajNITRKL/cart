import React from 'react';

class CartItem extends React.Component {
    constructor () {
        super();
        this.state = {
            price: 998,
            title: 'Mobile Phone',
            qty: 2,
            img : ''

        }
        // this.increaseQuantity = this.increaseQuantity(this);;
        // this.testing();
    }

    // testing (){
    //     const promise = new Promise((resolve, reject) => {
    //         setTimeout(()=> {
    //             resolve('done');
    //         }, 5000);
    //     })
        
    //     promise.then(()=>{
    //         //setState acts as synchronous call

    //         this.setState({qty:this.state.qty+10});
    //         this.setState({qty:this.state.qty+10});
    //         this.setState({qty:this.state.qty+10});
    //         console.log('state',this.state);
    //     });
    // }


    increaseQuantity = () => {
        // this.state.qty += 1;
        // console.log('this',this.state);
        // setState form 1
        // this.setState({
        //     qty: this.state.qty + 1
        // },()=>{console.log('this.state',this.state);});
        

        // setState form 2 used when previous state is needed
        this.setState((prevState)=>{
            return{
                qty:prevState.qty + 1
            }
        },()=>{console.log('this.state',this.state);});
    }
    decreaseQuantity = () =>{
        const {qty} = this.state;
        if(qty === 0) { return;}
        this.setState((prevState)=>{
            return{
                qty:prevState.qty - 1
            }
        });
    }
    deleteQuantity (){
        console.log('delete');
    }
    render () {
        console.log('render');
        const {price,title,qty} = this.state;
        

        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.images}/>
                </div>
                <div className="right-block">
                    <div>{title}</div>
                    <div>{price}</div>
                    <div>{qty}</div>
                    <div className="cart-item-actions">
                        {/* {Buttons} */}
                        <img className="action-icons" src="https://img.icons8.com/?size=100&id=1501&format=png&color=000000" alt="increase" onClick={this.increaseQuantity}/>
                        <img className="action-icons" src="https://img.icons8.com/?size=100&id=14088&format=png&color=000000" alt="decrease" onClick={this.decreaseQuantity}/>
                        <img className="action-icons" src="https://img.icons8.com/?size=100&id=KPhFC2OwpbWV&format=png&color=000000" alt="delete" onClick={this.deleteQuantity}/>
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    images: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: 'grey'
    }
}

export default CartItem;