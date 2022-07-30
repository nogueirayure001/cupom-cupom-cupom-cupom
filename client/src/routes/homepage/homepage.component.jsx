import { Fragment, useContext } from 'react';

import { FeaturedCouponsContext } from '../../contexts';
import { Section } from '../../components/section';
import { FeaturedCarousel } from '../../components/featured-carousel';
import { CategoriesDisplayboard } from '../../components/categories-displayboard';
import { CouponsDisplayboard } from '../../components/coupons-displayboard';

function Homepage(props) {
  const featuredCoupons = useContext(FeaturedCouponsContext);

  return (
    <Fragment>
      <Section title='Lojas em Destaque'>
        <FeaturedCarousel />
      </Section>

      <Section title='Que tal procurar por categorias?'>
        <CategoriesDisplayboard />
      </Section>

      <Section title='Os melhores coupons do momento'>
        <CouponsDisplayboard coupons={featuredCoupons} />
      </Section>
    </Fragment>
  );
}

export default Homepage;
