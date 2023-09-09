import styled from "styled-components";
import Contact from "./components/Contact";
import Who from "./components/Who";
import Works from "./components/Works";
import Hero from "./components/Hero";

const Container = styled.div`
  height: 100vh;
  background: url("./img/bg.jpg");
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const App = () => {
  return (
    <Container>
      <Hero />
      <Who />
      <Works />
      <Contact />
    </Container>
  );
};

export default App;
