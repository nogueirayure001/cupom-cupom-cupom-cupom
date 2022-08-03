import { useState } from 'react';

import {
  StyledArticle,
  Placeholder,
  Loader,
  Content,
  StoreImage,
  CouponCodeContainer,
  CouponCode,
  CouponCodeLabel,
  CopySuccessSign,
  OtherInfo,
  StoreLink,
  Category
} from './index';

function CouponCard({ coupon, showPlaceholder }) {
  const [showCopySuccess, setCopySuccess] = useState(false);

  const blinkSuccessSign = (time) => {
    setCopySuccess(true);

    setTimeout(() => {
      setCopySuccess(false);
    }, time);
  };

  const copyToClipboardHandler = async (e) => {
    const { value } = e.target;

    const clipboard = navigator.clipboard;

    try {
      await clipboard.writeText(value);

      blinkSuccessSign(1000);
    } catch (error) {
      console.error(error);
    }
  };

  if (showPlaceholder) {
    return (
      <Placeholder>
        <Loader />
      </Placeholder>
    );
  }

  const { description, store, code, category } = coupon;

  return (
    <StyledArticle title={description}>
      <Content>
        <StoreImage>
          <img src={store.image} alt={store.name} />
        </StoreImage>

        <CouponCodeContainer>
          <CouponCode id={code} onClick={copyToClipboardHandler}>
            {code}
          </CouponCode>

          <CouponCodeLabel htmlFor={code}>
            *clique para copiar o código
          </CouponCodeLabel>

          {showCopySuccess && <CopySuccessSign>Copiado!</CopySuccessSign>}
        </CouponCodeContainer>

        <OtherInfo>
          <StoreLink href={store.link} target='_blank'>
            Seguir para a loja
          </StoreLink>

          <Category>{category.name}</Category>
        </OtherInfo>
      </Content>
    </StyledArticle>
  );
}

export default CouponCard;
