import React, { useState } from "react";
import styled from "styled-components";
import { FaChevronUp } from "react-icons/fa";
function Scroll() {
  const [visible, setVisible] = useState(false);
  window.addEventListener("scroll", () => {
    window.pageYOffset > 100 ? setVisible(true) : setVisible(false);
  });

  return (
    <Div>
      <a href="#" className={`${visible ? "block" : "none"}`}>
        <FaChevronUp />
      </a>
    </Div>
  );
}

const Div = styled.div`
  max-width: 100vw;
  .none {
    opacity: 0;
    visibility: hidden;
  }
  a {
    position: fixed;
    bottom: 40px;
    right: 40px;
    background: #ca5309;
    width: 4rem;
    height: 4rem;
    padding: 0.3rem;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.4s ease-in-out;
    z-index: 2500;
    transition: 0.5s;
    overflow: hidden;

    svg {
      color: #fff;
      border-radius: 50%;
      transition: 0.5s;
    }

    :hover svg {
      background: #fff;
      border: 1px solid #ca5309;
      max-width: 4rem;
      max-height: 4rem;
      border-radius: 50%;
      height: 100%;
      width: 100%;
      color: #ca5309;
    }

    /* svg:hover {
      color: red;
    } */
    @media screen and (min-width: 280px) and (max-width: 1080px) {
      left: 82vw;
      right: initial;
      max-width: 3.5rem;
      max-height: 3.5rem;
    }
  }
`;

export default Scroll;
