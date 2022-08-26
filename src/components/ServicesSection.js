import React from "react";
import styled from "styled-components";
import { useTheme } from "../context/themeContext";
import Title from "../components/Title";
import ServiceCard from "../components/ServiceCard";
import animation from "../img/8.png";
import artificialIntelligence from "../img/8.png";
import gameDevelopment from "../img/8.png";
import emergencySoftware from "../img/8.png";
import globalTeaching from "../img/8.png";
import videoProduction from "../img/8.png";

function ServicesSection() {
  const theme = useTheme();
  return (
    <ServicesSectionStyled className="u-pad-lg-2" theme={theme} id="dowody">
      <div className="title-con">
        <Title
          name={"Dowody na istnienie Boga"}
          subtext="Wśród uczonych próbujących podać argumenty za istnieniem Boga byli m.in. Anzelm z Canterbury, Tomasz z Akwinu, Augustyn z Hippony i Kartezjusz. Współcześnie podobne próby podejmowali również Richard Swinburne, John Lennox, Alvin Plantinga czy William Lane Craig. Propozycje dowodów na istnienie Boga można podzielić na aprioryczne (np. dowód ontologiczny) i aposterioryczne (np. dowód kosmologiczny)."
        />
      </div>
      <div className="services-con">
        <ServiceCard
          title={"Idea dobra"}
          desc={
            "sformułowana przez Platona, głosząca że dobro samo w sobie istnieje i jest ono bytem niematerialnym, nadprzyrodzonym, doskonałym, miłującym."
          }
          icon={animation}
          link={"https://www.kul.pl/files/108/Co_wiemy_o_istocie_dobra.pdf"}
        />
        <ServiceCard
          title="Dowód kosmologiczny"
          desc="według którego musiała istnieć pierwsza przyczyna, którą był Bóg; sformułowany przez Arystotelesa i powtórzony przez Tomasza z Akwinu."
          icon={artificialIntelligence}
          link={"https://pl.wikipedia.org/wiki/Argument_kosmologiczny"}
        />
        <ServiceCard
          title="Dowód ontologiczny"
          desc="Bóg musi istnieć, gdyż jest najdoskonalszą rzeczą, o jakiej można pomyśleć, a rzeczy doskonałej istnienie przysługuje z konieczności, więc Bóg istnieje z konieczności; stworzył Anzelm z Canterbury, powtórzył Kartezjusz."
          icon={gameDevelopment}
          link={"https://pl.wikipedia.org/wiki/Dow%C3%B3d_ontologiczny"}
        />
        <ServiceCard
          title="Dowód teleologiczny"
          desc="klasyczny argument z projektu mówi, że Wszechświat jest tak skomplikowany, że musiał być zaplanowany przez Boga, współcześnie argument ten przybiera bardziej wyrafinowaną formę a jego zwolennicy uważają, że racjonalność przyrody, która daje się opisać przy pomocy narzędzi matematycznych i która decyduje o tym, że wszechświat nie jest chaosem, ale uporządkowaną, harmonijną całością sugeruje istnienie zamysłu Boga."
          icon={emergencySoftware}
          link={"https://pl.wikipedia.org/wiki/Argument_teleologiczny"}
        />
        <ServiceCard
          title="Argument biologiczny"
          desc="musi istnieć istota będąca podstawowym źródłem życia, twórcą życia ludzkiego, twórcą wszelkiego życia, posiadająca niewyczerpane i wieczne życie. Źródłem tym jest Bóg."
          icon={globalTeaching}
          link={
            "https://pl.wikipedia.org/wiki/Argument_biologiczny_na_istnienie_Boga"
          }
        />
        <ServiceCard
          title="Argument moralny"
          desc="moralna natura istot ludzkich sugeruje istnienie twórcy moralności; Bóg jest potrzebny jako ten, który wdraża moralność, skoro więc ona jest prawdziwa i słuszna, to istnieje Bóg."
          icon={videoProduction}
          link={"https://pl.wikipedia.org/wiki/Argument_moralny"}
        />
        <ServiceCard
          title="Argument z cudu"
          desc="istnienie cudów wskazuje na istnienie Boga."
          icon={videoProduction}
          link={"https://pl.wikipedia.org/wiki/Argument_z_cudu"}
        />
        <ServiceCard
          title="Argument kumulatywny"
          desc="jeśli zebrać wszystkie przemawiające na rzecz teizmu fakty — istnienie wszechświata, jego ład, istnienie świadomości, ludzkie możliwości czynienia dobra, wzorzec dziejów, świadectwo cudów oraz doświadczenie religijne — to jest bardziej prawdopodobne, że teizm ma rację, niż, że jej nie ma."
          icon={videoProduction}
          link={"https://pl.wikipedia.org/wiki/Dowodzenie_istnienia_Boga"}
        />
      </div>
    </ServicesSectionStyled>
  );
}

const ServicesSectionStyled = styled.section`
  .services-con {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    grid-gap: 2rem;
    padding-top: 3rem;

    p {
      text-align: left;
    }
    img {
      width: 10%;
      height: 10%;
      object-fit: contain;
    }
  }
`;

export default ServicesSection;
