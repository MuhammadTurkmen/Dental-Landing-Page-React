import React from "react";
import styled from "styled-components";
import { specialists } from "../data";

function Specialist() {
  return (
    <Wrapper>
      <p className="title">Specialist</p>
      <div className="text-container">
        <h1>Meet Our Professinal Doctors</h1>
        <p>
          We have the professional doctors to handle any <br /> dental case, and
          make you smile agian
        </p>
      </div>
      <div className="img-container">
        {specialists.map(({ img, name }, index) => {
          return (
            <div key={index}>
              <img className="img" src={img} alt={name} />
              <p className="name">{name}</p>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: var(--lighter-green, #e5efe8);
  padding: 7rem 1.5rem;

  color: #395a44;

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
    margin-top: 3rem;

    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 14px;
    }
  }

  .img-container {
    margin-top: 5rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    div {
      width: 263px;
    }
  }
  .img {
    width: 100%;
    padding: 1rem;
    border: 1px solid black;
    box-sizing: border-box;
    border-radius: 10px;
  }

  @media only screen and (min-width: 800px) {
    padding: 6rem 3.5rem;
    .text-container {
      h1 {
        font-size: 50px;
        margin-bottom: 0;
      }
      p {
        font-size: 19px;
        margin-top: 0.5rem;
      }
    }
  }
  @media only screen and (min-width: 1020px) {
    padding: 6rem 4rem;
    .text-container {
      p {
        font-size: 25px;
      }
    }
  }
  @media only screen and (min-width: 1300px) {
    padding: 6rem 5.5rem;

    .img-container {
      gap: 4rem;
      div {
        width: 350px;
      }
    }
  }
`;

export default Specialist;
