import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Wrapper>
      <h1>About Us</h1>
      <p>
        We have a team of highly trained and experienced dentists <br /> who are
        dedicated to providing the best possible dental care <br /> to our
        patients.
      </p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
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

  @media only screen and (min-width: 800px) {
    padding: 5rem 3.5rem;
    h1 {
      font-size: 50px;
    }
    p {
      font-size: 22px;
    }
  }

  @media only screen and (min-width: 1020px) {
    padding: 5rem 4rem;
  }
  @media only screen and (min-width: 1300px) {
    padding: 5rem 5.5rem;
  }
`;

export default Header;
