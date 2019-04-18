import React, { Component } from 'react';
import Route from './src/config'
import {Provider} from 'react-redux';
import configureStore from './src/store';
const store = configureStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Route />
      </Provider>
    );
  }
}
export default App