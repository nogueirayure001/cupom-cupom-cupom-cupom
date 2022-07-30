import { StoreCardContainer, StoreImage, StoreName } from './index';

function StoreCard({ name, image }) {
  return (
    <StoreCardContainer to={`../store/${name}`}>
      <StoreImage image={image} />
      <StoreName>{name}</StoreName>
    </StoreCardContainer>
  );
}

export default StoreCard;
