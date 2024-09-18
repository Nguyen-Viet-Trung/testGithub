import React, { Component } from 'react';
class CartItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      quantity:0
    }
  }
  componentWillUnmount = () => {
    this.setState({
      quantity: this.props.renderCart.quantity,
    })
  }
  componentWillReceiveProps = (nextProps) => {
    this.setState({
      quantity: nextProps.renderCart.quantity,
    })
  }
    render() {
      let {renderCart, stt} = this.props;
        return (
            <>
             <tbody id="my-cart-body">
                {/* CART BODY */}
                <tr>
                  <th scope="row">{stt}</th>
                  <td>{renderCart.product.productName}.</td>
                  <td>{renderCart.product.price} USD</td>
                  <td>
                    <input
                      name="quantity"
                      type="number"
                      value={this.state.quantity}
                      min={1}
                      onChange={(event)=>{this.setState({quantity:event.target.value})}}
                    />
                  </td>
                  <td>
                    <strong>{renderCart.product.price * renderCart.quantity} USD</strong>
                  </td>
                  <td>
                    <a
                      className="label label-info update-cart-item"
                      href="#"
                      data-product=""
                    >
                      Update
                    </a>
                    <a
                      className="label label-danger delete-cart-item"
                      href="#"
                      data-product=""
                    >
                      Delete
                    </a>
                  </td>
                </tr>
              </tbody>   
            </>
        );
    }
}

export default CartItem;