import React from "react";
import styled from "styled-components";
import { useTheme } from "../context/themeContext";
import agency2 from "../img/5.png";
import Button from "./Button";

function RecommendationsSection() {
  const theme = useTheme();
  return (
    <RecommendationsSectionStyled
      theme={theme}
      className="u-pad-lg"
      id="absolut"
    >
      <div className="left-rec">
        <img src={agency2} alt="..." />
      </div>
      <div className="right-rec">
        <div className="rec-content">
          <h3 className="title">
            Absolut -<br /> "bezwarunkowy"
          </h3>
          <p>
            Osobowy lub bezosobowy pierwotny byt, doskonały, najwyższy, pełny,
            całkowicie niezależny, nieuwarunkowany i niczym nieograniczony.
            Występuje w wielu filozofiach idealistycznych. Absolut może być
            traktowany jako filozoficzny odpowiednik pojęcia boga, pozbawionego
            jednak przymiotów osobowych, choć w niektórych systemach pojęcia
            boga i absolutu są właściwie równoważne. Jako termin filozoficzny,
            absolut został wprowadzony przez <b>Schellinga</b> i <b>Hegla</b>,
            choć doszukiwać się można go również w systemach wcześniejszych,
            zwłaszcza w panteizmie <b>Spinozy</b> i oświeceniowym deizmie.
          </p>
          <a
            href="https://encenc.pl/absolut"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              name={"Czytaj"}
              icon={"fas fa-chevron-right"}
              arrow={"arrow"}
              blob={"blob"}
            />
          </a>
        </div>
      </div>
    </RecommendationsSectionStyled>
  );
}

const RecommendationsSectionStyled = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  background: ${(props) => props.theme.colorBg3};
  margin-bottom: 6rem;
  box-shadow: 0 5px 18px #212529b7;

  @media only screen and (max-width: 676px) {
    display: flex;
    flex-direction: column;
  }

  .left-rec {
    overflow: hidden;
    border-top-left-radius: 5px;

    img {
      border-top-left-radius: 5px;
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: grayscale(100%);
      transition: all 0.4s ease-in-out;

      &:hover {
        filter: grayscale(0);
        transform: scale(1.2) rotate(-5deg);
      }
    }
  }

  .right-rec {
    display: flex;
    align-items: center;

    .rec-content {
      padding: 1rem;

      h3 {
        font-size: 2.5rem;
        padding-bottom: 1rem;
        margin-bottom: 2rem;
        position: relative;

        &::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 20%;
          height: 2px;
          background: ${(props) => props.theme.colorAccent};
        }
      }

      p {
        color: ${(props) => props.theme.colorGrey4};
        padding-bottom: 2rem;
      }
    }
  }

  @media only screen and (max-width: 676px) {
    .left-rec {
      display: flex;
      justify-content: center;
    }
    .right-rec {
      display: flex;
      justify-content: center;

      .rec-content h3 {
        font-size: 2rem;
      }
    }
  }
`;

export default RecommendationsSection;
