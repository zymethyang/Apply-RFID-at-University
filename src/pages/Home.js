import React, { Component } from 'react';
import callApi from '../utils/callApi';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listStudent: [],
            search: "",
            realtime: [],
            currentID: 1
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        setInterval(() => {
            callApi('student').then(students => {
                this.setState({
                    listStudent: students.data
                })
            });
        }, 1000);
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

    renderListEventStudent = (student) => {
        let result = null;
        if (student !== undefined) {
            result = student.sktg.map((value, index) => {
                return (<a className="collection-item" style={{ color: "#810173", fontWeight: 'bold' }} key={index}>{value}</a>);
            })
        } else {
            return (<div></div>);
        }
        return result;
    }

    render() {
        let stu = this.filterStr(this.state.listStudent, this.state.search);
        let { listStudent, currentID } = this.state;
        return (
            <div className="row">
                <div className="col l6" style={{ marginTop: 20 }}>
                    <div className="collection">
                        {this.renderListEventStudent(listStudent[currentID])}
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

    click = (id) => {
        this.setState({
            currentID: id
        })
    }

    renderListStudent = (stu) => {
        let result = null;
        result = stu.map((value, index) => {
            return (
                <a className="collection-item" style={{ color: "#810173", fontWeight: 'bold' }} key={index} onClick={() => this.click(index)}>{value.ten} - {value.diem} Điểm</a>
            );
        })
        return result;
    }
}

export default Home;
