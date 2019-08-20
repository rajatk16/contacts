import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import App from './App';
import {store, persistor} from './redux/store';
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render( 
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App/>
    </PersistGate>
  </Provider>, 
  document.getElementById('root')
);