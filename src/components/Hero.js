import React from "react";
import styled from "styled-components";
import { smile_pics } from "../data";
import women from "../images/women.png";
import card from "../images/svg/Group 6.svg";

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
          <button className="dark btn">OK</button>
          <button className="light btn">Not Now</button>
          <div className="smile-container">
            <div>
              {smile_pics.map(({ smile, id }) => {
                return (
                  <img className="smile" key={id} src={smile} alt="smile" />
                );
              })}
            </div>
            <p>smile</p>
          </div>
        </div>
        <div className="img-container">
          <img className="main-img" src={women} alt="" />
          <div className="Care-container">
            <img src={card} alt="card" />
            <p>Dental Care Clinic</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #e5efe8;
  padding: 2rem 1.5rem;

  .title {
    font-size: 30px;
    color: var(--dark-green, #395a44);
  }
  .desc {
    margin-bottom: 3rem;
    font-size: 14px;
    color: #395a44;
  }

  .main-img,
  .Care-container {
    display: none;
  }
  .btn {
    padding: 0.8rem 3rem;
    border-radius: 8px;
    border: 1px solid #395a44;
    transition: all 0.3s ease-in-out;
    margin-bottom: 3rem;
  }
  .btn:hover {
    transform: scale(1.1);
    background-color: #395a44;
    color: #e5efe8;
  }

  .dark {
    margin-right: 1rem;
    background-color: #395a44;
    color: #fff;
    padding: 0.8rem 3.5rem;
  }

  .light {
    background-color: #e5efe8;
  }

  .smile {
    margin-left: -1.5rem;
  }
  .smile-container {
    margin-left: 1.5rem;
    display: flex;
    gap: 2.5rem;
    align-items: center;
  }

  @media only screen and (min-width: 800px) {
    padding: 1rem 3.5rem;

    .title {
      font-size: 55px;
    }
    .desc {
      font-size: 19px;
      line-height: 28px;
    }
  }

  @media only screen and (min-width: 1020px) {
    padding: 0 4rem;

    .container {
      display: flex;
      gap: 1rem;
      align-items: center;
    }
    .text-container {
      flex: 1;
    }
    .title {
      font-size: 55px;
    }
    .desc {
      font-size: 19px;
      line-height: 28px;
    }

    .main-img {
      display: block;
      width: 450px;
      height: 500px;
      object-fit: cover;
      aspect-ratio: 1/2;
      flex: 1;
      border-radius: 10px;
      border: 2px solid #395a44;
    }
    .Care-container {
      display: flex;
      position: absolute;
      background: var(--Yellow, #f2e9b7);
      width: 100px;
      height: 100px;
      border-radius: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      right: 0;
      top: 0;
      img {
        width: 30px;
      }
      p {
        font-size: 10px;
      }
    }
    .img-container {
      position: relative;
    }
  }
  @media only screen and (min-width: 1300px) {
    padding: 1rem 5.5rem;
    .container {
      gap: 3rem;
    }
    .main-img {
      width: 700px;
      height: 600px;
    }
  }
`;

export default Hero;
