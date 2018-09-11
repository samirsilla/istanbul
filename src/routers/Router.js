import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from '../App';
import Tour from '../components/Tour';
import BookingConfirmation from '../components/BookingConfirmation';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={App} exact />
      <Route path='/tour/:id' component={Tour} />
      <Route path='/booking-confirmation' component={BookingConfirmation} />
    </Switch>
  </BrowserRouter>
);

export default Router;