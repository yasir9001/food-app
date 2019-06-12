import React from 'react';
import './scss/app.scss';
import { RegistrationView } from './components/registration-view/RegistrationView';
import { RestaurantRegistrationView } from './components/restaurant-registration-view/RestaurantRegistrationView'
import { LoginView } from './components/login-view/LoginView'
import { Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <>
        <Route exact path="/" render={(props) => <LoginView {...props} />} />
        <Route exact path="/register" render={(props) => <RegistrationView {...props} />} />
        <Route exact path="/register-restaurant" render={(props) => <RestaurantRegistrationView {...props} />} />
      </>
    </BrowserRouter>
  );
}

export default App;
