import React from "react";
import styled from "styled-components";
import Ann from "../../images/Ann-1.jpg";
import { all_benefits, about_us_desc } from "../../data";
import card from "../../images/svg/logo-green.svg";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <Wrapper>
      <div className="first-container">
        <p className="title">Know More About Us </p>
        <div className="container">
          <div className="img-container">
            <img className="ann" src={Ann} alt="doctor" />
            <div className="Care-container">
              <img src={card} alt="card" />
              <p>Dental Care Clinic</p>
            </div>
          </div>
          <div className="text-container">
            <h1>About Us</h1>
            <div className="benefits-container">
              {about_us_desc.map(({ id, desc }) => {
                return (
                  <div className="check-container" key={id}>
                    <p>{desc}</p>
                  </div>
                );
              })}
            </div>
            <button className="btn">Hello</button>
          </div>
        </div>
      </div>
      <div className="second-container">
        <div className="book-appointment">
          <h1>
            Need to see a Dentist? <br /> Book an appointment with us
          </h1>
          <Link to="/#book-appointment" className="book-btn">
            Book Appointment
          </Link>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .first-container {
    background-color: #395a44;
    color: #e5efe8;
    text-align: center;
    padding: 6rem 1.5rem;
  }

  .second-container {
    padding: 6rem 1.5rem;
    background-color: #f2e9b7;

    h1 {
      font-size: 2rem;
    }
  }

  .book-btn {
    background-color: #395a44;
    color: #e5efe8;
    text-decoration: none;
    padding: 1rem 2rem;
    display: inline-block;
    border-radius: 0.5rem;
    margin-top: 1rem;
    transition: all 0.3s ease-in-out;
    font-size: 1rem;
  }
  .book-btn:hover {
    transform: scale(1.2);
  }

  .Care-container {
    display: none;
  }

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
    .second-container {
      padding: 5rem 3.5rem;
      h1 {
        font-size: 50px;
      }
    }
  }
  @media only screen and (min-width: 1020px) {
    .img-container {
      position: relative;
    }
    .Care-container {
      display: flex;
      color: #395a44;
      position: absolute;
      background: var(--Yellow, #f2e9b7);
      width: 100px;
      height: 100px;
      border-radius: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      bottom: 20rem;
      left: -50px;
      img {
        width: 30px;
      }
      p {
        font-size: 10px;
      }
    }

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
      height: 580px;
      border-radius: 10px;
      object-fit: cover;
    }
    .container {
      margin-top: 10rem;
      display: flex;
      justify-content: center;
      align-items: start;
      gap: 3rem;
    }

    .check-container {
      width: 400px;
    }

    .second-container {
      padding: 5rem 4rem;
      h1 {
        flex: 1;
        margin: 0;
      }
    }
    .book-appointment {
      display: flex;
      align-items: start;
      gap: 1rem;
    }
  }

  @media only screen and (min-width: 1300px) {
    .ann {
      width: 560px;
      height: 650px;
    }

    .container {
      gap: 5rem;
    }

    .img-container {
      position: relative;
    }

    .teeth-container {
      background-color: #f2e9b7;
      position: absolute;
      width: 400px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      padding: 1rem 0;
      border-radius: 30px;
      bottom: 12rem;
      left: -6rem;

      img {
        width: 50px;
      }
    }

    .check-container {
      width: 310px;
    }

    .second-container {
      padding: 5rem 5.5rem;
    }
  }
`;

export default AboutUs;
