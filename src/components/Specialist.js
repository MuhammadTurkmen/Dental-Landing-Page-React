import React from "react";
import styled from "styled-components";

function Specialist() {
  return (
    <Wrapper>
      <div className="text-container">
        <h1>Meet Our Professinal Doctors</h1>
        <p>
          We have the professional doctors to handle any dental case, and make
          you smile agian
        </p>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: var(--lighter-green, #e5efe8);
`;

export default Specialist;
