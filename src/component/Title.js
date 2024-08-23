import React, { Component } from 'react';

class Title extends Component {
    render() {
        return (
            <>
             {/* TITLE : START */}
    <div className="page-header d-flex justify-content-between">
      <h1>
        Project 02 - Shopping Cart <small>ReactJS</small>
      </h1>
      <img src='https://devmaster.edu.vn/images/logo.png'></img>
    </div>
    {/* TITLE : END */}   
            </>
        );
    }
}

export default Title;