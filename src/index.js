import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import './styles/app.css'
import configureStore from './store/configureStore'

const store = configureStore();

render(
  <Provider store={store}>
    <div className='app'>
        <div>Hello</div>
      {/*<App />*/}
    </div>
  </Provider>,
  document.getElementById('root')
);
