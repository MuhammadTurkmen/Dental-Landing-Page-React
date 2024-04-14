import React from "react";
import styled from "styled-components";
import Ann from "../images/Ann-1.jpg";
import { Teeth_pictuers } from "../data";
import { all_benefits } from "../data";

function Benefits() {
  return (
    <Wrapper>
      <p className="title">Benefits</p>
      <div className="container">
        <div className="img-container">
          <img className="ann" src={Ann} alt="doctor" />
          <div className="teeth-container">
            {Teeth_pictuers.map(({ id, tooth }) => {
              return <img src={tooth} key={id} alt="tooth" />;
            })}
          </div>
        </div>
        <div className="text-container">
          <h1>Opps</h1>
          <div className="benefits-container">
            {all_benefits.map(({ id, name, check }) => {
              return (
                <div className="check-container" key={id}>
                  <img src={check} alt="adding check" />
                  <p>{name}</p>
                </div>
              );
            })}
          </div>
          <button className="btn">Hello</button>
        </div>
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
  .title {
    background-color: #f2e9b7;
    padding: 5px 10px;
    font-size: 10px;
    border-radius: 5px;
    display: inline-block;
    color: var(--dark-green, #395a44);
  }

  .text-container h1 {
    margin-top: 5rem;
    margin-bottom: 2rem;
  }

  .check-container {
    display: flex;
    gap: 1rem;
    align-items: center;
    margin: 0 auto;
    width: 300px;
  }

  .btn {
    padding: 1rem 4rem;
    background-color: #f2e9b7;
    border-radius: 10px;
    border: none;
    margin-top: 3rem;
    transition: all 0.3s ease-in-out;
  }
  .btn:hover {
    transform: scale(1.3);
  }

  @media only screen and (min-width: 800px) {
    .text-container h1 {
      font-size: 50px;
      margin-bottom: 3rem;
    }
  }
  @media only screen and (min-width: 1020px) {
    .text-container h1 {
      font-size: 50px;
      margin-top: 0;
      margin-bottom: 3rem;
    }

    .text-container {
      text-align: start;
    }

    .ann {
      display: block;
      width: 450px;
      height: 550px;
      border-radius: 10px;
      object-fit: cover;
    }
    .container {
      margin-top: 10rem;
      display: flex;
      justify-content: center;
      align-items: start;
      gap: 5rem;
    }
  }
`;

export default Benefits;
