import React, { Component } from 'react';
import { act_buy_item } from '../actions';
import { connect } from 'react-redux';
class Product extends Component {
  constructor(props){
    super(props);
    this.state = {
      quantity: 1
    }
  }
  handleBy = (product) =>{
    //Mua hàng ->Phát sinh sự kiện ->Chuyển tới reducer để cập nhật state
    this.props.buyItem(product, this.state.quantity);

  }
    render() {
      let {renderProduct} = this.props
      let elementBy =<span className='price'>{renderProduct.price} USD</span>
      if(renderProduct.quantity>0){
        elementBy = (<>
         <input
                  name="quantity"
                  type="number"
                  value={this.state.quantity}
                  min={1}
                  onChange={(event)=>{this.setState({quantity:event.target.value})}}
                />
                <button data-product={1} className="btn btn-success" onClick={()=>this.handleBy(renderProduct)}>
                  Mua hàng
                </button>
                <a data-product={1} href="#" className="price" onClick={()=>this.handleBy(renderProduct)}>
                  {renderProduct.price} USD
                </a>
        
         </>)
      }
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
               {elementBy}
              </div>
            </div>
            {/* PRODUCT : END */}   
            </>
        );
    }
}
// thực hiện phát sinh sự kiện đến store
const mapDispatchToProps = (dispatch) => {
  return {
    buyItem: (product, quantity) => {
      dispatch(act_buy_item(product, quantity));
    }
  }
}

export default connect(null, mapDispatchToProps)(Product);