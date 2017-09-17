import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Contact from './contact/containers/index'
import './styles.css'

import configureStore from './photo/store/configureStore'

const store = configureStore();

render(
  <Provider store={store}>
      <Contact/>
  </Provider>,
  document.getElementById('root')
);
