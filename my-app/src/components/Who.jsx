import React from "react";
import styled from "styled-components";
import Button from "../UI/Button";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  width: 1400px;
  display: flex;
  align-items: center;
`;

const LeftSide = styled.div`
  flex: 3;
`;

const RightSide = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 66px;
  margin: 0;
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
  color: #af7c49;
`;

const Desc = styled.p`
  font-size: 20px;
`;

const Img = styled.img`
  height: 300px;
`;

const Who = () => {
  return (
    <Section>
      <Container>
        <LeftSide>
          <Img src="" />
        </LeftSide>
        <RightSide>
          <Title>Think outside sailig rope!</Title>
          <WhatWeDo>
            <Icon src="./img/line.png" />
            <Subtitle>Who we are?</Subtitle>
          </WhatWeDo>
          <Desc>
            a group intresting sailing boat, we can teach Your children about
            sailing!
          </Desc>
          <Button text={"See our yacht!!"} />
        </RightSide>
      </Container>
    </Section>
  );
};

export default Who;
