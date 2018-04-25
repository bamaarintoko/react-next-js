import React, { Component } from 'react';
// import { connect } from 'react-redux';
import Header from "../Components/Header";
import { Navbar, NavItem,Col } from "react-materialize";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import P from 'react-particles-js'
import OurTeam from '../Pages/Spa/page-team';
import OurStory from '../Pages/Spa/page-story';
import About from '../Pages/Spa/page-about';
function mapStateToProps(state) {
    return {

    };
}

class Content extends Component {
    componentDidMount() {
        console.log("--->",this.props)
    }
    
    render() {
        return (
            <Col m={12} s={12} style={{ overflow: 'hidden' }}>
                <Element name="home">
                    <Navbar fixed={true} className='navbar-fixed' brand={<span style={{ marginLeft: 10 }} className="brand">MALAS<span style={{ color: '#2196F3' }}>KODING</span></span>} style={{ backgroundColor: '#212121' }} right>
                        <NavItem componentClass="menu_text">
                            <Link style={{ float: "left", width: '100%' }} activeClass="active" className="test1" to="home" spy={true} smooth={true} duration={500} >
                                <span className="menu_text">
                                    Home
                                </span>
                            </Link>
                        </NavItem>
                        <NavItem componentClass="span">
                            <Link style={{ width: '100%', float: "left" }} activeClass="active" className="test2" to="our_team" spy={true} smooth={true} duration={500} >
                                <span className="menu_text">
                                    Our Team
                                </span>
                            </Link>
                        </NavItem>
                        <NavItem componentClass="span">
                            <Link style={{ width: '100%', float: "left" }} activeClass="active" className="test2" to="our_story" spy={true} smooth={true} duration={500} >
                                <span className="menu_text" style={{ float: "left" }}>Our Story</span>
                            </Link>
                        </NavItem>
                        <NavItem componentClass="span">
                            <Link style={{ width: '100%', float: "left" }} activeClass="active" className="test2" to="about" spy={true} smooth={true} duration={500} >
                                <span className="menu_text" style={{ float: "left" }}>About</span>
                            </Link>
                        </NavItem>
                    </Navbar>
                    <div className='wrapper_' style={{ backgroundColor: '#212121' }}>
                        {/* <P
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
                            }} /> */}
                        <span style={{ marginLeft: 10, color:'#FFFFFF'}} className="brand">
                            MALAS<span style={{ color: '#2196F3' }}>KODING</span>
                            </span>
                    </div>
                </Element>
                <Element name="our_team" className="element" >
                    <OurTeam/>
                </Element>
                <Element name="our_story">
                    <OurStory/>
                </Element>
                <Element name="about">
                    <About/>
                </Element>
            </Col>
        );
    }
}
export default Content

// export default connect(
//     mapStateToProps,
// )(Content);