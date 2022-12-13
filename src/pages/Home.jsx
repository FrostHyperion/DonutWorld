import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn,
} from "./HomeElement";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeroContainer>
      <HeroContent>
        <HeroItems>
          <HeroH1>Greatest Donut Ever</HeroH1>
          <HeroP>Ready in 99 seconds</HeroP>
          <Link to="/donuts">
            <HeroBtn>Place Order</HeroBtn>
          </Link>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
}

export default Hero;
