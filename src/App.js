import React from 'react';
import './scss/app.scss';
import { RegistrationView } from './components/registration-view/RegistrationView';
import { RestaurantRegistrationView } from './components/restaurant-registration-view/RestaurantRegistrationView'
import { LoginView } from './components/login-view/LoginView'
import { Route, BrowserRouter } from 'react-router-dom';
import { UserRoutes } from './components/user-view/UserRoutes'
import { RestaurantRoutes } from './components/restaurant-view/RestaurantViewRoutes';

function App() {
  return (
    <div>
      <BrowserRouter>
        <>
          <Route exact path="/" render={(props) => <LoginView {...props} />} />
          <Route exact path="/register" render={(props) => <RegistrationView {...props} />} />
          <Route exact path="/register_restaurant" render={(props) => <RestaurantRegistrationView {...props} />} />
          <UserRoutes />
          <RestaurantRoutes />
        </>
      </BrowserRouter>

    </div>
  );
}

export default App;
