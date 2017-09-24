import React, { Component } from 'react'
import MainPage from '../../mainPage/containers/index';
import Projects from '../../projects/containers/index';
import Contacts from '../../contscts/containers/index';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

export default class Routing extends Component {

  render() {
    return <Router>
            <Switch>
                <Route exact path='/' component={MainPage}/>
                <Route exact path='/Projects' component={Projects}/>
                <Route exact path='/Contacts' component={Contacts}/>
            </Switch>
    </Router>
  }
}