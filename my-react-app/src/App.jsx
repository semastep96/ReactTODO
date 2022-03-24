import React from 'react'
import store from './store/store';
import Todo from './Todo';
import { Provider } from 'react-redux';


function App() {
  return (
    <Provider store={store}>
      <Todo/>
    </Provider>
  );
}

export default App
