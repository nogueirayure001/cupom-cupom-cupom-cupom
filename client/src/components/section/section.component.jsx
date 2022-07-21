import { SectionContainer, Title } from "./index";

function Section({ children, title }) {
  return (
    <SectionContainer>
      <Title>{title}</Title>

      {children}
    </SectionContainer>
  );
}

export default Section;
