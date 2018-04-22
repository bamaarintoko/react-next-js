import React, { Component } from 'react';
// import { connect } from 'react-redux';
import Header from "../Components/Header"
import P from 'react-particles-js'
function mapStateToProps(state) {
    return {

    };
}

class Content extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className='wrapper_' style={{ backgroundColor: '#212121' }}>
                    <P
                        params={{
                            particles: {
                                number: {
                                    value: 100
                                },
                                line_linked: {
                                    shadow: {
                                        enable: false,
                                        color: "#E65100",
                                        blur: 5
                                    }
                                },
                                color: {
                                    value: '#FF6D00'
                                },
                                size: {
                                    value: 4,
                                    anim: {
                                        enable: true
                                    }

                                },
                                shape: {
                                    type: 'triangle'
                                }
                            }
                        }}
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%"
                        }} />
                </div>

            </div>
        );
    }
}
export default Content

// export default connect(
//     mapStateToProps,
// )(Content);