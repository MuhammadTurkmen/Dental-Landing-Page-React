import React from "react";
import styled from "styled-components";
import { cards } from "../data";

function Services() {
  return (
    <Wrapper>
      <p className="title">Services</p>
      <div className="text-container">
        <div className="clinic-services">
          <h1 className="services-title">Clinic Services</h1>
          <p className="desc">
            we use the best quality materials on the market in order to
            <br /> provide the best products to our patients
          </p>
        </div>
        <a href="/#">More Services</a>
      </div>
      <div className="card-container">
        {cards.map(({ tooth, name, desc }, index) => {
          return (
            <div key={index} className="card">
              <img src={tooth} alt={name} />
              <h3>{name}</h3>
              <p>{desc}</p>
              <button className="btn">Learn More</button>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: var(--lighter-green, #e5efe8);
  text-align: center;
  padding: 6rem 1.5rem;

  .title {
    background-color: #f2e9b7;
    padding: 5px 10px;
    font-size: 10px;
    border-radius: 5px;
    display: inline-block;
    color: var(--dark-green, #395a44);
  }

  .text-container {
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    text-align: start;
    justify-content: space-between;
    color: #395a44;
    gap: 2rem;

    a {
      text-decoration: none;
      color: #395a44;
      align-self: flex-start;
    }
    a:hover {
      text-decoration: underline;
      font-weight: bold;
    }
  }
  .services-title {
    font-size: 2rem;
  }
  .desc {
    font-size: 14px;
  }

  .card-container {
    margin-top: 3rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 3rem;
  }

  .card {
    border-radius: 1rem;
    width: 350px;
    margin: 0 auto;
    padding: 3rem;
    box-sizing: border-box;
    text-align: start;
    border: 1px solid #395a44;
    transition: all 0.3s ease-in-out;
  }
  .card:hover {
    box-shadow: 0px 11px 15px 0px rgba(57, 90, 68, 0.3);
    transform: scale(1.1);
  }

  .btn {
    margin-top: 3rem;
    padding: 0.8rem 2rem;
    border-radius: 5px;
    border: none;
    color: var(--dark-green, #395a44);
    background-color: #e5efe8;
    border: 1px solid #395a44;
    transition: all 0.3s ease-in-out;
  }

  .btn:hover {
    background-color: #395a44;
    color: #e5efe8;
  }

  @media only screen and (min-width: 800px) {
    padding: 6rem 3.5rem;
    .services-title {
      font-size: 50px;
      margin: 0;
    }

    .text-container {
      a {
        font-size: 20px;
      }
    }

    .card-container {
      justify-content: center;
      gap: 2rem 1rem;
    }
    .desc {
      font-size: 19px;
    }
  }

  @media only screen and (min-width: 1020px) {
    padding: 6rem 4rem;
    .text-container {
      flex-direction: row;
      align-items: center;
      a {
        align-self: center;
      }
    }
  }
  @media only screen and (min-width: 1300px) {
    padding: 6rem 5.5rem;
  }
`;

export default Services;
