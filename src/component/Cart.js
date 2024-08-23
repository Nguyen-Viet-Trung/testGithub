import React, { Component } from 'react';
import CartItem from './CartItem';
import CartInfo from './CartInfo';
import Notify from './Notify';

class Cart extends Component {
    render() {
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
              <CartItem></CartItem>
              <CartInfo></CartInfo>
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

export default Cart;