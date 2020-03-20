/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, {Component} from "react";
import ChartistGraph from "react-chartist";
import {Grid, Row, Col} from "react-bootstrap";

import {Card} from "components/Card/Card.jsx";
import {StatsCard} from "components/StatsCard/StatsCard.jsx";
import {Tasks} from "components/Tasks/Tasks.jsx";
import temperature from "../assets/img/temperature.png";
import humidity from "../assets/img/humidity.png";
import pressure from "../assets/img/meter.png";
import magnet from "../assets/img/magnet.png";
import vertical from "../assets/img/align.png";
import horizon from "../assets/img/align2.png";
import movement from "../assets/img/movement.png";
import socketIOClient from "socket.io-client";
import axios from 'axios'

import {
    dataPie,
    legendPie,
    dataSales,
    optionsSales,
    responsiveSales,
    legendSales,
    dataBar,
    optionsBar,
    responsiveBar,
    legendBar
} from "variables/Variables.jsx";

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pressure: 0.0,
            humidity: 0.0,
            temperature: 0.0,
            magnet: "NO",
            horizontal: "NO",
            mouvement: "NO"
        };
    }

    componentDidMount() {

    }

    humidity = async () => {
        await axios.get('http://127.0.0.1:3000/humidity', {}).then((response) => {
            this.setState({humidity: response.data})
            console.log("success");
            console.log('response is : ' + response.data);
        }).catch(function (error) {
            if (error.response) {
                console.error("error1");
                console.log(error.response.headers);
            } else if (error.request) {
                console.error("error2");
                console.log(error.request);
            } else {
                console.error("error3");
                console.log(error.message);
            }
            console.error("conf");
            console.log(error.config);
        });
    }

    temperature = () => {
        axios.get('http://127.0.0.1:3000/temperature', {}).then((response) => {
            console.log('response is : ' + response.data);
            this.setState({temperature: response.data});
            console.log("success");
            console.log('response is : ' + response.data);
        }).catch(function (error) {
            if (error.response) {
                console.error("error1");
                console.log(error.response.headers);
            } else if (error.request) {
                console.error("error2");
                console.log(error.request);
            } else {
                console.error("error3");
                console.log(error.message);
            }
            console.error("conf");
            console.log(error.config);
        });
    }

    horizon = () => {
        axios.get('http://127.0.0.1:3000/horizontal', {}).then((response) => {
            console.log('response is : ' + response.data);
            this.setState({horizontal: response.data});
            console.log("success");
            console.log('response is : ' + response.data);
        }).catch(function (error) {
            if (error.response) {
                console.error("error1");
                console.log(error.response.headers);
            } else if (error.request) {
                console.error("error2");
                console.log(error.request);
            } else {
                console.error("error3");
                console.log(error.message);
            }
            console.error("conf");
            console.log(error.config);
        });
    }

    ledon = async () => {
        await axios.get('http://127.0.0.1:3000/ledon', {}).then((response) => {
            console.log("success");
            console.log('response is : ' + response.data);
        }).catch(function (error) {
            if (error.response) {
                console.error("error1");
                console.log(error.response.headers);
            } else if (error.request) {
                console.error("error2");
                console.log(error.request);
            } else {
                console.error("error3");
                console.log(error.message);
            }
            console.error("conf");
            console.log(error.config);
        });
    };

    ledoff = async () => {
        await axios.get('http://127.0.0.1:3000/ledoff', {}).then((response) => {
            console.log("success");
            console.log('response is : ' + response.data);
        }).catch(function (error) {
            if (error.response) {
                console.error("error1");
                console.log(error.response.headers);
            } else if (error.request) {
                console.error("error2");
                console.log(error.request);
            } else {
                console.error("error3");
                console.log(error.message);
            }
            console.error("conf");
            console.log(error.config);
        });
    };

    pressure = () => {
        axios.get('http://127.0.0.1:3000/pressure', {}).then((response) => {
            this.setState({pressure: response.data})
            console.log("success");
            console.log('response is : ' + JSON.stringify(response));
        }).catch(function (error) {
            if (error.response) {
                console.error("error1");
                console.log(error.response.headers);
            } else if (error.request) {
                console.error("error2");
                console.log(error.request);
            } else {
                console.error("error3");
                console.log(error.message);
            }
            console.error("conf");
            console.log(error.config);
        });
    }

    magnet = () => {
        axios.get('http://127.0.0.1:3000/magnet', {}).then((response) => {
            this.setState({magnet: response.data})
            console.log("success");
            console.log('response is : ' + JSON.stringify(response));
        }).catch(function (error) {
            if (error.response) {
                console.error("error1");
                console.log(error.response.headers);
            } else if (error.request) {
                console.error("error2");
                console.log(error.request);
            } else {
                console.error("error3");
                console.log(error.message);
            }
            console.error("conf");
            console.log(error.config);
        });
    }

    movement = () => {
        axios.get('http://127.0.0.1:3000/mouvement', {}).then((response) => {
            this.setState({mouvement: response.data})
            console.log("success");
            console.log('response is : ' + JSON.stringify(response));
        }).catch(function (error) {
            if (error.response) {
                console.error("error1");
                console.log(error.response.headers);
            } else if (error.request) {
                console.error("error2");
                console.log(error.request);
            } else {
                console.error("error3");
                console.log(error.message);
            }
            console.error("conf");
            console.log(error.config);
        });
    }

    createLegend(json) {
        var legend = [];
        for (var i = 0; i < json["names"].length; i++) {
            var type = "fa fa-circle text-" + json["types"][i];
            legend.push(<i className={type} key={i}/>);
            legend.push(" ");
            legend.push(json["names"][i]);
        }
        return legend;
    }

    render() {
        let isVertical = false;
        let isMoving = false;
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col lg={4} sm={6}>
                            <StatsCard
                                bigIcon={<img src={temperature} width={50} alt={"website logo"}/>}
                                statsText="TEMPERATURE"
                                statsValue={this.state.temperature +"°C"}
                                statsIcon={<i className="fa fa-refresh"/>}
                                statsIconText="Updated now"
                            />
                        </Col>
                        <Col lg={4} sm={6}>
                            <StatsCard
                                bigIcon={<img src={humidity} width={50} alt={"website logo"}/>}
                                statsText="HUMIDITE"
                                statsValue={this.state.humidity+"%"}
                                statsIcon={<i className="fa fa-calendar-o"/>}
                                statsIconText="Last day"
                            />
                        </Col>
                        <Col lg={4} sm={6}>
                            <StatsCard
                                bigIcon={<img src={pressure} width={50} alt={"website logo"}/>}
                                statsText="PRESSION"
                                statsValue={this.state.pressure+"Pa"}
                                statsIcon={<i className="fa fa-clock-o"/>}
                                statsIconText="In the last hour"
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={4} sm={6}>
                            <StatsCard
                                bigIcon={<img src={magnet} width={50} alt={"website logo"}/>}
                                statsText="Magnétisme"
                                statsValue={this.state.magnet === "YES" ? "Oui" : "Non"}
                                statsIcon={<i className="fa fa-clock-o"/>}
                                statsIconText="In the last hour"
                            />
                        </Col>
                        <Col lg={4} sm={6}>
                            <StatsCard
                                bigIcon={<img src={horizon} width={50} alt={"website logo"}/>}
                                statsText="Alignement Horizontal"
                                statsValue={this.state.horizontal === "YES"? "oui" : "non"}
                                statsIcon={<i className="fa fa-refresh"/>}
                                statsIconText="Updated now"
                            />
                        </Col>
                        <Col lg={4} sm={7}>
                            <StatsCard
                                bigIcon={<img src={movement} width={50} alt={"website logo"}/>}
                                statsText="Mouvement"
                                statsValue={this.state.mouvement === "YES" ? "Est en mouvement" : "Ne bouge pas"}
                                statsIcon={<i className="fa fa-calendar-o"/>}
                                statsIconText="Last day"
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col md={8}>
                            <Card
                                statsIcon="fa fa-history"
                                id="chartHours"
                                title="DO SOME ACTIONS"
                                category="sub actions"
                                stats="Updated now"
                                content={
                                    <div>
                                        <button onClick={this.pressure}>
                                            PRESSURE
                                        </button>
                                        <br/>
                                        <button onClick={this.humidity}>
                                            HUMIDITY
                                        </button>
                                        <br/>
                                        <button onClick={this.temperature}>
                                            TEMPERATURE
                                        </button>
                                        <button onClick={this.magnet}>
                                            MAGNET
                                        </button>
                                        <br/>
                                        <button onClick={this.horizon}>
                                            HORIZONTAL
                                        </button>
                                        <br/>
                                        <button onClick={this.movement}>
                                            MOUVEMENT
                                        </button>
                                    </div>
                                }
                            />
                        </Col>
                        <Col md={4}>
                            <Card
                                statsIcon="fa fa-clock-o"
                                title="gestion de led"
                                category="LED 1"
                                stats="updated"
                                content={
                                    <div>
                                        <button onClick={this.ledon}>
                                            LED ON
                                        </button>
                                        <br/>
                                        <button onClick={this.ledoff}>
                                            LED Off
                                        </button>
                                    </div>

                                }
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col md={6}>
                            <Card
                                id="chartActivity"
                                title="ADD SOMETHING"
                                category="something"
                                stats="Data information certified"
                                statsIcon="fa fa-check"

                            />
                        </Col>

                        <Col md={6}>
                            <Card
                                title="Tasks"
                                category="Backend development"
                                stats="Updated 3 minutes ago"
                                statsIcon="fa fa-history"
                                content={
                                    <div className="table-full-width">
                                        <table className="table">
                                            <Tasks/>
                                        </table>
                                    </div>
                                }
                            />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Dashboard;
