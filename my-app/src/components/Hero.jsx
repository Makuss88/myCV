import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Button from "../UI/Button";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  height: 100vh;
  width: 1400px;
  display: flex;
  margin-top: 100px;
`;

const LeftSide = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
`;

const RightSide = styled.div`
  flex: 3;
`;

const Title = styled.h1`
  font-size: 66px;
`;

const Icon = styled.img`
  height: 80px;
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Subtitle = styled.h2`
  color: #c08282;
`;

const Desc = styled.p`
  font-size: 20px;
`;

const Img = styled.img`
  height: 500px;
  transform: translate(100px, -50px);
`;

const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <LeftSide>
          <Title>Think, make, sail!</Title>
          <WhatWeDo>
            <Icon src="./img/line.png" />
            <Subtitle>What we do??</Subtitle>
          </WhatWeDo>
          <Desc>Dupa Dupa dudud tralalaaaaaaa</Desc>
          <Button text={"Sail more!"} />
        </LeftSide>
        <RightSide>
          <Img src="./img/yacht.gif" />
        </RightSide>
      </Container>
    </Section>
  );
};

export default Hero;
