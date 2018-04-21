import React, { Component } from 'react';
import callApi from '../utils/callApi';
import mqtt from 'mqtt';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listStudent: [],
            search: "",
            realtime: []
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        callApi('student').then(students => {
            this.setState({
                listStudent: students.data
            })
        });
    }

    filterStr = (Arr, mStr) => {
        let result = [];
        Arr.forEach((value, index) => {
            if (value.ten.toLowerCase().indexOf(mStr.toLowerCase()) !== -1) {
                result.push(value);
            }
        });
        return result;
    }

    handleChange = (event) => {
        this.setState({ search: event.target.value });
    }

    mqttRealtime = (tmpRealtime) => {
        var client = mqtt.connect({
            protocol: 'wss',
            host: 'm13.cloudmqtt.com',
            port: '34250',
            password: 'B9Io8J5H88fP',
            username: 'jepjknnb'
        });
        client.on('connect', function () {
            client.subscribe('student')
        })
        client.on('message', function (topic, message) {
            tmpRealtime.push(JSON.parse(message.toString()));
            this.setState({
                realtime: tmpRealtime
            });
            client.end();
        });
    }

    render() {
        this.mqttRealtime(this.state.realtime);
        let stu = this.filterStr(this.state.listStudent, this.state.search);
        return (
            <div className="row">
                <div className="col l6" style={{ marginTop: 20 }}>
                    <div className="collection">
                        <a className="collection-item" style={{ color: "#810173", fontWeight: 'bold' }}>Ten - Ngay Quet The</a>
                        <a className="collection-item" style={{ color: "#810173", fontWeight: 'bold' }}>Ten - Ngay Quet The</a>
                        <a className="collection-item" style={{ color: "#810173", fontWeight: 'bold' }}>Ten - Ngay Quet The</a>
                        <a className="collection-item" style={{ color: "#810173", fontWeight: 'bold' }}>Ten - Ngay Quet The</a>
                    </div>
                </div>
                <div className="col l6" style={{ marginTop: 20 }}>
                    <div className="card">
                        <div className="card-content">
                            <span className="row">
                                <span className="col l10">
                                    <input value={this.state.search} type="text" className="validate" onChange={this.handleChange} />
                                </span>
                                <span className="col l2">
                                    <i className="material-icons" style={{ fontSize: 50 }}>search</i>
                                </span>
                            </span>
                            <span className="row">
                                <div className="collection">
                                    {this.renderListStudent(stu)}
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    renderListStudent = (stu) => {
        let result = null;
        result = stu.map((value, index) => {
            let sktg = "";
            if (value.sktg.length === 0) {
                sktg = "Chưa tham gia!";
            } else {
                sktg = "";
                value.sktg.forEach(value => {
                    sktg = sktg + " " + value;
                });
            }
            return (
                <a className="collection-item" style={{ color: "#810173", fontWeight: 'bold' }} key={index}>{value.ten} - {sktg} - {value.diem} Điểm</a>
            );
        })
        return result;
    }
}

export default Home;
