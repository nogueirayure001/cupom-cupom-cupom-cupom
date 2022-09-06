import { ActionCardContainer, ActionImage, ActionName } from './index';

function ActionCard({ name, to, image, ...otherProps }) {
  return (
    <ActionCardContainer {...otherProps} to={to}>
      <ActionImage image={image} />
      <ActionName>{name}</ActionName>
    </ActionCardContainer>
  );
}

export default ActionCard;
