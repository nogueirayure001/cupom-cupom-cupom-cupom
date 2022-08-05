import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  selectAll,
  loadFeaturedCouponsAsync
} from '../../store/featured-coupons';
import { Section } from '../../components/section';
import { FeaturedCarousel } from '../../components/featured-carousel';
import { CategoriesDisplayboard } from '../../components/categories-displayboard';
import { CouponsDisplayboard } from '../../components/coupons-displayboard';

function Homepage(props) {
  const { coupons, isLoading } = useSelector(selectAll);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadFeaturedCouponsAsync);
  }, []);

  return (
    <Fragment>
      <Section title='Lojas em Destaque'>
        <FeaturedCarousel />
      </Section>

      <Section title='Que tal procurar por categorias?'>
        <CategoriesDisplayboard />
      </Section>

      <Section title='Os melhores coupons do momento'>
        <CouponsDisplayboard coupons={coupons} isLoading={isLoading} />
      </Section>
    </Fragment>
  );
}

export default Homepage;
