import React from "react";
import Header from "../components/Header";
import banner from "../assets/img/BannerComplete.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />
      <div className="content-home">
        <div className="container">
          <div className="coverText">
            <h1>
              <span>Find</span> all your favorite <span>character</span>
            </h1>
            <p>
              You can find out all the <br />
              information about your favorite characters
            </p>
            <Link to="/characters">
              <button>See more...</button>
            </Link>
          </div>
          <div className="banner">
            <img width={600} src={banner}></img>
          </div>
        </div>
      </div>

      {/* <div className="home-container">
        <div className="coverText">
          <h1>Find all your favorite character</h1>
          <p>
            You can find out all the information about your favorite characters
          </p>
          <button>See more...</button>
        </div>
        <img width={600} src={banner}></img>
      </div> */}
    </>
  );
};

export default Home;
