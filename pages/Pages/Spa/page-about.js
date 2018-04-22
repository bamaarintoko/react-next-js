import React, { Component } from 'react';
import { compose, withProps } from "recompose";
import { Col, Card, Row, CardTitle } from 'react-materialize'
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
} from "react-google-maps";
const MyMapComponent = compose(
    withProps({
        googleMapURL:
            "https://maps.googleapis.com/maps/api/js?key=AIzaSyDraAZy-WXDo1Nf_q-rxHgoS4KHdfM1mDE&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `50vh` }} />,
        mapElement: <div style={{ height: `100%` }} />
    }),
    withScriptjs,
    withGoogleMap
)(props => (
    <GoogleMap defaultZoom={15} defaultCenter={{ lat: -7.782900, lng: 110.367065 }}>
        {props.isMarkerShown && (
            <Marker position={{ lat: -7.782900, lng: 110.367065 }} />
        )}
    </GoogleMap>
));
class About extends Component {
    render() {
        return (
            <div style={{
                width: "100%",
                height: "100vh",
                position: 'static',
                backgroundColor: '#FFFFFF'
            }}>
                <div className="parent">

                    <MyMapComponent isMarkerShown />
                </div>
                <div className="parent">
                    <Row className='child' style={{ textAlign: 'center' }}>
                        <p className='text_' style={{ fontSize: 20 }}>info@malaskoding.com</p>
                        <p className='text_' style={{ fontSize: 20 }}>Technologies In Use</p>
                        <Col m={3} s={12}>
                        </Col>
                        
                        <Col m={6} s={12}>
                            <img width={100} src={"/static/Logo/logo_react.png"}/>{' '}
                            <img width={100} src={"/static/Logo/logo_redux.png"}/>{' '}
                            <img width={100} src={"/static/Logo/logo_lumen.png"}/>{' '}
                            <img width={100} src={"/static/Logo/logo_js.png"}/>{' '}
                            <img width={100} src={"/static/Logo/logo_node.png"}/>{' '}
                        </Col>
                        <Col m={3} s={12}>
                        </Col>
                    </Row>

                </div>
            </div>
        );
    }
}

export default About