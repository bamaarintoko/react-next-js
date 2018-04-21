import React, { Component } from 'react';
// import { connect } from 'react-redux';
import Header from "../Components/Header"
function mapStateToProps(state) {
    return {

    };
}

class Content extends Component {
    render() {
        return (
            <div>
                <Header/>
            </div>
        );
    }
}
export default Content

// export default connect(
//     mapStateToProps,
// )(Content);