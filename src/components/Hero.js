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
    color: var(--dark-green, #395a44);
  }
  .desc {
    margin-bottom: 3rem;
    font-size: 14px;
    color: #395a44;
  }

  .main-img {
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
  }

  .dark {
    margin-right: 1rem;
    background-color: #395a44;
    color: #fff;
    padding: 0.8rem 3.5rem;
  }
  .smile {
    margin-left: -1.5rem;
  }
`;

export default Hero;
