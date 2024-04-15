import React from "react";
import styled from "styled-components";

function BookAppointment() {
  return (
    <Wrapper>
      <p className="title">Specialist</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: var(--dark-green, #395a44);
  .title {
    background-color: #f2e9b7;
    padding: 5px 10px;
    font-size: 10px;
    border-radius: 5px;
    display: inline-block;
    color: var(--dark-green, #395a44);
  }
`;

export default BookAppointment;
