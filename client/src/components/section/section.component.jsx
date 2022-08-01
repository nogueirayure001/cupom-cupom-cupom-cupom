import { SectionContainer, Title } from './index';

function Section({ children, title, titleLevel = 'h2', ...otherProps }) {
  return (
    <SectionContainer {...otherProps}>
      <Title as={titleLevel}>{title}</Title>

      {children}
    </SectionContainer>
  );
}

export default Section;
