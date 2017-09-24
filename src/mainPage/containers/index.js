import React, { Component } from 'react'
import  OneWaveButton from '../../buttons/wavesButton/container/index';
import  ThreeWaveButton from '../../buttons/wavesButton2/container/index';
import '../styles/styles.css';


export default class Main extends Component {

  render() {
    return <div className='contact'>
                <OneWaveButton link='/Projects' name='Projects'/>
                <ThreeWaveButton link='/Contacts' name='Contacts' />
          </div>
  }
}