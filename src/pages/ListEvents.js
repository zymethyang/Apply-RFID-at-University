import React, { Component } from 'react';
import moment from 'moment';
import callApi from '../utils/callApi';


class ListEvents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tensk: "",
            diemCong: 0,
            tgbd: "",
            gbd: "",
            tgkt: "",
            gkt: "",
            dataEvents: []
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    componentDidMount() {
        callApi('event').then(res => {
            this.setState({
                dataEvents: res.data
            });
        });
    }

    renderListEvents = (dataEvents) => {
        let result = null;
        result = dataEvents.map((value, index) => {
            return (
                <tr key={index}>
                    <td>{value.ten}</td>
                    <td>{moment.unix(value.tgbd).format("DD/MM/YYYY hh:mm A")}</td>
                    <td>{moment.unix(value.tgkt).format("DD/MM/YYYY hh:mm A")}</td>
                    <td>{value.diemCong}</td>
                </tr>
            );
        })
        return result;
    }

    render() {
        let { dataEvents } = this.state;
        return (
            <div className="row">
                <div className="col l8" style={{ marginTop: 10 }}>
                    <div className="card" style={{ backgroundColor: 'white' }}>
                        <div className="card-content black-text">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Tên sự kiện</th>
                                        <th>Thời gian bắt đầu</th>
                                        <th>Thời gian kết thúc</th>
                                        <th>Điểm cộng</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {this.renderListEvents(dataEvents)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="col l4" style={{ marginTop: 10 }}>
                    <div className="card" style={{ backgroundColor: '#white' }}>
                        <div className="card-content black-text">
                            <span style={{ fontWeight: 'bold', fontSize: 24 }}>
                                Thêm sự kiện
                                </span>
                            <div className="row">
                                <div className="input-field" style={{ paddingLeft: 15, paddingRight: 15 }}>
                                    <input placeholder="Nhập tên sự kiện" name="tensk" type="text" className="validate" style={{ color: 'black', fontWeight: 'bolder' }} value={this.state.tensk}
                                        onChange={this.handleInputChange} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field" style={{ paddingLeft: 15, paddingRight: 15 }}>
                                    <input placeholder="Nhập điểm cộng" name="diemCong" type="number" className="validate" style={{ color: 'black', fontWeight: 'bolder' }} value={this.state.diemCong}
                                        onChange={this.handleInputChange} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col l7">
                                    <div className="input-field" style={{ paddingLeft: 15, paddingRight: 15 }}>
                                        <input type="date" name="tgbd" min="2000-01-02" style={{ color: 'black' }} value={this.state.tgbd}
                                            onChange={this.handleInputChange} />
                                    </div>
                                </div>
                                <div className="col l5">
                                    <div className="input-field" style={{ paddingLeft: 15, paddingRight: 15 }}>
                                        <input type="time" name="gbd" style={{ color: 'black' }} value={this.state.gbd}
                                            onChange={this.handleInputChange} />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col l7">
                                    <div className="input-field" style={{ paddingLeft: 15, paddingRight: 15 }}>
                                        <input type="date" name="tgkt" min="2000-01-02" style={{ color: 'black' }} value={this.state.tgkt}
                                            onChange={this.handleInputChange} />
                                    </div>
                                </div>
                                <div className="col l5">
                                    <div className="input-field" style={{ paddingLeft: 15, paddingRight: 15 }}>
                                        <input type="time" name="gkt" style={{ color: 'black' }} value={this.state.gkt}
                                            onChange={this.handleInputChange} />
                                    </div>
                                </div>
                            </div>
                            <span className="row">
                                <a className="waves-effect waves-deep-purple btn-flat" style={{ color: 'black', fontWeight: 'bold', marginLeft: 15 }} onClick={() => this.submitForm()}>Hoàn thành</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    submitForm = () => {
        let tmpGbd = this.state.gbd.split(":");
        let tgbd = moment(this.state.tgbd).unix() + parseInt(tmpGbd[0]) * 3600 + parseInt(tmpGbd[1]) * 60;
        let tmpGkt = this.state.gkt.split(":");
        let tgkt = moment(this.state.tgkt).unix() + parseInt(tmpGkt[0]) * 3600 + parseInt(tmpGkt[1]) * 60;
        let body = {
            "ten": this.state.tensk,
            "tgbd": tgbd,
            "tgkt": tgkt,
            "diemCong": this.state.diemCong,
            "thDu": 0
        }
        callApi('event', 'POST', body).then(res => {
            if (res.data) {
                window.M.toast({ html: 'Đã lên lịch sự kiện!' });
                let tmpSk = this.state.dataEvents;
                tmpSk.push(body);
                this.setState({
                    dataEvents: tmpSk
                });
            }
        });
    }
}

export default ListEvents;
