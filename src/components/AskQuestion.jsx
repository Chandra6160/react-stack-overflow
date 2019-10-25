import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';
import axios from "axios";
export default class Asks extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            flag:true,
            input: "",
            questions: [],
        }
    }
    handleInput = (e) => {
        e.preventDefault();
        this.setState({
            input: e.target.value,
        })
    }
    handleSearch = () => {
        this.setState({
            flag:false
        })
        axios({
            method: "get",
            url: "https://api.stackexchange.com/2.2/search",
            params: {
                order: "asc",
                sort: "relevance",
                intitle: this.state.input,
                site: "stackoverflow"
            }
        })
            .then((response) => {
                console.log(response)
                this.setState({
                    flag:true,
                    questions: response.data.items
                });
            })
            .catch((err) => alert(err))
    }
    render() {
        return (

            <Router>
                <div class="container">
                    <div class="row ml-2 mb-2 ml-4">
                        <form class="form-inline mr-auto">
                            <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" onChange={this.handleInput} />
                            <button class="btn btn-outline-primary btn-rounded btn-sm my-0" type="button" onClick={this.handleSearch}>Search</button>
                        </form>
                    </div>
                    {this.state.flag ? (
                        <div class="row">
                            {this.state.questions.map((ele) => {
                                return (
                                    <div class="card col-12 ml-2 ml-auto mt-1 ">
                                        <div class="d-flex bd-highlight  justify-content-start  mt-2 mb-2" >
                                            <div class="bg-light text-center btn ml-2   d-none d-md-block   text-align-center bd-highlight">
                                                <div >
                                                    <span >{Math.abs(ele.score) > 999 ? Math.sign(ele.score) * ((Math.abs(ele.score) / 1000).toFixed(1)) + 'k' : Math.sign(ele.score) * Math.abs(ele.score)}</span>
                                                </div>
                                                {ele.score > 1 ? (<div><span style={{ fontSize: "10px" }}>votes</span></div>) : (<div><span style={{ fontSize: "10px" }}>vote</span></div>)}
                                            </div>
                                            {ele.accepted_answer_id ? (<div class="btn btn-success text-center  ml-2  d-none d-md-block    bd-highlight">
                                                <div >
                                                    <span>{ele.answer_count}</span>
                                                </div>
                                                {ele.answer_count > 1 ? (<div><span style={{ fontSize: "10px" }}>answers</span></div>) : (<div><span style={{ fontSize: "10px" }}>answer</span></div>)}
                                            </div>) : (
                                                    <div class="btn btn-outline-success text-center  ml-2  d-none d-md-block    bd-highlight">
                                                        <div >
                                                            <span>{ele.answer_count}</span>
                                                        </div>
                                                        {ele.answer_count > 1 ? (<div><span style={{ fontSize: "10px" }}>answers</span></div>) : (<div><span style={{ fontSize: "10px" }}>answer</span></div>)}
                                                    </div>
                                                )}
                                            <div class="bg-light text-center btn ml-2 d-none d-md-block   bd-highlight">
                                                <div >
                                                    <span>{Math.abs(ele.view_count) > 999 ? Math.sign(ele.view_count) * ((Math.abs(ele.view_count) / 1000).toFixed(1)) + 'k' : Math.sign(ele.view_count) * Math.abs(ele.view_count)}</span>
                                                </div>
                                                {ele.view_count > 1 ? (<div><span style={{ fontSize: "10px" }}>views</span></div>) : (<div><span style={{ fontSize: "10px" }}>view</span></div>)}
                                            </div>
                                            <div class="bg-light ml-2 align-stretch w-100" >

                                                <a href={ele.link} target=" blank">
                                                    {unescape(ele.title)}</a>
                                                <br />
                                                <div class="d-flex row mt-2 ">
                                                    <div class="ml-2">
                                                        {ele.tags.map((tt) => {
                                                            return (
                                                                <a href="#" class="badge badge-dark ml-1">{tt}</a>
                                                            )
                                                        })}
                                                    </div>
                                                    <div class="ml-auto mr-4">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                    ) : (
                            <div class="d-flex justify-content-center">
                                <div class="spinner-border" role="status">
                                    <span class="sr-only">Loading...</span>
                                </div>
                            </div>
                        )
                    }
                </div>
            </Router>


        );
    }
}