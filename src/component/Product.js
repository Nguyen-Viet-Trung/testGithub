import React, { Component } from 'react';

class Product extends Component {
  constructor(props){
    super(props);
    this.state = {
      quantity: 1
    }
  }
    render() {
      let {renderProduct} = this.props
        return (
            <>
             {/* PRODUCT : START */}
            <div className="media product">
              <div className="media-left">
                <a href="#">
                  <img
                    className="media-object"
                    src={`images/${renderProduct.image}`}
                    alt="charmander"
                  />
                </a>
              </div>
              <div className="media-body">
                <h4 className="media-heading">{renderProduct.productName}</h4>
                <p>
                  {renderProduct.descriptions}
                </p>
                <input
                  name="quantity"
                  type="number"
                  value={this.state.quantity}
                  min={1}
                  onChange={(event)=>{this.setState({quantity:event.target.value})}}
                />
                <button data-product={1} className="btn btn-success">
                  Mua hàng
                </button>
                <a data-product={1} href="#" className="price">
                  {" "}
                  {renderProduct.price} USD{" "}
                </a>
              </div>
            </div>
            {/* PRODUCT : END */}   
            </>
        );
    }
}

export default Product;