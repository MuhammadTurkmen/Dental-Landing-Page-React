import React from "react";
import styled from "styled-components";
import { smile_pics } from "../data";
import women from "../images/women.png";

function Hero() {
  return (
    <Wrapper>
      <div className="container">
        <div className="text-container">
          <h1 className="title">
            Creating a Beautiful Smile For a Dental Health{" "}
          </h1>
          <p className="desc">
            We will give you the best smile you deserve with complete and modern
            facilities services only at our dental clinic.
          </p>
          <button className="dark-btn">OK</button>
          <button className="light-btn">Not Now</button>
          <div className="smile-container">
            {smile_pics.map(({ smile, id }) => {
              return <img key={id} src={smile} alt="smile" />;
            })}
          </div>
        </div>
        <div className="img-container">
          <img className="main-img" src={women} alt="" />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: unset;
  padding: 2rem 3rem;

  .title {
    font-size: 30px;
  }

  .main-img {
    display: none;
  }
`;

export default Hero;
