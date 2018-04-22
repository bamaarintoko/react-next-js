import React, { Component } from 'react';
// import { connect } from 'react-redux';
import {Navbar, NavItem,Icon} from "react-materialize";
// import stylesheet from '../styles/b.css'
function mapStateToProps(state) {
    return {

    };
}

class Header extends Component {
    render() {
        return (
            <Navbar brand={<span style={{marginLeft:10}} className="brand">MALAS<span style={{color:'#2196F3'}}>KODING</span></span>} style={{backgroundColor:'#212121'}} right>

                <NavItem href='#'>
                    <span className="menu_text" style={{float:"left"}}>Home</span>
                </NavItem>
                {/* <NavItem href='#' style={{position:'absolute',left:0}}>
                    <img width={64} src={logo}/>
                </NavItem> */}
                <NavItem href='#'><span className="menu_text" style={{float:"left"}}>Our Team</span></NavItem>
                <NavItem href='#'><span className="menu_text" style={{float:"left"}}>Our Story</span></NavItem>
                <NavItem href='#'><span className="menu_text" style={{float:"left"}}>About</span></NavItem>
            </Navbar>
        );
    }
}
export default Header;
// export default connect(
//     mapStateToProps,
// )(Header);