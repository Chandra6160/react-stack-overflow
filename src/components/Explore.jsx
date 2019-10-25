import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import Interesting from './InterestingQuestions';
import Bount from './BountiedQuestions';
import Hot from './HotQuestions';
import Week from './WeekQuestions';
import Month from "./MonthQuestions";
import Asks from "./AskQuestion";
export default class Explore extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return (
          <Router>
          <div className="row container-fluid">
            <div className="col-lg-2 d-none d-lg-block">
            </div>
            <div className="col-lg-8 col-sm-12 ml-4 mr-4 questions mt-3 card" >
              <div class="d-flex row mt-2 ">
                <div class="ml-3">
                  <h2 >Top Questions</h2>
                </div>
                <div class="ml-auto mr-1">
                  <Link to="/explore/asks" class="btn btn-primary" >Search Question</Link>
                </div>
              </div>
              <div class="btn-group mt-5 justify-content-end flex-wrap">
                <Link to="/explore/interesting" class="btn btn-md btn-outline-info  ">Interesting</Link>
                <Link to="/explore/bount" class="btn btn-md btn-outline-info  ">Bountied</Link>
                <Link to="/explore/hot" class="btn btn-md btn-outline-info   ">Hot</Link>
                <Link to="/explore/week" class="btn btn-md btn-outline-info  " >This Week</Link>
                <Link to="/explore/month" class="btn btn-md btn-outline-info  ">This Month</Link>
                <div class="form-group col-12">
                  <hr />
                </div>
              </div>
              <div class="w-100"></div>
              <div class="row">
                <Switch>
                  <Route path="/explore/asks" component={Asks} />
                  <Route path="/explore/interesting" component={Interesting} />
                  <Route path="/explore/bount" component={Bount} />
                  <Route path="/explore/hot" component={Hot} />
                  <Route path="/explore/week" component={Week} />
                  <Route path="/explore/month" component={Month} />
                </Switch>
              </div>
            </div>
            <div className="col-lg-2 d-none d-lg-block">
            </div>
          </div>
          </Router>

        );
    }
}