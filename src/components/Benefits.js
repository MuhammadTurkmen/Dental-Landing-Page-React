import React from "react";
import styled from "styled-components";
import Ann from "../images/Ann-1.jpg";
import tooth from "../images/svg/icons8-tooth-50 1.png";

function Benefits() {
  return (
    <Wrapper>
      <p className="Benefits">Benefits</p>
      <div className="container">
        <div className="img-container">
          <img className="ann" src={Ann} alt="doctor" />
          <div className="teeth-container"></div>
        </div>
        <div className="text-container"></div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #395a44;
  color: #e5efe8;
  text-align: center;
  padding: 6rem 1.5rem;

  .ann,
  .teeth-container {
    display: none;
  }
  .Benefits {
    background-color: #f2e9b7;
    padding: 5px 10px;
    font-size: 10px;
    border-radius: 5px;
    display: inline-block;
    color: var(--dark-green, #395a44);
  }
`;

export default Benefits;
