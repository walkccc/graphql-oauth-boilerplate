import React from 'react';

import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';
import { AppHeader, Home, Login } from './sections';

const App = () => {
  return (
    <div>
      <h1>GraphQL OAuth Boilerplate</h1>
      <BrowserRouter>
        <AppHeader />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
