import React, { Component } from 'react';

class ListEvents extends Component {
    render() {
        return (
            <div className="row">
                <div className="col l8" style={{ marginTop: 10 }}>
                    <div class="card" style={{ backgroundColor: '#810173' }}>
                        <div class="card-content white-text">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Tên sự kiện</th>
                                        <th>Thời gian bắt đầu</th>
                                        <th>Thời gian kết thúc</th>
                                        <th>Numbers Student</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>Alvin</td>
                                        <td>Eclair</td>
                                        <td>$0.87</td>
                                        <td>$0.87</td>
                                    </tr>
                                    <tr>
                                        <td>Alan</td>
                                        <td>Jellybean</td>
                                        <td>$3.76</td>
                                        <td>$3.76</td>
                                    </tr>
                                    <tr>
                                        <td>Jonathan</td>
                                        <td>Lollipop</td>
                                        <td>$7.00</td>
                                        <td>$7.00</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="col l4" style={{ marginTop: 10 }}>
                    <div class="card" style={{ backgroundColor: '#09158A' }}>
                        <div class="card-content white-text">
                            <span style={{ fontWeight: 'bold', fontSize: 24 }}>
                                Them su kien
                            </span>
                            <div className="row">
                                <div class="input-field" style={{ paddingLeft: 15, paddingRight: 15 }}>
                                    <input placeholder="Nhap Ten Su kien" id="name" type="text" class="validate" style={{ color: 'white', fontWeight: 'bolder' }} />
                                </div>
                            </div>
                            <div className="row">
                                <div class="input-field" style={{ paddingLeft: 15, paddingRight: 15 }}>
                                    <input placeholder="Nhap Diem Cong" id="name" type="text" class="validate" style={{ color: 'white', fontWeight: 'bolder' }} />
                                </div>
                            </div>
                            <div className="row">
                                <div class="input-field" style={{ paddingLeft: 15, paddingRight: 15 }}>
                                    <input type="date" name="bday" min="2000-01-02" style={{ color: 'white' }} />
                                </div>
                            </div>
                            <div className="row">
                                <div class="input-field" style={{ paddingLeft: 15, paddingRight: 15 }}>
                                    <input type="date" name="bday" min="2000-01-02" style={{ color: 'white' }} />
                                </div>
                            </div>
                            <span className="row">
                                <a class="waves-effect waves-deep-purple btn-flat" style={{ color: 'white', fontWeight: 'bold', marginLeft: 15 }}>SEND</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListEvents;
