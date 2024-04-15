import React from "react";
import styled from "styled-components";

function Testimonial() {
  return (
    <Wrapper>
      <p className="title">Specialist</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: var(--Light-green, #cfe3cc);
  padding: 5rem 1.5rem;

  .title {
    background-color: #f2e9b7;
    padding: 5px 10px;
    font-size: 10px;
    border-radius: 5px;
    display: inline-block;
    color: var(--dark-green, #395a44);
  }

  @media only screen and (min-width: 800px) {
    padding: 5rem 3.5rem;
  }
  @media only screen and (min-width: 1020px) {
    padding: 5rem 4rem;
  }
  @media only screen and (min-width: 1300px) {
    padding: 5rem 5.5rem;
  }
`;

export default Testimonial;
