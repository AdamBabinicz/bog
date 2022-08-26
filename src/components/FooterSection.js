import React from "react";
import styled from "styled-components";
import { useTheme } from "../context/themeContext";
import { GiAllSeeingEye } from "react-icons/gi";
import team1 from "../img/11.jpg";
import team2 from "../img/2.webp";
import css3 from "../img/20.jpg";
import agency4 from "../img/6.webp";
import figma from "../img/7.webp";
import fitness from "../img/22.jpg";

/*eslint-disable */

function FooterSection() {
  const theme = useTheme();
  return (
    <FooterSectionStyled className="u-pad-lg-2" theme={theme} id="kontakt">
      <div className="bottom-navigation">
        <ul className="logo-con">
          <div className="logo">
            <h2>
              <GiAllSeeingEye />
            </h2>
          </div>
          <p>
            Bóg widział kwiaty podobne do ptaków i ptaki jak ogromne kwiaty.
            Widział drzewa pnące się jak węże i węże podobne do drzew. Widział
            żyjątka morskie i owady jak drogocenne klejnoty. Wszystko było dobre
            w oczach Boga. Jednakowo dobre. I wielki słoń, i mały pajączek. I
            gwiazda, i człowiek. Wszystko było dobre – bo BYŁO, bo istniało.
          </p>
          <div className="b-nav-icons">
            <a
              href="//www.facebook.com/Wsp%C3%B3lnota-Odnowy-w-Duchu-%C5%9Awi%C4%99tym-Resurrexit-w-Radomiu-847816491908771"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-facebook"></i>
            </a>
            <a
              href="//www.instagram.com/grzegorzkramer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-instagram"></i>
            </a>
            <a
              href="//pl.pinterest.com/pin/597289969317058072"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-pinterest"></i>
            </a>
            <a
              href="//mobile.twitter.com/Pontifex_pl/status/1486677870902607875"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-twitter"></i>
            </a>
            <a
              href="//www.youtube.com/watch?v=teR07vOS2dQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-youtube"></i>
            </a>
          </div>
        </ul>
        <ul className="nav-b nav-contact">
          <h4>Kontakt</h4>
          <li className="nav-item">
            <div className="icon">
              <i className="fas fa-envelope"></i>
            </div>
            <div className="f-text">
              <h6>Email</h6>
              <span>puaro@vp.pl</span>
            </div>
          </li>
          {/* <li className="nav-item">
            <div className="icon">
              <i className="fas fa-phone-alt"></i>
            </div>
            <div className="f-text">
              <h6>Phone</h6>
              <span> +44 (0) 745-878-908</span>
            </div>
          </li> */}
          <li class="nav-item">
            <div className="icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="f-text">
              <h6>Lokalizacja</h6>
              <span>Radom, Polska</span>
            </div>
          </li>
        </ul>
        <ul className="nav-b company">
          <h4>Linki</h4>
          <li className="nav-item">
            <a
              href="//9lib.org/article/ujrze%C4%87-oblicze-boga-w-stron%C4%99-quaestio-christi.zgw9w4wn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Quaestio Dei
            </a>
          </li>
          <li className="nav-item">
            <a
              href="//ruj.uj.edu.pl/xmlui/handle/item/227364"
              target="_blank"
              rel="noopener noreferrer"
            >
              Oblicze Boga
            </a>
          </li>
          <li className="nav-item">
            <a
              href="//www.zyciezakonne.pl/dokumenty/kosciol/kongregacja-instytutow-zycia-konsekrowanego-i-stowarzyszen-zycia-apostolskiego/dekrety-instrukcje-wskazania/2019-08-15-watykan-sztuka-poszukiwania-oblicza-boga-wytyczne-dla-formacji-mniszek-kontemplacyjnych-106817"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sztuka poszukiwania oblicza Boga
            </a>
          </li>
          <li className="nav-item">
            <a
              href="//bazhum.muzhp.pl/media/files/Verbum_Vitae/Verbum_Vitae-r2009-t16/Verbum_Vitae-r2009-t16-s107-122/Verbum_Vitae-r2009-t16-s107-122.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Widzenie Boga
            </a>
          </li>
          <li className="nav-item">
            <a
              href="//zyciemasens.pl/kobiece-oblicze-boga"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kobiece oblicze Boga
            </a>
          </li>
          <li className="nav-item">
            <a
              href="//biblia.wiara.pl/doc/2411876.bog-ojciec-w-psalmach/2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bóg Ojciec w Psalmach
            </a>
          </li>
        </ul>
        <ul className="nav-b ig">
          <h4>ucieczka i twierdza, mój Bóg, któremu ufam</h4>
          <div className="ig-images">
            <img src={team1} alt="..." />
            <img src={team2} alt="..." />
            <img src={css3} alt="..." />
            <img src={agency4} alt="..." />
            <img src={figma} alt="..." />
            <img src={fitness} alt="..." />
          </div>
        </ul>
      </div>
      <div className="footer-copywrite">
        <p>
          2022 - {new Date().getFullYear()}.
          <span>
            &nbsp;
            <a
              href="https://a-g.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              a-g
            </a>
          </span>
        </p>
      </div>
    </FooterSectionStyled>
  );
}

