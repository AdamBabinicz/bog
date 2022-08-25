import React, { useState } from "react";
import styled from "styled-components";
import { useTheme } from "../context/themeContext";
import Title from "../components/Title";
import latest from "../img/3.png";
import Button from "../components/Button";
import Modal from "../components/Portal/Modal";

function LatestSection() {
  const theme = useTheme();

  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  return (
    <LatestSectionStyled theme={theme} className="u-pad-lg-2" id="natura-boga">
      <div className="title-con">
        <Title
          name={"Natura Boga"}
          subtext="nie ma bodaj tezy równie często i powszechnie głoszonej przez filozofów, jak ta, która głosi, że istnieje jakiś Bóg – w języku filozoficznym tak zwany absolut. Znakomita większość myślicieli spierała się nie o Jego istnienie, ale o to, jaki On jest, o Jego istotę."
        />
        <em>dominikanin Józef Maria Bocheński</em>
      </div>
      <div className="latest-container">
        <div className="latest-content">
          <img src={latest} alt="..." />
          <div className="latest-text">
            <h4 className="title">Być i dlaczego?</h4>
            <h6>
              Jacek Wojtysiak - <em>profesor filozofii</em>
            </h6>
            <p>
              Religia wyrasta z poczucia zależności od jakiejś siły wyższej.
              Znamienne przy tym, że w dziejach ludzkości najbardziej trwałe i
              wpływowe okazały się religie, które identyfikują ową siłę z
              transcendentnym, osobowym i dobrym Bogiem. Transcendentnym – gdyż
              w świecie nie ma nic absolutnego. Osobowym – gdyż świat
              zawierający porządek i osoby trudno pojąć jako dzieło bezosobowej
              mocy. Dobrym – gdyż od Boga pochodzi najbardziej fundamentalne
              dobro, jakim jest istnienie.
            </p>
            <a
              href="https://opusdei.org/pl-pl/article/temat-4-natura-boga-i-jego-dziaanie"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                name={"Więcej"}
                icon={"fas fa-chevron-right"}
                arrow={"arrow"}
                blob={"blob"}
                // onClick={() => Toggle()}
              />
            </a>
          </div>
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
      </div>
      <div className="latest-controlls">
        {/* <div className="control control-1"></div>
        <div className="control control-2"></div>
        <div className="control control-3"></div> */}
      </div>
    </LatestSectionStyled>
  );
}

const LatestSectionStyled = styled.section`
  .latest-container {
    margin-top: 1.5rem;
    background: ${(props) => props.theme.colorGreyLight2};
    border-radius: 7px;

    .latest-content {
      display: grid;
      grid-template-columns: 40% auto;
      padding: 5rem 10rem;
      grid-gap: 2rem;

      img {
        width: 100%;
        height: 30rem;
        border-radius: 7px;
        object-fit: cover;
      }
      .latest-text {
        margin-left: 3rem;

        h4 {
          font-size: 2rem;
          padding-bottom: 1.5rem;
        }
        h6 {
          padding-bottom: 1.5rem;
          color: ${(props) => props.theme.colorFont};
          font-size: 1.2rem;
        }
        p {
          padding-bottom: 1.5rem;
        }
        a {
          background: transparent;
          border: 2px solid ${(props) => props.theme.colorGrey4};
          tex-transform: inherit;
        }
      }
    }
  }

  .latest-controlls {
    display: flex;
    justify-content: center;
    margin-top: 2.5rem;

    .control {
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      margin: 0 0.2rem;
      cursor: pointer;
    }

    .control-1 {
      background: ${(props) => props.theme.colorAccent};
      transform: scale(0.6);
    }
    .control-2 {
      background-color: ${(props) => props.theme.colorGrey9};
      transform: scale(0.85);
    }
    .control-3 {
      background-color: ${(props) => props.theme.colorGrey9};
      transform: scale(0.6);
    }
  }

  @media only screen and (max-width: 676px) {
    .latest-content {
      grid-template-columns: 1fr !important;
      padding: 0 !important;
    }
    .latest-text {
      margin: 0 !important;
    }
  }
`;

export default LatestSection;
