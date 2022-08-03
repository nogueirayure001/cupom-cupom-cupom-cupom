import { SectionContainer, Title } from './index';

function Section({ children, title, titleLevel, innerRef, ...otherProps }) {
  return (
    <SectionContainer {...otherProps} ref={innerRef}>
      <Title as={titleLevel ? titleLevel : 'h2'}>{title}</Title>

      {children}
    </SectionContainer>
  );
}

export default Section;
