import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import { useTheme } from "../context/themeContext";
import agency3 from "../img/2.png";
import agency4 from "../img/4.png";
import { GiAllSeeingEye } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa";
import Modal from "./Portal/Modal";
import Modal1 from "./Portal/Modal";

function Header() {
  const theme = useTheme();

  const [navToggler, setNavToggler] = useState(false);
  const closeNavbar = () => setNavToggler(false);

  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);
  const Toggle = () => setModal(!modal);
  const Toggle1 = () => setModal1(!modal1);

  return (
    <HeaderStyled theme={theme}>
      <nav className="navigation navbar">
        <div className="logo">
          <h2>
            <GiAllSeeingEye />
          </h2>
        </div>
        <button
          type="button"
          className="navbar-open-btn"
          onClick={() => setNavToggler(!navToggler)}
        >
          <FaBars size={30} />
        </button>
        <div
          className={
            navToggler
              ? "navbar-collapse show-navbar-collapse"
              : "navbar-collapse"
          }
        >
          <button className="navbar-close-btn" onClick={closeNavbar}>
            <FaTimes size={30} />
          </button>
          <ul className="nav-items navbar-nav" onClick={closeNavbar}>
            <li className="nav-item">
              <a href="/" className="active-menu">
                Start
              </a>
            </li>
            <li className="nav-item">
              <a href="#projekt">Projekt</a>
            </li>
            <li className="nav-item">
              <a href="#dowody">Dowody</a>
            </li>
            <li className="nav-item">
              <a href="#absolut">Absolut</a>
            </li>
            <li className="nav-item">
              <a href="#natura-boga">Natura&nbsp;Boga</a>
            </li>
            <li className="nav-item">
              <a href="#oblicza-boga">Oblicza&nbsp;Boga</a>
            </li>
            <li className="nav-item">
              <a href="#kontakt">Kontakt</a>
            </li>
          </ul>
        </div>
        <div className="nav-btns-con">
          <a
            href="https://www.na6.pl/polski/motyw_boga_w_malarstwie"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              name={"Czytaj"}
              icon={"fas fa-chevron-right"}
              arrow={"arrow"}
              blob={"blob"}
              // onClick={() => Toggle()}
            />
          </a>
          {/* <Modal show={modal} close={Toggle} title="Poeta nieprzekupny">
            <p>
              Poeta i eseista, autor utworów dramatycznych i słuchowisk, pisarz
              o wielkim dorobku, wyjątkowym autorytecie artystycznym i moralnym,
              o biografii tragicznie uwikłanej w historię XX wieku.
            </p>
            <p>
              Jest laureatem wielu polskich i zagranicznych nagród literackich.
              Należy do najczęściej tłumaczonych polskich pisarzy. Jako poeta
              debiutował w 1950, jednak pierwszą książkę poetycką ("Struna
              światła") wydał dopiero w 1956 roku.
            </p>
            <br />
            <p>
              <em>culture.pl/pl/tworca/zbigniew-herbert</em>
            </p>
          </Modal> */}
        </div>
      </nav>
      <div className="header-content u-pad-lg">
        <div className="left-h-content">
          <h1>
            Świat <span>Boga</span> Stwórcy
          </h1>
          <div className="poet">
            <p>„Pan Bóg kiedy budował świat</p>
            <p>marszczył czoło</p>
            <p>obliczał obliczał obliczał</p>
            <p>dlatego świat jest doskonały</p>
            <p>i&nbsp;nie można w&nbsp;nim mieszkać“</p>
            <p>(Zbigniew Herbert).</p>
          </div>
          <a
            href="https://ewst.pl/2012/06/jaki-jest-bog-starego-testamentu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              name={"Więcej"}
              icon={"fas fa-chevron-right"}
              arrow={"arrow"}
              blob={"blob"}
              // onClick={() => Toggle1()}
            />
          </a>
          {/* <Modal1 show={modal1} close={Toggle1} title="Herbert wobec komunizmu">
            <p>
              Ze wzglę­du na kry­tycz­ny sto­su­nek do ko­mu­ni­zmu i władz PRL
              oraz sta­łe kon­tak­ty ze śro­do­wi­ska­mi emi­gra­cyj­ny­mi
              (m.in. Kulturą pa­ry­ską) w la­tach 1975- 1980 Her­bert był
              ob­ję­ty za­ka­zem dru­ku.
            </p>
            <p>
              W grud­niu 1975 roku zło­żył pod­pis pod Memoriałem 59
              sta­no­wią­cym pro­test wo­bec pla­no­wa­nym zmia­nom w
              Kon­sty­tu­cji PRL, m.in. wpro­wa­dze­niu za­pi­su o so­ju­szu z
              ZSRR. W la­tach 1975 - 1981 prze­by­wał za gra­ni­cą, po
              po­wro­cie do kra­ju zo­stał człon­kiem re­dak­cji uka­zu­ją­ce­go
              się poza kon­tro­lą cen­zu­ry "Za­pi­su".
            </p>
            <br />
            <p>
              <em>poezja.org/wz/Herbert_Zbigniew</em>
            </p>
          </Modal1> */}
        </div>
        <div className="right-h-content">
          <img className="h-img-3" src={agency4} alt="..." />
          <img className="h-img-2" src={agency3} alt="..." />
        </div>
      </div>
      <div className="mouse">
        <span></span>
      </div>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
  min-height: 100vh;
  position: relative;

  .navigation {
    display: grid;
    grid-template-columns: 100px 1fr auto;
    padding: 1rem 2rem;
    border-bottom: 1px solid ${(props) => props.theme.colorGrey9};
    animation: navHide 1s ease-in-out;

    @keyframes navHide {
      0% {
        transform: translateY(-100%) scaleY(0);
        opacity: 0;
      }
      100% {
        transform: translateY(0) scaleY(1);
        opacity: 1;
        visibility: visible;
      }
    }

    .logo {
      display: flex;
      align-items: center;
      animation: navHide 1s ease-in-out;
      animation-delay: 0.2s;
      visibility: hidden;
      animation-fill-mode: forwards;
    }
    .nav-items {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin-right: 4rem;
      animation: navHide 1s ease-in-out;
      animation-delay: 0.38s;
      visibility: hidden;
      animation-fill-mode: forwards;

      @media only screen and (max-width: 676px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: #000;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
      }
      .nav-item {
        margin: 0 0.7rem;

        @media only screen and (max-width: 676px) {
          margin-bottom: 3.5rem;
        }
        a {
          text-transform: uppercase;
          font-size: 1rem;
          padding: 0.8rem;
          position: relative;

          &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: ${(props) => props.theme.colorGradientPrimary2};
            border-radius: 30px;
            transform: scale(0);
            transition: all 0.4s ease-in-out;
            z-index: -1;
          }
          &:hover {
            &::before {
              transform: scale(1);
            }
          }
        }
      }
    }
  }
  .header-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 2rem;
    min-height: 100vh;

    .left-h-content {
      animation: contentHide 1s ease-in-out;
      @keyframes contentHide {
        0% {
          opacity: 0;
          transform: translateX(-120%) scaleX(0);
        }
        100% {
          opacity: 1;
          transform: translateX(0) scaleX(1);
        }
      }
      h1 {
        font-size: 4rem;
        font-weight: 800;
        span {
          background: ${(props) => props.theme.colorGradientPrimary2};
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }
      }
      .poet {
        margin: 1rem 0;
        margin-bottom: 2rem;

        p {
          font-size: 1.1rem;
          /* line-height: 0; */
          padding: 0.5rem 0;
        }
      }
    }
    .right-h-content {
      position: relative;
      transition: all 0.4s ease-in-out;
      animation: contentHide2 1s ease-in-out;
      animation-delay: 0.5s;
      opacity: 0;
      animation-fill-mode: forwards;

      @keyframes contentHide2 {
        0% {
          opacity: 0;
          transform: translateY(-120%) scale(0);
          visibility: none;
        }
        100% {
          opacity: 1;
          transform: translateY(0) scale(1);
          visibility: visible;
        }
      }
      &:hover {
        .h-img-2 {
          transform: scale(0.9);
        }
        .h-img-3 {
          transform: scale(1.1);
        }
      }
      .h-img-2 {
        position: absolute;
        width: 350px;
        height: 400px;
        object-fit: cover;
        left: 5%;
        top: -30%;
        border-bottom-right-radius: 5px;
        border-bottom-left-radius: 70px;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
        transition: all 0.4s ease-in-out;
      }
      .h-img-3 {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: contain;
        right: 0;
        bottom: -20%;
        border-bottom-right-radius: 70px;
        border-bottom-left-radius: 5px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        transition: all 0.4s ease-in-out;
      }
    }
  }
  .mouse {
    position: absolute;
    bottom: 3%;
    left: 50%;
    transform: translateX(-50%);
    width: 30px;
    height: 45px;
    border-radius: 30px;
    border: 2px solid ${(props) => props.theme.colorWhite};
    pointer-events: none;
    span {
      position: absolute;
      left: 50%;
      top: 50%;
      width: 6px;
      height: 6px;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      background: ${(props) => props.theme.colorGradientPrimary3};
      animation: upDown 1s infinite;
      @keyframes upDown {
        0% {
          transform: translateY(-13px) translateX(-50%) scale(1.3);
        }
        10% {
          transform: translateY(-13px) translateX(-50%) scale(1.3);
        }
        50% {
          transform: translateY(10px) translateX(-50%) scale(1);
        }
        100% {
          transform: translateY(-13px) translateX(-50%) scale(1);
        }
      }
    }
  }

  @media only screen and (max-width: 676px) {
    .header-content {
      /* grid-template-columns: 1fr; */
      display: flex;
      flex-direction: column;
    }
    .navigation {
      display: flex;
      justify-content: space-between;
    }

    .navbar-close-btn,
    .navbar-open-btn {
      width: fit-content;
      background: none;
      outline: none;
      color: #fff;
    }
    .nav-btns-con {
      display: none;
    }
    .left-h-content {
      h1 {
        font-size: 3rem !important;
      }
    }
    .right-h-content {
      width: fit-content;
      height: fit-content;

      .h-img-3 {
        position: relative !important;
      }
      .h-img-2 {
        top: -60px !important;
        left: 150px !important;
        width: 50% !important;
        height: 50% !important;
      }
    }
    .mouse {
      bottom: -10%;
    }
  }

  .navbar {
    padding: 3rem;
    width: 100%;
    /* position: fixed; */
  }
  .navbar-collapse {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    background: green;
    height: 100%;
    padding: 7rem 0 0 3rem;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
    transform: translateX(100%);
    transition: var(--transition);
    z-index: 999;
  }
  .show-navbar-collapse {
    transform: translateX(0);
  }
  .navbar-close-btn {
    position: absolute;
    right: 2rem;
    top: 2rem;
  }
  .nav-item {
    margin-bottom: 2rem;
  }
  .nav-link {
    position: relative;
  }
  .nav-link::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    height: 6px;
    width: 100%;
    background: rgba(255, 255, 255, 0.3);
    opacity: 0;
    transition: var(--transition);
  }
  .nav-link:hover::after {
    opacity: 1;
  }
  .brand-and-toggler .w {
    white-space: nowrap;
  }

  @media only screen and (min-width: 500px) {
    .navbar-collapse {
      width: 320px;
    }
  }

  @media only screen and (min-width: 992px) {
    .navbar-collapse {
      transform: translateX(0);
      position: relative;
      width: 100%;
      background: transparent;
      box-shadow: none;
      padding: 0;
      margin: 0;
    }
    .navbar-close-btn,
    .navbar-open-btn {
      display: none;
    }
    .navbar-nav {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
    .nav-item {
      margin: 0;
      margin-left: 3.6rem;
    }
    .nav-link {
      font-size: 1.8rem;
      font-weight: 500;
      transition: var(--transition);
    }
    .nav-link:hover {
      color: var(--brown-color);
    }
    .nav-link::after {
      display: none;
    }
  }
`;

export default Header;

// http://herbertiada.pl/chrystusa-potrzebowalem-zawsze-herbert-w-poszukiwaniu-boga
