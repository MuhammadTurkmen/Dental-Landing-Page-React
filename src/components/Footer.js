import React from "react";
import styled from "styled-components";
import Logo from "../images/svg/logo-light.svg";
import { GoArrowRight } from "react-icons/go";

function Footer() {
  return (
    <Wrapper>
      <div className="container">
        <div className="logo-container">
          <div className="logo-div">
            <img src={Logo} alt="logo" />
            <h1>Dento</h1>
          </div>
          <p className="logo-desc">
            Dento Best dental
            <br /> clinic services{" "}
          </p>
        </div>
        <div className="info-container">
          <div className="company">
            <h1>Company</h1>
            <span>Products</span>
            <span>Blog</span>
            <span>Support</span>
          </div>
          <div className="menu">
            <h1>Menu</h1>
            <span>Home</span>
            <span>About</span>
            <span>Services</span>
          </div>
          <div className="contact-us">
            <h1>Contact Us</h1>
            <span>080-3569077856</span>
            <span>info@dentoclinic.com</span>
            <span>Oba Elewu Way Lagos Nigeria </span>
          </div>
          <div className="stay-update">
            <h1>Stay Update</h1>
            <span>Subscribe to news letter</span>
            <form>
              <input type="text" placeholder="Email" />
              <GoArrowRight className="arrow" />
            </form>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: var(--dark-green, #395a44);
  padding: 5rem 1.5rem;

  .logo-div {
    display: flex;
    align-items: center;
    gap: 1rem;
    h1 {
      color: #cfe3cc;
    }
  }
  .logo-desc {
    margin-top: 0;
    color: #cfe3cc;
  }

  .menu,
  .company,
  .contact-us,
  .stay-update {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .info-container {
    margin-top: 5rem;
    display: flex;
    gap: 3rem 2rem;
    flex-wrap: wrap;
    color: #cfe3cc;
    h1 {
      margin: 0;
      font-size: 20px;
    }
  }

  form {
    display: flex;
    align-items: center;
    gap: 0;
    input {
      height: 35px;
      width: 300px;
      border: none;
      box-sizing: border-box;
      padding: 0 1rem;
    }
  }

  .arrow {
    height: 35px;
    width: 30px;
    background-color: #fff;
    padding-right: 0.5rem;
  }

  @media only screen and (min-width: 800px) {
    padding: 5rem 3.5rem;

    .info-container {
      justify-content: center;
    }
  }
  @media only screen and (min-width: 1020px) {
    padding: 5rem 4rem;
    .info-container {
      justify-content: space-between;
    }
  }
  @media only screen and (min-width: 1300px) {
    padding: 5rem 5.5rem;
    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .info-container {
      justify-content: left;
      margin-top: 0;
    }
  }
`;

export default Footer;
