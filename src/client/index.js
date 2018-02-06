import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import configureStore from './configure-store.js';
import Home from './components/home';
// import Login from './components/login';

// const store = configureStore();
ReactDOM.render(

  // <Provider store={store}>
  <BrowserRouter>
    <div className='app'>
      <Switch>
        <Route exact path='/' component={Home} />
        {/* <Route exact path='/login' component={Login} /> */}
        {/* <Route path='/' component={PageNotFound} /> */}
      </Switch>
    </div>
  </BrowserRouter>
  // </Provider>,
  ,document.getElementById('root')
);
