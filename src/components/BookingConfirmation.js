import React, { Component } from 'react';
import numeral from 'numeral';
import Header from './Header';
import Footer from './Footer';

export default class BookingConfirmation extends Component {
  constructor(props) {
    super(props);

    const { tour, stringDate, totalPrice } = this.props.location.state;

    this.state = {
      tour,
      stringDate, 
      totalPrice
    }
  }
  
  render() {
    const { name } = this.state.tour;
    const { stringDate, totalPrice } = this.state;
    return (
      <div className="confirmation-page-wrapper">
      <Header />
      <div className="confirmation-success-message">
        <p>Success! You have booked your confirmation with Istanbul.</p>
        <p>We look forward to seeing you soon!</p>
        <p>Tour name: {name}</p>
        <p>Date: {stringDate}</p>
        <p>Paid: {numeral(totalPrice).format('$0,0.00')}</p>
        </div>
      <Footer />
        </div>
    )
  }
}
