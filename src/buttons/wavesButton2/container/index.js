import React, { Component } from 'react'
import '../styles/styles.css';


export default class Button extends Component {

    render() {
        return <div className='btn__group'>
            <div className='btn__Debris'>
                <button className='btn__button' href='#'>
                    coral
                    <span className='Coralwave1'></span>
                    <span className='Coralwave2'></span>
                    <span className='Coralwave3'></span>
                </button>
            </div>
        </div>
    }
}