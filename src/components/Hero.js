import React from "react";
import styled from "styled-components";

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
        </div>
        <div className="img-container"></div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: black;
`;

export default Hero;
