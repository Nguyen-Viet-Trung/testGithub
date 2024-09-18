import React, { Component } from 'react';
import CartItem from './CartItem';
import CartInfo from './CartInfo';
import Notify from './Notify';
import { connect } from 'react-redux';

class Cart extends Component {
    render() {
      let {carts} = this.props;
      let elementCartItem = carts.map((item,index) => {
        return <CartItem key={index} renderCart = {item} stt = {index+1}></CartItem>
      })
      let p_count = carts.length;
      let tongTien = 0;
      for(let i = 0; i < carts.length; i++){
        tongTien += carts[i].product.price * carts[i].quantity;
      }
        return (
            <>
                {/* CART : START */}
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <div className="panel panel-danger">
          <div className="panel-heading">
            <h1 className="panel-title">Your Cart</h1>
          </div>
          <div className="panel-body">
            <table className="table">
              <thead>
                <tr>
                  <th width="4%">#</th>
                  <th>Pokemon</th>
                  <th width="15%">Price</th>
                  <th width="4%">Quantity</th>
                  <th width="20%">Subtotal</th>
                  <th width="25%">Action</th>
                </tr>
              </thead>
              {elementCartItem}
              <CartInfo renderCount = {p_count} renderTotal = {tongTien}></CartInfo>
            </table>
          </div>
        </div>
        <div className="alert alert-success" role="alert" id="mnotification">
          <Notify></Notify>
        </div>
      </div>
      {/* CART : END */}
            </>
        );
    }
}
//kết nối dữ liệu state của cart từ store(reducer) tới component 
const mapStateToProps = (state) =>{
  return{
    carts: state.cart
}
}
export default connect(mapStateToProps,null)(Cart);