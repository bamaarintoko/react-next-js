import React, { Component } from 'react';
import { Col, Card, Row,CardTitle } from 'react-materialize'
import myImg from '../../Assets/Team/team_one.png'
class OurTeam extends Component {
    render() {
        // console.log("--->",myImg)
        return (
            <div style={{
                width: "100%",
                height: "100%",
                position: 'static',
                backgroundColor: '#FFFFFF'
            }}>
                <div className='parent' style={{backgroundColor: '#ffffff'
                }}>
                    <Row className='child' style={{paddingTop:100}}>
                        <Col m={3} s={12}>
                            
                        </Col>
                        <Col m={3} s={12}>
                            {/* <Card style={{backgroundColor:'#FFFFFF'}} className='white' 
                                textClassName='white-text' 
                                header={<CardTitle image={require("../../Assets/Team/team_one.png")}></CardTitle>}
                                >
                                
                            </Card> */}
                        </Col>
                        <Col m={3} s={12}>
                        {/* <Card style={{backgroundColor:'#FFFFFF'}} className='white' 
                                textClassName='white-text' 
                                header={<CardTitle image="/static/team-one.png"></CardTitle>}
                                >
                                
                            </Card> */}
                        </Col>
                        <Col m={3} s={12}>
                        </Col>
                    </Row>
                </div>
                <div className='parent' style={{backgroundColor: '#ffffff'
                }}>
                    <Row className='child' style={{textAlign:'center'}}>
                    <h2 className='text'>CREATED BY EXPERTS</h2>
<p className='text_'>We believe in a diverse range of talent and personality brings creative skills and ideas to the web.</p>
                    </Row>
                </div>

            </div>
        );
    }
}

export default OurTeam;