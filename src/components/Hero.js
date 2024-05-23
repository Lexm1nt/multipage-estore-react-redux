import React from "react";
import styled from "styled-components";
import { other_images } from "../utils/images";

const Hero = () => {
  return (
    <HeroWrapper className="bg-black">
      <div className="container h-100 flex">
        <div className="hero-content">
          <h1>Платите меньше. Узнайте больше.</h1>
          <p>
            Распродажа! Огромный выбор курсов от 999 р. Просто учитесь, об
            остальном позаботимся мы!
          </p>
        </div>
      </div>
    </HeroWrapper>
  );
};

const HeroWrapper = styled.div`
  background: url(${other_images.hero_img}) center/cover no-repeat;
  height: 300px;

  .container {
    .hero-content {
      background-color: var(--clr-white);
      max-width: 500px;
      width: 100%;
      margin-left: 0;
      padding: 20px;

      h1 {
        font-size: 24px;
        margin-bottom: 5px;
        white-space: nowrap;
      }
      p {
        font-size: 15px;
      }
    }
  }
`;

export default Hero;
