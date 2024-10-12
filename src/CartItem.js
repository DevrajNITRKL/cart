import React from 'react';

class CartItem extends React.Component {
    constructor () {
        super();
        this.state = {
            price: 998,
            title: 'Mobile Phone',
            qty: '2',
            img : ''

        }
        // this.increaseQuantity = this.increaseQuantity(this);;
    }

    increaseQuantity = () => {
        console.log('increase',this.state);
    }
    decreaseQuantity (){
        console.log('decrease');
    }
    deleteQuantity (){
        console.log('delete');
    }
    render () {
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