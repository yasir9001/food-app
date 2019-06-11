import React from 'react';
import './scss/app.scss';
import { RegistrationView } from './components/registration-view/RegistrationView';
import {RestaurantRegistrationView} from './components/restaurant-registration-view/RestaurantRegistrationView'
import {LoginView} from './components/login-view/LoginView'
function App() {
  return (
    <div>
      {/* <RegistrationView /> */}
      {/* <RestaurantRegistrationView /> */}
      <LoginView />
    </div>
  );
}

export default App;
