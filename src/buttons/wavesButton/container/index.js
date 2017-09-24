import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import '../styles/styles.css';


export default class Button extends Component {

    render() {
        return <div className='btn__group'>
            <div className='btn__Debris'>
                {/*<div className='btn__button' href='#'>*/}
                    <Link to={this.props.link} className='btn__button' >
                        {this.props.name}
                        <span className='one'/>
                    </Link>
            </div>
        </div>
    }
}