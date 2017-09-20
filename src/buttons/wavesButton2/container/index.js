import React, { Component } from 'react'
import '../styles/styles.css';


export default class Button extends Component {

    render() {
        return <div className='btn__group'>
            <div className='btn__Debris'>
                <button className='btn__button' href='#'>
                    {this.props.name}
                    <span className='Coralwave1 btn__span'></span>
                    <span className='Coralwave2 btn__span'></span>
                    <span className='Coralwave3 btn__span'></span>
                </button>
            </div>
        </div>
    }
}