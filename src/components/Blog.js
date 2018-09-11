import React from "react";
import blogImg from '../assets/images/blog.jpg';
import secondaryImg from '../assets/images/tour-1.jpg';

const Blog = () => (
  <div>
    <h2 className="section__title">Your tour, your story</h2>
    <div className="blog__wrapper">
      <div className="blog__story">
        <img src={blogImg} alt="blog-cover" className="blog__image" />
        <div className="blog__details">
          <div className="blog__title">Tour Stories</div>
          <h3 className="blog__subtitle">Traveler tales to inspire your next adventure</h3>
        </div>
      </div>
      <img src={secondaryImg} alt="blog" className="blog__secondary-image"></img>
    </div>
  </div>
);

export default Blog;
