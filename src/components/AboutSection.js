import React from "react";
import styled from "styled-components";
import { useTheme } from "../context/themeContext";
import project_management from "../img/icons/2.svg";
import team_management from "../img/icons/1.svg";
import box from "../img/box.svg";
import agency1 from "../img/19.jpg";

function AboutSection() {
  const theme = useTheme();

  return (
    <AboutSectionStyled className="u-pad-lg-2" theme={theme} id="projekt">
      <div className="left-about">
        <h3 className="title">Po co Bóg stworzył świat?</h3>
        <p>
          „Jedyny i prawdziwy Bóg, w swojej dobroci i swoją wszechmocną potęgą,
          nie dla powiększenia lub osiągnięcia własnego szczęścia, ale dla
          objawienia swojej doskonałości przez dobra, jakich udziela
          stworzeniom, całkowicie wolną decyzją, od początku czasu, stworzył z
          nicości dwa rodzaje stworzeń: stworzenia duchowe i materialne” (KKK
          293).
        </p>
        <div className="about-info">
          <div className="about-info-item">
            <div className="icon">
              <img src={project_management} alt="..." />
            </div>
            <div className="text-con">
              <h5>Projekt Boga</h5>
              <p>
                „Świat to scena, na której ukazuje się Boża chwała” (Jan
                Kalwin).
              </p>
            </div>
          </div>
          <div className="about-info-item">
            <div className="icon">
              <img src={team_management} alt="..." />
            </div>
            <div className="text-con">
              <h5>Cel Boga</h5>
              <p>
                „Jedynym więc powodem, dla którego Bóg stwarza, jest Jego miłość
                i dobroć. „Kluczem miłości otworzył swoją dłoń, by dokonać
                dzieła stworzenia” (św. Tomasz z Akwinu).
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="right-about">
        <img src={agency1} alt="..." className={"about-img"} />
        <img src={box} alt="..." className={"box-img"} />
      </div>
    </AboutSectionStyled>
  );
}

const AboutSectionStyled = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  padding-top: 10rem !important;

  @media only screen and (max-width: 676px) {
    grid-template-columns: 1fr;
  }

  .left-about {
    p {
      padding: 1.5rem 0;
    }
    .title {
      font-size: 1.6rem;
    }
    .about-info {
      .about-info-item {
        display: grid;
        grid-template-columns: 120px auto;
        margin-bottom: 1.5rem;

        p {
          padding: 0.6rem 0;
        }
        h5 {
          font-size: 1.3rem;
        }
        .icon {
          background: ${(props) => props.theme.colorWhite};
          display: flex;
          align-items: center;
          justify-content: center;
          align-self: flex-start;
          margin-right: 1rem;
          padding: 1rem;
          border-radius: 7px;
        }
      }
    }
  }

  .right-about {
    position: relative;
    display: flex;
    justify-content: flex-end;

    @media only screen and (max-width: 676px) {
      justify-content: center;
    }

    .about-img {
      width: 90%;
      object-fit: cover;
      height: 500px;
      border-top-left-radius: 70px;
      border-bottom-right-radius: 70px;
      border-top-right-radius: 3px;
      border-bottom-left-radius: 3px;
      transition: all 0.4s ease-in-out;

      &:hover {
        transform: scale(1.05);
      }
    }
    .box-img {
      position: absolute;
      left: 3%;
      top: -8%;
      animation: scaleUp 8s infinite;

      @keyframes scaleUp {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.2);
        }
        100% {
          transform: scale(1);
        }
      }
    }
  }
`;

export default AboutSection;
