import React from "react";
import styled from "styled-components";

function Footer() {
  return <div>Footer page</div>;
}

const Wrapper = styled.div`
  background: var(--dark-green, #395a44);

  @media only screen and (min-width: 800px) {
    padding: 5rem 3.5rem;
  }
  @media only screen and (min-width: 1020px) {
    padding: 5rem 4rem;
  }
  @media only screen and (min-width: 1300px) {
    padding: 5rem 5.5rem;
  }
`;

export default Footer;
