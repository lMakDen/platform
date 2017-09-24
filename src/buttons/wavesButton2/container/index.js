import React, { Component } from 'react'
import '../styles/styles.css';
// import {Router, Link} from 'react-router';
// import Routing from '../../../routing/containers/index';
// import { Router, browserHistory } from 'react-router';

export default class Button extends Component {


    render() {
        return <div className='btn__group'>
                <div className='btn__Debris'>
                    <div className='btn__button'>
                        {this.props.name}
                        <span className='Coralwave1 btn__span'></span>
                        <span className='Coralwave2 btn__span'></span>
                        <span className='Coralwave3 btn__span'></span>
                    </div>
                </div>
            </div>
    }
}