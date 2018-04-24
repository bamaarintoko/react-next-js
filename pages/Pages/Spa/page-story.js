import React, { Component } from 'react';
import { Col, Card, Row, CardTitle } from 'react-materialize'
class OurStory extends Component {
    render() {
        return (
            <div style={{
                width: "100%",
                height: "100%",
                position: 'static',
                backgroundColor: '#FFFFFF'
            }}>
                <Col className='story_top' m={12} s={12}>
                    <Row className='child_' style={{ paddingTop: 100 }}>

                        <Col m={4} s={12}>
                            <Card style={{ borderRadius: 10, borderWidth: 1, borderColor: '#9E9E9E', height:200 }} className='_card' textClassName='black-text' title='Web Development'>
                            <span className='text_'>We develop responsive web using ReactJs. ReactJs is component based. Components: The future of web development.</span>
                        </Card>
                        </Col>
                        <Col m={4} s={12}>
                            <Card style={{ borderRadius: 10, borderWidth: 1, borderColor: '#9E9E9E', height:200 }} className='_card' textClassName='black-text' title='Design'>
                                <span className='text_'>we designing anything you want, we open minds, we make your app design to the next level.</span>
                        </Card>
                        </Col>
                        <Col m={4} s={12}>
                            <Card style={{ borderRadius: 10, borderWidth: 1, borderColor: '#9E9E9E', height:200 }} className='_card' textClassName='black-text' title='Mobile App'>
                                <span className='text_'>We create app using React Native framework. With React Native, you get both, android and iOS.</span>
                        </Card>
                        </Col>
                    </Row>
                </Col>
                <Col className='story_below' m={12} s={12}>
                    <Row className='child' style={{ textAlign: 'center' }}>
                        <h2 className='text'>OUR SUPPORT TEAM IS HERE FOR YOU</h2>
                        <p className='text_'>PASSION LEADS TO DESIGN, DESIGN LEADS TO PERFORMANCE, PERFORMANCE LEADS TO SUCCESS!</p>
                    </Row>
                </Col>

            </div>
        );
    }
}

export default OurStory;