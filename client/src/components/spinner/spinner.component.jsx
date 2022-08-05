import { SpinnerContainer, SpinnerCircle } from './index';

function Spinner({ fullpage, ...otherProps }) {
  return (
    <SpinnerContainer fullpage={fullpage} {...otherProps}>
      <SpinnerCircle>loading content</SpinnerCircle>
    </SpinnerContainer>
  );
}

export default Spinner;
