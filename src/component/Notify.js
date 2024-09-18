import React, { Component } from 'react';
import { connect } from 'react-redux';

class Notify extends Component {
    render() {
        let {notify} = this.props;
        return (
            <>
              <b>{notify}</b>   
            </>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        notify: state.notify
    }
}
export default connect(mapStateToProps,null)(Notify);