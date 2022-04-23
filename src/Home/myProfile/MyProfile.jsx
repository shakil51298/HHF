import React from "react";
import { Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navigationbar from "../NavigationBar/Navigationbar";
import './myProfile.scss';

const MyProfile = () => {
  return (
    <div>
      <Navigationbar />
      <Container className="myProfile mt-5 mb-5 text-center">
        <div class="sidebar">
          <Link class="active" to="/">Profile</Link>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>

        <div class="content">
          <h2 className="text-success">Welcome to your profile</h2>
          <p>
            This example use media queries to transform the sidebar to a top
            navigation bar when the screen size is 700px or less.
          </p>
          <p>
            We have also added a media query for screens that are 400px or less,
            which will vertically stack and center the navigation links.
          </p>
          <h3>Resize the browser window to see the effect.</h3>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default MyProfile;
