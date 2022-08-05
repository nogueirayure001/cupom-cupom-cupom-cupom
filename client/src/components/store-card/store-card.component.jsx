import {
  StoreCardContainer,
  StoreCardContainerPlaceholder,
  StoreImage,
  StoreImagePlaceholder,
  StoreName,
  StoreNamePlaceholder
} from './index';

function StoreCard({ name, image, isLoading }) {
  const loadingContent = (
    <StoreCardContainerPlaceholder>
      <StoreImagePlaceholder />
      <StoreNamePlaceholder>loading content</StoreNamePlaceholder>
    </StoreCardContainerPlaceholder>
  );

  const loadedContent = (
    <StoreCardContainer to={`../store/${name}`}>
      <StoreImage image={image} />
      <StoreName>{name}</StoreName>
    </StoreCardContainer>
  );

  return isLoading ? loadingContent : loadedContent;
}

export default StoreCard;
