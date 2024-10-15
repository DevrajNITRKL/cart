import React from 'react';

const Navbar = (props)=> {
    

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


    // increaseQuantity = () => {
        // this.state.qty += 1;
        // console.log('this',this.state);
        // setState form 1
        // this.setState({
        //     qty: this.state.qty + 1
        // },()=>{console.log('this.state',this.state);});
        

        // setState form 2 used when previous state is needed
    //     this.setState((prevState)=>{
    //         return{
    //             qty:prevState.qty + 1
    //         }
    //     },()=>{console.log('this.state',this.state);});
    // }
    // decreaseQuantity = () =>{
    //     const {qty} = this.state;
    //     if(qty === 0) { return;}
    //     this.setState((prevState)=>{
    //         return{
    //             qty:prevState.qty - 1
    //         }
    //     });
    // }
    // deleteQuantity (){
    //     console.log('delete');
    // }
    // render () {
        // console.log('this.props',this.props);
        // const {price,title,qty} = this.props.product;
        // const {product,onIncreaseQunatity,onDecreaseQunatity,onDeleteQunatity}=this.props;

    return (
        <div style={styles.nav}>
            <div style={styles.cartIconContainer}>
                <img style={styles.cartIcon} src="https://img.icons8.com/?size=100&id=9671&format=png&color=000000" alt="cart" />
                <span style={styles.cartCount}>{props.count}</span>
            </div>
        </div>
    );
// }
}

const styles = {
    cartIcon: {
        height: 38,
        marginRight: 5
    },
    nav:{
        height: 70,
        background: '#4267b2',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    cartIconContainer:{
        postition:'relative'    
    },
    cartCount:{
        background: 'yellow',
        borderRadius: '50%',
        padding: '4px 8px',
        postition: 'absolute',
        right: 0,
        top: -9

    }
};

export default Navbar;