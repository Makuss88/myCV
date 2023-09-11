import React from "react";
import styled from "styled-components";

const Section = styled.button`
  width: 160px;
  height: 50px;
  padding: 10px;
  font-size: 20px;
  border: none;
  border-radius: 10px;
  color: white;
  background-color: #3175b1;
  cursor: pointer;
`;

const Button = ({ text }) => {
  return <Section> {text} </Section>;
};

export default Button;
