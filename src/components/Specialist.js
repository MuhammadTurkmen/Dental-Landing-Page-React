import React from "react";
import styled from "styled-components";

function Specialist() {
  return (
    <Wrapper>
      <p className="title">Specialist</p>
      <div className="text-container">
        <h1>Meet Our Professinal Doctors</h1>
        <p>
          We have the professional doctors to handle any dental case, and make
          you smile agian
        </p>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: var(--lighter-green, #e5efe8);
  padding: 6rem 1.5rem;

  text-align: center;
  .title {
    background-color: #f2e9b7;
    padding: 5px 10px;
    font-size: 10px;
    border-radius: 5px;
    display: inline-block;
    color: var(--dark-green, #395a44);
  }

  .text-container {
    text-align: start;
    color: #395a44;
    margin-top: 3rem;

    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 14px;
    }
  }
`;

export default Specialist;
