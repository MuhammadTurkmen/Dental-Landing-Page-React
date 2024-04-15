import React from "react";
import styled from "styled-components";

function BookAppointment() {
  return (
    <Wrapper>
      <p className="title">Specialist</p>
      <div className="container">
        <div className="form-container">
          <h1>Book Appointment</h1>
          <p>
            make an appointment for dental consultation and treatment or call us
            on direct line +07052689437
          </p>
          <form>
            <div className="input-container">
              <div>
                <label htmlFor="name">Full Name</label>
                <input type="text" name="" id="name" />
              </div>

              <label htmlFor="number">Phone number</label>
              <input type="number" name="" id="number" />

              <label htmlFor="date">Date</label>
              <input type="date" name="" id="date" />

              <label htmlFor="time">Time</label>
              <input type="time" name="" id="time" />
            </div>
          </form>
        </div>
        <div className="hours-container"></div>
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
    text-align: start;
    margin: 0 auto;
    margin-top: 4rem;
  }

  .input-container {
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
  }

  @media only screen and (min-width: 800px) {
    padding: 6rem 3.5rem;
  }
  @media only screen and (min-width: 1020px) {
    padding: 6rem 4rem;
  }
  @media only screen and (min-width: 1300px) {
    padding: 6rem 5.5rem;
  }
`;

export default BookAppointment;
