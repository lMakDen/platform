import React, { Component } from 'react'
import '../styles/styles.css';


export default class Button extends Component {

    render() {
        return <div className='btn__group'>
            <div className='btn__Debris'>
                <button className='btn__button' href='#'>
                    {this.props.name}
                    <span className='one'></span>
                </button>
            </div>
        </div>
    }
}