import React, { Component } from 'react';
import { compose, withProps } from "recompose";
import { Col, Card, Row, CardTitle,Footer } from 'react-materialize'
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
                height: "100%",
                position: 'static',
                backgroundColor: '#FFFFFF'
            }}>
                <div className="parent">

                    <MyMapComponent isMarkerShown />
                </div>
                <div className="about_below">
                    <Row className='child_' style={{ textAlign: 'center' }}>
                        <p className='text_' style={{ fontSize: 20 }}>Technologies In Use</p>


                        <Col m={12} s={12}>
                            <img width={100} src={"/static/Logo/logo_react.png"} />{' '}
                            <img width={100} src={"/static/Logo/logo_redux.png"} />{' '}
                            <img width={100} src={"/static/Logo/logo_lumen.png"} />{' '}
                            <img width={100} src={"/static/Logo/logo_js.png"} />{' '}
                            <img width={100} src={"/static/Logo/logo_node.png"} />{' '}
                            <img width={100} src={"/static/Logo/logo_next.png"} />{' '}
                        </Col>
                        <p className='text_' style={{ fontSize: 20, marginTop: 250 }}>
                            want to see our product? contact us at <b>info@malaskoding.com</b></p>
                            
                    </Row>
                    <div style={{position: 'fixed', backgroundColor:'#EEEEEE',
    bottom: 0, width:'100%', textAlign:'center'}}>
&copy; 2018 malaskoding.com - This website build from Next.JS and NodeJS for server.
                    </div>

                </div>
                
            </div>
        );
    }
}

export default About