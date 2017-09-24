import React, { Component } from 'react'
import Contact from './../../contact/containers/index';
import Contact2 from './../../contsct2/containers/index';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

export default class Routing extends Component {

  render() {
    return <Router>
            <Switch>
                <Route exact path='/' component={Contact}/>
                <Route exact path='/Projects' component={Contact}/>
                <Route exact path='/Contacts' component={Contact2}/>
            </Switch>
    </Router>
  }
}