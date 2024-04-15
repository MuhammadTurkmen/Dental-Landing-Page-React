import React from "react";
import styled from "styled-components";

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
      <main></main>
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
  }

  @media only screen and (min-width: 1020px) {
    header,
    main {
      padding: 5rem 4rem;
    }
  }
  @media only screen and (min-width: 1300px) {
    header,
    main {
      padding: 5rem 5.5rem;
    }
  }
`;

export default Services;
