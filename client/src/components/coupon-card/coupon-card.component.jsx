import {
  StyledArticle,
  Content,
  StoreImage,
  CouponCodeContainer,
  CouponCode,
  CouponCodeLabel,
  OtherInfo,
  StoreLink,
  Category,
} from "./index";

function CouponCard({ coupon }) {
  const { description, store, code, category } = coupon;

  return (
    <StyledArticle title={description}>
      <Content>
        <StoreImage>
          <img src={store.image} alt={store.name} />
        </StoreImage>

        <CouponCodeContainer>
          <CouponCode id={code} value={code} />

          <CouponCodeLabel htmlFor={code}>
            *clique para copiar o código
          </CouponCodeLabel>
        </CouponCodeContainer>

        <OtherInfo>
          <StoreLink href={store.link}>Seguir para a loja</StoreLink>

          <Category>{category.name}</Category>
        </OtherInfo>
      </Content>
    </StyledArticle>
  );
}

export default CouponCard;
