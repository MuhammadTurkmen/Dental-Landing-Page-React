import React, { useState } from "react";
import styled from "styled-components";
import logo from "../images/svg/Star.svg";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { links } from "../data";

function Navbar() {
  const [isSidbarOpen, setIsSidbarOpen] = useState(false);

  return (
    <Wrapper>
      <div className="container">
        <img className="logo" src={logo} alt="" />
        <div
          className={isSidbarOpen ? "links-container show" : "links-container"}>
          <IoClose
            className="close-icon"
            onClick={() => setIsSidbarOpen(false)}
          />
          {links.map(({ name, path, id }) => {
            return (
              <Link
                className={name === "Kontakt oss" ? "contact-us" : ""}
                key={id}
                to={path}
                onClick={() => setIsSidbarOpen(false)}>
                {name}
              </Link>
            );
          })}
        </div>
        <div className="btn-sidbar-container">
          <Link className="contact-us hide" to="#footer">
            Kontakt oss
          </Link>
          <FaBars className="bars" onClick={() => setIsSidbarOpen(true)} />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #e5efe8;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1.4rem;
    padding-left: 0;
  }
  .logo {
    margin-left: 1.4rem;
  }
  .links-container {
    display: none;
    position: absolute;
    background-color: var(--dark-green, #395a44);
    width: 100%;
    top: 0;
    bottom: 0;
    flex-direction: column;
    justify-content: center;
    gap: 50px;
    align-items: center;

    a {
      color: #e5efe8;
      text-decoration: none;
      font-size: 25px;
      font-weight: bold;
      transition: all 0.3s ease-in-out;
    }
    a:hover {
      text-decoration: underline;
      transform: scale(1.3);
    }
    a.contact-us {
      text-decoration: none;
    }
  }
  .show {
    display: flex;
  }

  .bars {
    font-size: 30px;
    color: #395a44;
    transition: all 0.3s ease-in-out;
  }
  .bars:hover {
    transform: scale(1.3);
  }

  .hide {
    display: none;
  }

  .close-icon {
    color: #fff;
    font-size: 40px;
    transition: all 0.3s ease-in-out;
  }

  .close-icon:hover {
    transform: scale(1.5);
  }

  a.contact-us {
    background: #e5efe8;
    color: #395a44;
    text-decoration: none;
    padding: 0.8rem 2rem;
    border-radius: 10px;
  }

  @media only screen and (min-width: 800px) {
    .container {
      padding: 1.5rem 3.5rem;
    }
    .logo {
      margin-left: 0;
    }

    .links-container {
      position: static;
      width: unset;
      display: flex;
      flex-direction: row;
      flex: 1;
      justify-content: end;
      margin-right: 2rem;
      background-color: unset;

      a {
        font-size: 20px;
        color: #395a44;
        font-size: 16px;
      }

      a.contact-us {
        display: none;
      }
      .close-icon {
        display: none;
      }
    }
    .bars {
      display: none;
    }
    a.contact-us {
      display: block;
      color: #e5efe8;
      background-color: #395a44;
      transition: all 0.3s ease-in-out;
    }
    a.contact-us:hover {
      transform: scale(1.2);
    }
  }
  @media only screen and (min-width: 1020px) {
    .container {
      padding: 2rem 4rem;
    }
  }

  @media only screen and (min-width: 1300px) {
    .container {
      padding: 2rem 5.5rem;
    }
  }
`;

export default Navbar;
