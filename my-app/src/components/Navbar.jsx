import React from "react";
import styled from "styled-components";
import Button from "../UI/Button";

const Section = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 50px;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`;
const LinkItem = styled.li`
  cursor: pointer;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Search = styled.img`
  height: 50px;
  border-radius: 100%;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/logo.png" />
          <List>
            <LinkItem>Home</LinkItem>
            <LinkItem>Studio</LinkItem>
            <LinkItem>Works</LinkItem>
            <LinkItem>Contact</LinkItem>
          </List>
        </Links>
        <Icons>
          <Search src="./img/search.png" />
          <Button text={"Hire"} />
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
