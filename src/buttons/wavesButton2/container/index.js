import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import '../styles/styles.css';

export default class Button extends Component {


    render() {
        return <div className='btn__group'>
                <div className='btn__Debris'>
                    <Link to={this.props.link} className='btn__button'>
                        {this.props.name}
                        <span className='Coralwave1 btn__span'/>
                        <span className='Coralwave2 btn__span'/>
                        <span className='Coralwave3 btn__span'/>
                    </Link>
                </div>
            </div>
    }
}