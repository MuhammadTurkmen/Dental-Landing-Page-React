import React from "react";
import styled from "styled-components";
import { client_response } from "../data";

function Testimonial() {
  return (
    <Wrapper>
      <p className="title">Specialist</p>
      <h1>What Our Client Say </h1>
      <div className="container">
        {client_response.map(({ desc, pic, name, job, Stars }, index) => {
          return (
            <div className="card" key={index}>
              {Stars.map((star, index) => {
                return <img src={star} alt="" key={index} />;
              })}
              <p>{desc}</p>
              <div className="img-container">
                <img src={pic} alt="picture" />
                <div>
                  <p>{name}</p>
                  <p>{job}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: var(--Light-green, #cfe3cc);
  color: var(--dark-green, #395a44);
  text-align: center;
  padding: 5rem 1.5rem;

  h1 {
    margin-top: 3rem;
  }

  .title {
    background-color: #f2e9b7;
    padding: 5px 10px;
    font-size: 10px;
    border-radius: 5px;
    display: inline-block;
    color: var(--dark-green, #395a44);
  }

  .container {
    margin-top: 4rem;
    display: flex;
    flex-wrap: wrap;
    text-align: start;
    gap: 2rem;
  }

  .card {
    width: 300px;
    padding: 4rem 2rem;
    box-sizing: border-box;
    border-radius: 15px;
    background-color: #fff;
    color: var(--Grey, #6d7d8b);
    margin: 0 auto;
    box-shadow: 0px 11px 15px 0px rgba(57, 90, 68, 0.3);
    p {
      font-size: 14px;
    }
    transition: all 0.3s ease-in-out;
  }

  .card:hover {
    transform: scale(1.1);
  }

  .card > img {
    width: 20px;
  }

  .img-container {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    img {
      width: 45px;
    }

    p {
      margin: 0;
      font-weight: bold;
      font-size: 14px;
    }
    p:nth-child(2) {
      font-weight: normal;
      font-size: 12px;
    }
  }

  @media only screen and (min-width: 800px) {
    padding: 5rem 3.5rem;

    h1 {
      font-size: 50px;
    }
  }
  @media only screen and (min-width: 1020px) {
    padding: 5rem 4rem;
  }
  @media only screen and (min-width: 1300px) {
    padding: 5rem 5.5rem;
  }
`;

export default Testimonial;
