import React from 'react'
import { render } from 'react-dom'
// import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Contact from './contact/containers/index';
import Routing from './routing/containers/index';
import './styles.css'

// import configureStore from './photo/store/configureStore'

// const store = configureStore();

render(
    <Router>
        <div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/g'>About</Link></li>

            </ul>

            <hr/>
            <Switch>
                <Route exact path='/' component={Routing}/>
                <Route exact path='/g' component={Contact}/>
            </Switch>
        </div>
    </Router>,
  document.getElementById('root')
);
