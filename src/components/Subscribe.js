import React from "react";

const Subscribe = () => (
  <div className="subscribe__wrapper">
    <div>
      <h3 className="subscribe__title">We've got travel tips for you</h3>
      <p className="subscribe__subtitle">
        Sign up for a weekly dose of travel inspiration
      </p>
    </div>

    <form className="subscribe__form">
      <input
        className="subscribe__input"
        type="email"
        placeholder="email address"
      />
      <button className="cta-btn btn-2">Subscribe</button>
    </form>
    <p className="subscribe__disclaimer">
      By signing up, you agree to receive promotional emails. You can
      unsubscribe at any time. For more information, read our privacy policy.
    </p>
  </div>
);

export default Subscribe;
