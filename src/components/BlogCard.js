import React from "react";
import styled from "styled-components";
import { useTheme } from "../context/themeContext";
import { GiWarlockEye, GiTiredEye } from "react-icons/gi";

function BlogCard({ name, title, subtext, image, date }) {
  const theme = useTheme();
  return (
    <BlogCardStyled theme={theme}>
      <div className="image">
        <img src={image} alt="..." />
        <div className="image-content">
          <div className="left-b-con">
            <GiWarlockEye />
            <span>{name}</span>
          </div>
          <div className="right-b-con">
            <GiTiredEye />
            <span>{date}</span>
          </div>
        </div>
      </div>
      <div className="blog-text">
        <h5>{title}</h5>
        <p>{subtext}</p>
        <div className="blog-icons">
          <p>
            {/* Share:
            <i class="fab fa-facebook"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-linkedin"></i>
            <i class="fab fa-github"></i>
            <i class="fab fa-youtube"></i> */}
          </p>
        </div>
      </div>
    </BlogCardStyled>
  );
}

const BlogCardStyled = styled.div`
  background: ${(props) => props.theme.colorGreyLight};
  border-radius: 7px;
  font-size: 1rem;
  border: 2px solid ${(props) => props.theme.colorGrey9};
  transition: all 0.4s ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: 10px 10px 0px #f8f9fa14;
    transform: translateY(-5px);
  }
  .image {
    position: relative;

    img {
      width: 100%;
      width: 300px;
      height: 220px;
      object-fit: cover;
      border-top-right-radius: 7px;
      border-top-left-radius: 7px;
      margin: auto;
    }
    .image-content {
      position: absolute;
      bottom: -13px;
      left: 50%;
      width: 85%;
      transform: translateX(-50%);
      background: ${(props) => props.theme.colorGradientPrimary3};
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.5rem 1rem;
      border-radius: 30px;

      span {
        margin-left: 5px;
      }
    }
  }
  .blog-text {
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 3rem;
    padding-bottom: 2rem;

    h5 {
      font-size: 1.1rem;
      padding-bottom: 1.5rem;
      color: ${(props) => props.theme.colorFont}
      cursor: pointer;
      transition: all 0.4s ease-in-out;
      

      &:hover {
         color: ${(props) => props.theme.colorPrimary}
      }
    }

    p {
      padding-bottom: 1.5rem;
      font-size: 1rem;
    }
    .blog-icons {
      display: flex;
      align-items: center;
      padding-top: 1.5rem;
      border-top: 1px solid ${(props) => props.theme.colorGrey9};

      i {
        margin: 0 .3rem;
        font-size: 1.2rem;
        cursor: pointer;
      }
    }
  }
`;

export default BlogCard;

// Istnienie wszech??wiata wcale nie jest takie oczywiste. Mog??oby go nie by??. ??ycie wcale nam si?? nie nale??y. Ani nie jest efektem naszych zabieg??w. Kto?? chcia??, aby??my byli.
