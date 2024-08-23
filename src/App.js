import React, { Component } from 'react';
import Cart from './component/Cart';
import ProductList from './component/ProductList';
import Title from './component/Title';

class App extends Component {
  render() {
    return (
      <>
  <div className="container">
    <Title></Title>
    <div className="row">
      <ProductList></ProductList>
      <Cart></Cart>
    </div>
  </div>
  {/*
		This HTML file is a template.
		If you open it directly in the browser, you will see an empty page.

		You can add webfonts, meta tags, or analytics to this file.
		The build step will place the bundled scripts into the <body> tag.

		To begin the development, run `npm start` or `yarn start`.
		To create a production bundle, use `npm run build` or `yarn build`.
	*/}
  {/* jQuery (necessary for Bootstrap's JavaScript plugins) */}
  {/* Include all compiled plugins (below), or include individual files as needed */}
</>

    );
  }
}

export default App;