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
import { copyToClipboard } from '../../utils';

function CouponCard({ coupon, showPlaceholder }) {
  const [showCopySuccess, setCopySuccess] = useState(false);

  const copyToClipboardHandler = (e) => {
    const { value } = e.target;

    const successCallback = () => {
      setCopySuccess(true);

      setTimeout(() => {
        setCopySuccess(false);
      }, 1000);
    };

    copyToClipboard(value, successCallback);
  };

  if (showPlaceholder) {
    return (
      <Placeholder>
        <Loader />
      </Placeholder>
    );
  }

  const { description, store, image, code, category, link } = coupon;

  return (
    <StyledArticle title={description}>
      <Content>
        <StoreImage>
          <img src={image} alt={store} />
        </StoreImage>

        <CouponCodeContainer>
          <CouponCode id={code} value={code} onClick={copyToClipboardHandler}>
            {code}
          </CouponCode>

          <CouponCodeLabel htmlFor={code}>
            *clique para copiar o código
          </CouponCodeLabel>

          {showCopySuccess && <CopySuccessSign>Copiado!</CopySuccessSign>}
        </CouponCodeContainer>

        <OtherInfo>
          <StoreLink href={link} target='_blank'>
            Seguir para a loja
          </StoreLink>

          <Category>{category}</Category>
        </OtherInfo>
      </Content>
    </StyledArticle>
  );
}

export default CouponCard;
