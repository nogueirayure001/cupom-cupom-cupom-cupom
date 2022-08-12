import { SpinnerContainer, SpinnerCircle } from './index';

function Spinner({ fullpage, mini, ...otherProps }) {
  if (fullpage && mini) fullpage = false;

  return (
    <SpinnerContainer fullpage={fullpage} mini={mini} {...otherProps}>
      <SpinnerCircle mini={mini}>loading content</SpinnerCircle>
    </SpinnerContainer>
  );
}

export default Spinner;
