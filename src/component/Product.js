import React, { Component } from 'react';

class Product extends Component {
    render() {
        return (
            <>
             {/* PRODUCT : START */}
            <div className="media product">
              <div className="media-left">
                <a href="#">
                  <img
                    className="media-object"
                    src="images/aplusautomation.jpg"
                    alt="charmander"
                  />
                </a>
              </div>
              <div className="media-body">
                <h4 className="media-heading">aplusautomation</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                  dicta asperiores veniam repellat unde debitis quisquam magnam
                  magni ut deleniti!
                </p>
                <input
                  name="quantity-product-1"
                  type="number"
                  defaultValue={1}
                  min={1}
                />
                <button data-product={1} className="btn btn-success">
                  Mua hàng
                </button>
                <a data-product={1} href="#" className="price">
                  {" "}
                  12 USD{" "}
                </a>
              </div>
            </div>
            {/* PRODUCT : END */}
            {/* PRODUCT : START */}
            <div className="media product">
              <div className="media-left">
                <a href="#">
                  <img
                    className="media-object"
                    src="images/aplus-media.jpg"
                    alt="charmander"
                  />
                </a>
              </div>
              <div className="media-body">
                <h4 className="media-heading">aplus media</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                  dicta asperiores veniam repellat unde debitis quisquam magnam
                  magni ut deleniti!
                </p>
                <span className="price"> 12 USD</span>
              </div>
            </div>
            {/* PRODUCT : END */}
            {/* PRODUCT : START */}
            <div className="media product">
              <div className="media-left">
                <a href="#">
                  <img
                    className="media-object"
                    src="images/robo_fig_combo.jpg"
                    alt="charmander"
                  />
                </a>
              </div>
              <div className="media-body">
                <h4 className="media-heading">robo fig combo</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                  dicta asperiores veniam repellat unde debitis quisquam magnam
                  magni ut deleniti!
                </p>
                <input
                  name="quantity-product-1"
                  type="number"
                  defaultValue={1}
                  min={1}
                />
                <button data-product={1} className="btn btn-success">
                  Mua hàng
                </button>
                <a data-product={1} href="#" className="price">
                  {" "}
                  12 USD{" "}
                </a>
              </div>
            </div>
            {/* PRODUCT : END */}
            {/* PRODUCT : START */}
            <div className="media product">
              <div className="media-left">
                <a href="#">
                  <img
                    className="media-object"
                    src="images/target-leap-frog.jpg"
                    alt="target-leap-frog"
                  />
                </a>
              </div>
              <div className="media-body">
                <h4 className="media-heading">target leap frog</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                  dicta asperiores veniam repellat unde debitis quisquam magnam
                  magni ut deleniti!
                </p>
                <input
                  name="quantity-product-1"
                  type="number"
                  defaultValue={1}
                  min={1}
                />
                <button data-product={1} className="btn btn-success">
                  Mua hàng
                </button>
                <a data-product={1} href="#" className="price">
                  {" "}
                  12 USD{" "}
                </a>
              </div>
            </div>
            {/* PRODUCT : END */}   
            </>
        );
    }
}

export default Product;