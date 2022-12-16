import React from "react";
import Nav from "../Navigation/Nav";
import "./AboutUsStyle.css";

const AboutUs = () => {
  return (
    <>
      <Nav></Nav>
      <div className="about-us-content">
        <h1>Notes Application</h1>
        <h4>Made Using React and Access of localStorage</h4>
        <span> Save Notes | Edit Notes | Delete Notes </span>
      </div>
      <div class="about-us-container">
        <div class="box">
          <figure>
            <img
              src={require("./images/karan.jpg")}
              alt=""
              class="responsiveImage"
            />
            <div class="title">
              <h3>Karan Kataria</h3>
            </div>
            <figcaption>
              <h3>WBE DEVELOPER</h3>
            </figcaption>
          </figure>
        </div>
        <div class="box">
          <figure>
            <img
              src={require("./images/kinjal.jpg")}
              alt=""
              class="responsiveImage"
            />
            <div class="title">
              <h3>Kinjal Kaniyawala</h3>
            </div>
            <figcaption>
              <h3>WBE DEVELOPER</h3>
            </figcaption>
          </figure>
        </div>

        <div class="box">
          <figure>
            <img
              src={require("./images/shrey.jpg")}
              alt=""
              class="responsiveImage"
            />
            <div class="title">
              <h3>Shreyansh Chavda</h3>
            </div>
            <figcaption>
              <h3>WBE DEVELOPER</h3>
            </figcaption>
          </figure>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
