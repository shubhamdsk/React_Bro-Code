import React from "react";
import profilepic from "../assets/profilepic.jpeg";

const Cards = () => {
  return (
    <>
      <div className="card">
        <img className="card-image" src={profilepic} alt="profile picture" />
        <h2 className="card-title">Shubham Deshmukh</h2>
        <p className="card-desc">I am a Postgraduate Student.</p>
      </div>
    </>
  );
};

export default Cards;
