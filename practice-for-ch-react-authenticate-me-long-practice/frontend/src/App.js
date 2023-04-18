import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';

function App() {
  return (
    <>
      <Switch>
        <Route path="/login">
          <LoginFormPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;