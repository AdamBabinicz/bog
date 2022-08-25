import React from "react";
import styled from "styled-components";
import { useTheme } from "../context/themeContext";
import BlogCard from "./BlogCard";
import Title from "./Title";
import figma from "../img/1.jfif";
import python from "../img/5.jpg";
import python2 from "../img/9.jpg";
import fitness from "../img/10.jpg";
import css from "../img/14.jpg";
import react from "../img/16.jpg";

function BlogsSection() {
  const theme = useTheme();
  return (
    <BlogsSectionStyled className="u-pad-lg-2" theme={theme} id="oblicza-boga">
      <div className="title-con">
        <Title
          name={"Oblicza Boga"}
          subtext="Największym pragnieniem ludzi Starego Testamentu było oglądanie Boga."
        />
        <em>biblia.wiara.pl/doc/1061349</em>
      </div>
      <div className="blogs-container">
        <BlogCard
          title={"Największą tęsknotą każdego Izraelity było oglądanie Boga"}
          name={"Wj 33,20"}
          subtext={
            "Żaden człowiek nie może oglądać mojego oblicza i po­zostać przy życiu."
          }
          date={""}
          image={figma}
        />
        <BlogCard
          title="Widzialne są tylko znaki Bożej obecności"
          name={"Ps 63,3"}
          subtext={
            "W świątyni tak się wpatruję w Ciebie, bym ujrzał Twoją potęgę i chwałę."
          }
          date={""}
          image={python}
        />
        <BlogCard
          title="Bóg stopniowo objawia swoją ukrytą ta­jemnicę - tajemnicę swojej osoby"
          name={"Ps 27,8-9"}
          subtext={
            "O Tobie mówi moje serce: Szukaj Jego oblicza! Szukam, o Panie, Twojego oblicza; swego oblicza nie zakrywaj przede mną."
          }
          date={""}
          image={css}
        />
        <BlogCard
          title="Bóg w pierwszym rzędzie nie objawia czegoś, lecz samego siebie i Swoją Wolę zbawienia człowieka"
          name={"Ps 24,6"}
          subtext={
            "Takie jest pokolenie tych, co Go szukają, co szukają oblicza Boga Jakubowego."
          }
          date={""}
          image={react}
        />
        <BlogCard
          title="Objawiając siebie samego i swoją tajemnicę, objawia człowiekowi także jego tajemnicę"
          name={"Wj 3,15"}
          subtext={"Jestem, który jestem."}
          date={""}
          image={fitness}
        />
        <BlogCard
          title="To objawienie jest samootwarciem się Boga, przez które człowiek zostaje wpro­wadzony w światło prawdy"
          name={"J 1,18"}
          subtext={
            "Boga nikt nigdy nie widział, Ten Jednorodzony Bóg, który jest w łonie Ojca, [o Nim] pouczył."
          }
          date={""}
          image={python2}
        />
      </div>
    </BlogsSectionStyled>
  );
}

const BlogsSectionStyled = styled.section`
  .blogs-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    grid-gap: 2rem;
    padding-top: 3rem;
  }

  @media only screen and (max-width: 676px) {
    .blogs-container .image {
      display: flex;
      justify-content: center;
    }
  }
`;

export default BlogsSection;
