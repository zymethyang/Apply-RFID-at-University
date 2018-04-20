import React, { Component } from 'react';


class Home extends Component {
    render() {
        return (
            <div className="row">
                <div className="col l6" style={{ marginTop: 20 }}>
                    <div class="collection">
                        <a class="collection-item" style={{ color: "#810173", fontWeight: 'bold' }}>Ten - Ngay Quet The</a>
                        <a class="collection-item" style={{ color: "#810173", fontWeight: 'bold' }}>Ten - Ngay Quet The</a>
                        <a class="collection-item" style={{ color: "#810173", fontWeight: 'bold' }}>Ten - Ngay Quet The</a>
                        <a class="collection-item" style={{ color: "#810173", fontWeight: 'bold' }}>Ten - Ngay Quet The</a>
                    </div>
                </div>
                <div className="col l6" style={{ marginTop: 20 }}>
                    <div class="card">
                        <div class="card-content">
                            <span className="row">
                                <span className="col l10">
                                    <input value="Alvin" type="text" class="validate" />
                                </span>
                                <span className="col l2">
                                    <i class="material-icons" style={{ fontSize: 50 }}>search</i>
                                </span>
                            </span>
                            <span className="row">
                                <div class="collection">
                                    <a class="collection-item" style={{ color: "#810173", fontWeight: 'bold' }}>Ten - Su kien tham gia - Diem ren luyen</a>
                                    <a class="collection-item" style={{ color: "#810173", fontWeight: 'bold' }}>Ten - Su kien tham gia - Diem ren luyen</a>
                                    <a class="collection-item" style={{ color: "#810173", fontWeight: 'bold' }}>Ten - Su kien tham gia - Diem ren luyen</a>
                                    <a class="collection-item" style={{ color: "#810173", fontWeight: 'bold' }}>Ten - Su kien tham gia - Diem ren luyen</a>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
