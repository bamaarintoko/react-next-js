import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navbar, NavItem, Icon } from 'react-materialize'
import Head from 'next/head';
// function mapStateToProps(state) {
//     return {

//     };
// }

class about extends Component {
    render() {
        return (
            <div>
                <Head>
                    {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css" /> */}
                    <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css" />
                </Head>
                <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/js/materialize.min.js"></script>
                <Navbar brand='logo' right>
                    <NavItem href='get-started.html'>-</NavItem>
                    <NavItem href='get-started.html'>-</NavItem>
                    <NavItem href='get-started.html'>-</NavItem>
                    <NavItem href='get-started.html'><Icon>more_vert</Icon></NavItem>
                </Navbar>
            </div>
        );
    }
}

export default about
// export default connect(
//     mapStateToProps,
// )(about);