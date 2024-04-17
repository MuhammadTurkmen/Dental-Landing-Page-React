import React from "react";
import styled from "styled-components";
import { all_services } from "../../data";
import { Link } from "react-router-dom";

function Services() {
  return (
    <Wrapper>
      <header>
        <h1>Services</h1>
        <p>
          We use the best quality materials on the mmarket <br /> in oerder to
          provide the best products to our patients.
        </p>
      </header>
      <main>
        <div className="main-container">
          {all_services.map(({ tooth, title, desc, id }) => {
            return (
              <div key={id} className="service">
                <img src={tooth} alt="tooth" />
                <h1>{title}</h1>
                <p>{desc}</p>
                <Link className="btn">Learn more</Link>
              </div>
            );
          })}
        </div>
      </main>
      <section>
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
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  header {
    background-color: #e5efe8;
    padding: 5rem 1.5rem;
    color: var(--dark-green, #395a44);
    h1 {
      margin: 0;
    }
    p {
      margin: 0;
      margin-top: 0.5rem;
    }
  }
  main {
    padding: 6rem 1.5rem;
    color: #395a44;

    h1 {
      font-size: 20px;
      text-transform: uppercase;
      margin-top: 5px;
    }
  }

  .main-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }

  .service {
    width: 330px;
    padding: 3rem 2rem;
    border-radius: 10px;
    background-color: #e5efe8;
    box-sizing: border-box;
  }

  .btn {
    text-decoration: none;
    padding: 1rem 1.8rem;
    text-transform: capitalize;
    border-radius: 10px;
    border: 1px solid #395a44;
    display: inline-block;
    margin-top: 2rem;
    color: #395a44;
    transition: all 0.3s ease-in-out;
  }
  .btn:hover {
    background-color: #395a44;
    box-shadow: 0px 11px 15px 0px rgba(57, 90, 68, 0.3);
    color: #e5efe8;
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

  @media only screen and (min-width: 800px) {
    header {
      padding: 5rem 3.5rem;
      h1 {
        font-size: 50px;
      }
      p {
        font-size: 22px;
      }
    }
    .second-container {
      padding: 5rem 3.5rem;
      h1 {
        font-size: 50px;
      }
    }
  }

  @media only screen and (min-width: 1020px) {
    header {
      padding: 5rem 4rem;
    }
    main {
      padding: 7rem 4rem;
    }
    .second-container {
      padding: 8rem 4rem;
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
    header {
      padding: 5rem 5.5rem;
    }
    main {
      padding: 7rem 5.5rem;
    }

    .second-container {
      padding: 8rem 5.5rem;
    }
  }
`;

export default Services;
