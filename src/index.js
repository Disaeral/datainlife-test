import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ItemStore from './store/ItemStore';

export const Context = createContext(null)

ReactDOM.render(
  <Context.Provider value={{
    items: new ItemStore()
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);

