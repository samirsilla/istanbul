import React from "react";
import { Link } from "react-router-dom";
import numeral from "numeral";
import tour1 from "../assets/images/tour-1.jpg";
import tour2 from "../assets/images/tour-2.jpg";
import tour3 from "../assets/images/tour-3.jpg";
import tour4 from "../assets/images/tour-4.jpg";
import tour5 from "../assets/images/tour-5.jpg";
import tour6 from "../assets/images/tour-6.jpg";

const featuredImages = [tour1, tour2, tour3, tour4, tour5, tour6];

const Tours = props => (
  <div id="tours">
    <h2>Featured tour packages</h2>
    <div className="tour-card-grid__wrapper">
      {props.tours.map(tour => {
        return (
            <Link
              to={{
                pathname: `/tour/${tour.id}`,
                state: {
                  id: tour.id,
                  name: tour.name,
                  description: tour.description,
                  price: tour.price,
                  duration: tour.duration,
                  likes: tour.likes,
                  max: tour.max,
                  img: tour.img
                }
              }}
              key={tour.id} 
              className="tour-card__wrapper"
            >
              <img
                className="tour-card__img"
                src={featuredImages[tour.id - 1]}
                alt="tour"
              />
              <div className="tour-card__main-details">
                <div className="tour-card__main-details-left">
                <h4 className="tour-card__title">{tour.name}</h4>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                </div>
                <div className="tour-card__price">
                  {numeral(tour.price).format("$0,0.00")}
                </div>

              </div>
              <div className="tour-card__secondary-details">
              <i className="fas fa-user"></i>
                <h5 className="tour-card__detail">{tour.max} guests</h5>
                <i className="fas fa-clock"></i>
                <h5 className="tour-card__detail">{tour.duration}</h5>
                <i className="fas fa-heart"></i>
                <h5 className="tour-card__detail">{tour.likes} likes</h5>
              </div>
            </Link>
        );
      })}
    </div>
  </div>
);

export default Tours;
