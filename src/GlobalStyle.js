import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      list-style: none;
      text-decoration: none;
      font-family: 'Montserrat', sans-serif;
   }

   html {
      scroll-behavior: smooth;
      overflow-x: hidden;
   }

   body {
      font-size: 1.2rem;
      position: relative;
      overflow-x: hidden; 
   }

     body::-webkit-scrollbar {
      width: 7px;
   }

    body::-webkit-scrollbar-track {
      width: 7px;
      background: #101010;
   }

   body::-webkit-scrollbar-thumb{
        border-radius: 10px;
        background: linear-gradient(300.81deg, #ca5309 -17.99%, #f78d3c 111.32%, #ffbf01 111.32%);
    }
   body::-webkit-scrollbar-thumb:hover{
        border-radius: 10px;
        background: linear-gradient(171.21deg, #452e1a -10.74%, #f4af4e 112.82%, #f4d84e 112.82%);
    } 

   .u-pad-lg {
      padding: 8rem 18rem;

      @media only screen and (max-width: 768px) {
         padding: 1rem;
         
      }
   }

   .u-pad-lg-2 {
      padding-top: 1rem;
      padding-left: 18rem;
      padding-right: 18rem;
      padding-bottom: 6rem;

      @media only screen and (max-width: 768px) {
         padding: 1rem;
      }
   }

   .arrow {
      margin-left: auto .5rem;

      i {
         font-size: .9rem;
         animation: moveLR 2s infinite;
      }

      @keyframes moveLR {
         0% {
            transform: translateX(0);
         }
         50% {
            transform: translateX(10px);
         }
         100% {
            transform: translateX(0);
         }
      }
   }

   .title-con {
      text-align: center;
      width: 60%;
      margin: 0 auto;

     p {
         text-align: center;
         padding-top: 2rem;
         padding-bottom: 2rem;
      }
   }
    @media only screen and (max-width: 676px) {
         .title-con {
            width: 100% !important;

            h3 {
               font-size: 2rem;
            }
         }
      }
`;

export default GlobalStyle;
