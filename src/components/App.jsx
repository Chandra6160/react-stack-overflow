import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: "",
      questions: [],
    }
  }
  render() {
    return (
      <React.Fragment>
        <nav class="navbar navbar-expand-lg navbar-light bg-light " >
          <Link to="/explore/interesting" class="navbar-brand" ><i class="fab fa-stack-overflow "></i> Que <b>overflow</b></Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </nav>
      </React.Fragment>

    );
  }

};
