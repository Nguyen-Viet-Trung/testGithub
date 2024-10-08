import React, { Component } from 'react';
import Product from './Product';
import { connect } from 'react-redux';

class ProductList extends Component {
    render() {
      let { products } = this.props;
      let elementProduct = Array.isArray(products) ? products.map((item, index) => {
        return <Product key={index} renderProduct={item} />;
      }) : null;
        return (
  
            <>
                {/* LIST PRODUCT : START */}
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h1 className="panel-title">List Products</h1>
          </div>
          <div className="panel-body" id="list-product">
            {elementProduct}
          </div>
        </div>
      </div>
      {/* LIST PRODUCT : END */}
            </>
        );
    }
}
const mapStateToProps = (state) => {
  return{
    products:state.listProduct,
  }
}

export default connect(mapStateToProps,null)(ProductList);