import React from "react";
import styled from "styled-components";
import { inputs } from "../data";
import { working_hours } from "../data";

function BookAppointment() {
  return (
    <Wrapper>
      <p className="title" id="book-appointment">
        belllllll
      </p>
      <div className="container">
        <div className="form-container">
          <h1>Book Appointment</h1>
          <p>
            make an appointment for dental <br /> consultation and treatment or
            call us <br /> on direct line +07052689437
          </p>
          <form>
            <div className="input-container">
              {inputs.map(({ id, name, type, label }) => {
                return (
                  <div key={id}>
                    <label htmlFor={id}>{label}</label>
                    <input type={type} id={id} required />
                  </div>
                );
              })}
            </div>
            <button className="submit" type="submit">
              Submit
            </button>
          </form>
        </div>
        <div className="hours-container">
          <p className="hours-title">Working Hours </p>
          <div className="working-container">
            {working_hours.map(({ day, hours }, index) => {
              return (
                <div className="working" key={index}>
                  <p>{day}</p>
                  <p>{hours}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: var(--dark-green, #395a44);
  color: var(--lighter-green, #e5efe8);

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

  form {
    text-align: center;
    margin: 0 auto;
    margin-top: 4rem;
  }

  .input-container {
    text-align: start;
    width: 330px;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 1rem;
    margin: 0 auto;
  }

  input {
    padding: 1rem;
    width: 300px;
    border-radius: 5px;
    border: none;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
  }

  .submit {
    background-color: #f2e9b7;
    display: inline-block;
    margin-top: 2rem;
    padding: 0.8rem 3rem;
    border-radius: 5px;
    border: none;
  }

  .hours-title {
    color: #f2e9b7;
    margin-top: 3rem;
    margin-bottom: 0;
  }

  .working {
    padding: 2rem 3rem;
    border-bottom: 1px solid #e5efe8;
    width: 200px;
    margin: 0 auto;
  }
  .working:nth-child(3) {
    border: none;
  }

  @media only screen and (min-width: 800px) {
    padding: 6rem 3.5rem;

    .form-container {
      text-align: left;
      h1 {
        font-size: 50px;
        margin-bottom: 0;
      }
      p {
        font-size: 19px;
      }
    }

    .input-container {
      width: unset;
      flex-direction: unset;
      flex-wrap: wrap;
      justify-content: center;
    }

    .submit {
      margin-top: 4rem;
    }

    .hours-title {
      margin-top: 5rem;
      margin-bottom: 0;
      font-size: 1.5rem;
    }

    .working-container {
      display: flex;
      margin-top: 3rem;
    }
    .working {
      border: none;
      border-right: 1px solid #e5efe8;
    }
  }
  @media only screen and (min-width: 1020px) {
    padding: 6rem 4rem;

    .container {
      display: flex;
      gap: 3rem;
      align-items: center;
    }

    .working-container {
      flex-direction: column;
    }

    .working {
      border: none;
      border-bottom: 1px solid #f2e9b7;
    }

    .input-container {
      justify-content: start;
    }
    form {
      text-align: start;
    }
  }
  @media only screen and (min-width: 1300px) {
    padding: 6rem 5.5rem;

    .container {
      gap: 8rem;
    }
  }
`;

export default BookAppointment;
