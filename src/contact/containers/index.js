import React, { Component } from 'react'
import  OneWaveButton from '../../buttons/wavesButton/container/index';
import  ThreeWaveButton from '../../buttons/wavesButton2/container/index';

import '../styles/styles.css';


export default class Contact extends Component {

  renderContact(){
    return <div>
      hello world!
    </div>
  }

  render() {
    return <div className='contact'>
            <OneWaveButton name='Projects'/>
            <ThreeWaveButton name='Contacts' value={this.renderContact()}/>
          </div>
  }
}