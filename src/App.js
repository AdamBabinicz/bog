import { useTheme, useUpdateTheme } from "./context/themeContext";
import styled from "styled-components";
import Header from "./components/Header";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import RecommendationsSection from "./components/Recommendations";
import LatestSection from "./components/LatestSection";
import BlogsSection from "./components/BlogsSection";
import FooterSection from "./components/FooterSection";
import themes from "./context/theme";
import Scroll from "./Scroll";
import ScrollToTop from "./ScrollToTop";
import CookieConsent from "react-cookie-consent";

function App() {
  const theme = useTheme();
  const setTheme = useUpdateTheme();

  return (
    <AppStyled theme={theme}>
      <ScrollToTop />
      <Scroll />
      <Header />
      <main>
        <AboutSection />
        <ServicesSection />
        <RecommendationsSection />
        <LatestSection />
        <BlogsSection />
      </main>
      <FooterSection />
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="theme-switcher">
        {themes.map((theme, i) => {
          return (
            <button
              key={i}
              style={{ background: theme.colorBg }}
              onClick={() => setTheme(i)}
            ></button>
          );
        })}
      </div>
      <CookieConsent
        debug={true}
        location="bottom"
        style={{
          background: "#333",
          textAlign: "left",
          paddingBottom: "1rem",
          fontSize: "16px",
          fontFamily: "Gideon Roman",
        }}
        buttonStyle={{
          color: "#333",
          background: "#fff",
          fontSize: "18px",
          fontFamily: "Gideon Roman",
          marginRight: "1rem",
        }}
        buttonText="OK, rozumiem"
        expires={365}
      >
        "W ramach naszej witryny stosujemy pliki cookies w celu świadczenia
        Państwu usług na najwyższym poziomie, w tym w sposób dostosowany do
        indywidualnych potrzeb. Korzystanie z witryny bez zmiany ustawień
        dotyczących cookies oznacza, że będą one zamieszczane w Państwa
        urządzeniu końcowym. Możecie Państwo dokonać w każdym czasie zmiany
        ustawień dotyczących cookies."
      </CookieConsent>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  min-height: 100vh;
  position: relative;
  z-index: 5;
  background: ${(props) => props.theme.colorBg};
  color: ${(props) => props.theme.colorWhite};

  a {
    color: ${(props) => props.theme.colorWhite};
  }

  p {
    color: ${(props) => props.theme.colorFont};
  }
  .active-menu {
    border-radius: 30px;
    background: ${(props) => props.theme.colorGradientPrimary2};
  }

  .lines {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-evenly;
    z-index: -1;

    .line {
      min-height: 100%;
      width: 1px;
      background: ${(props) => props.theme.colorGray9};
    }
  }

  .theme-switcher {
    position: fixed;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;

    button {
      width: 40px;
      height: 40px;
      cursor: pointer;
      border-radius: 10%;
      outline: none;
      border: 2px solid ${(props) => props.theme.colorPrimary};

      &:last-child {
        margin-top: 10px;
      }
    }
  }
`;

export default App;
