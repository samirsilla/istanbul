import React, { Component } from "react";
import { Link } from "react-router-dom";
import numeral from "numeral";
import moment from "moment";
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import tour1 from "../assets/images/tour-1.jpg";
import tour2 from "../assets/images/tour-2.jpg";
import tour3 from "../assets/images/tour-3.jpg";
import tour4 from "../assets/images/tour-4.jpg";
import tour5 from "../assets/images/tour-5.jpg";
import tour6 from "../assets/images/tour-6.jpg";

const featuredImages = [tour1, tour2, tour3, tour4, tour5, tour6];

export default class Tour extends Component {
  constructor(props) {
    super(props);

    const {
      id,
      description,
      duration,
      likes,
      max,
      name,
      price
    } = this.props.location.state;

    this.state = {
      tour: { id, description, duration, likes, max, name, price },
      guests: 1,
      date: moment(),
      stringDate: moment().format("MMMM Do, YYYY"),
      totalPrice: price,
      calendarFocused: false
    };
  }

  getDropdownOptions() {
    let options = [];
    for (let i = 0; i < this.state.tour.max; i++) {
      options.push(
        <option key={i} value={i + 1}>
          {i + 1} {i === 0 ? "Guest" : "Guests"}
        </option>
      );
    }
    return options;
  }

  handleGuestCount = e => {
    const guests = e.target.value;
    const price = this.state.tour.price;
    this.setState ({
      totalPrice: price * guests
    });
  };

  handleSetDate = date => {
    this.setState(() => ({
      date: date,
      stringDate: date.format("MMMM Do, YYYY")
    }));
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };

  render() {
    const {
      id,
      name,
      max,
      duration,
      likes,
      description
    } = this.state.tour;
    const { date, stringDate, calendarFocused, totalPrice } = this.state;
    return (
      <React.Fragment>
        <div className="tour-detail-page-container">
          <Header />
          <div className="tour-detail-page-wrapper">
            <div className="tour-detail-wrapper">
              <h3 className="detail-name">{name}</h3>
              <div className="tour-detail-secondary-details-container">
                <div className="stars">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>

                <div className="tour-detail-icons-details">
                  <i className="fas fa-user" />
                  <h5 className="tour-card__detail">{max} guests</h5>
                  <i className="fas fa-clock" />
                  <h5 className="tour-card__detail">{duration}</h5>
                  <i className="fas fa-heart" />
                  <h5 className="tour-card__detail">{likes} likes</h5>
                </div>
              </div>

              <p className="detail-description">{description}</p>

              <form className="book-form">
                <div className="form-labels">
                  <div className="form-label">Date</div>
                  <div className="form-label">Guests</div>
                </div>
                <div className="form-inputs">
                  <SingleDatePicker
                    date={date}
                    onDateChange={this.handleSetDate}
                    focused={calendarFocused}
                    onFocusChange={this.onFocusChange}
                  />

                  <select onChange={this.handleGuestCount}>
                    {this.getDropdownOptions()}
                  </select>
                </div>
              </form>
              <div className="price-book-group">
                <div className="detail-price">
                  {numeral(totalPrice).format("$0,0.00")}
                </div>
                <Link
                  to={{
                    pathname: "/booking-confirmation",
                    state: {
                      tour: this.state.tour,
                      stringDate, 
                      totalPrice: this.state.totalPrice
                    }
                  }}
                >
                  <button className="cta-btn book">Book Now</button>
                </Link>
              </div>
            </div>

            <img
              src={featuredImages[id - 1]}
              className="detail-image"
              alt="featured tour"
            />
          </div>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}
