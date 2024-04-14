import React from "react";
import styled from "styled-components";

function Hero() {
  return (
    <Wrapper>
      <div className="container">
        <div className="text-container"></div>
        <div className="img-container"></div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: black;
`;

export default Hero;