const FooterSectionStyled = styled.footer`
  background-color: ${(props) => props.theme.colorBg3};
  padding-top: 6rem !important;
  color: ${(props) => props.theme.colorFont};
  padding-bottom: 3rem !important;
  h6 {
    font-size: 1.2rem;
  }
  h4 {
    font-size: 1.5rem;
    color: ${(props) => props.theme.colorGrey4};
    margin: 2rem 0;
  }
  a {
    color: ${(props) => props.theme.colorFont};
    transition: all 0.3s ease-in-out;
    &:hover {
      color: ${(props) => props.theme.colorPrimary};
      text-decoration: underline;
    }
  }
  i {
    font-size: 1.3rem;
    transition: all 0.3s ease-in-out;
    margin-right: 1rem;
    &:hover {
      color: ${(props) => props.theme.colorPrimary};
      cursor: pointer;
    }
  }
  h2 {
    color: ${(props) => props.theme.colorWhite};
    margin-bottom: 1rem;
  }
  .bottom-navigation {
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 3rem;
    h4 {
      padding-bottom: 1.5rem;
    }
    .nav-b {
      margin: 0 1.5rem;
      .nav-item {
        margin-bottom: 1rem;
      }
    }
    .nav-contact {
      .nav-item {
        display: grid;
        grid-template-columns: 30px auto;
      }
    }
    .logo-con {
      flex: 5;
    }
    .b-nav-icons {
      display: flex;
      margin-top: 2rem;
      /* .fa-facebook {
        margin-right: 0.3rem;
      } */
      i:not(:first-child) {
        margin: 0 0.5rem;
        cursor: pointer;
      }
    }
    .ig {
      .ig-images {
        display: grid;
        grid-template-columns: repeat(3, 90px);
        grid-template-rows: repeat(2, 90px);
        grid-gap: 0.5rem;
        img {
          width: 100%;
          object-fit: cover;
          height: 100%;
          cursor: pointer;
        }
      }
    }
  }
  .footer-copywrite {
    padding-top: 3rem;
    border-top: 1px solid ${(props) => props.theme.colorGrey9};
    text-align: center;
    span {
      color: ${(props) => props.theme.colorGrey4};
      cursor: pointer;
      transition: all 0.4s ease-in-out;
      &:hover {
        color: ${(props) => props.theme.colorPrimary};
      }
    }
  }

  @media only screen and (max-width: 676px) {
    .logo-con {
      .logo h2 {
        text-align: center;
      }
      .b-nav-icons {
        display: flex;
        justify-content: space-around;

        .fa-facebook {
          margin-right: 0;
        }
      }
    }

    .nav-b {
      width: 100%;
      h4 {
      margin: 1rem 0;
      text-align: center;
    }
  }
`;

export default FooterSection;
