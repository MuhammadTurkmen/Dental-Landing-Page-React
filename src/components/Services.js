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
            we use the best quality materials on the market in order to provide
            the best products to our patients
          </p>
        </div>
        <a href="#">More Services</a>
      </div>
      <div className="card-container">
        {cards.map(({ tooth, name, desc }, index) => {
          return (
            <div key={index} className="card">
              <img src={tooth} alt={name} />
              <h3>{name}</h3>
              <p>{desc}</p>
            </div>
          );
        })}

        <div className="card"></div>
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
    display: flex;
    flex-wrap: wrap;
  }
`;

export default Services;
