import { Fragment } from "react";

import { Section } from "../../components/section";
import { FeaturedStoresCarousel } from "../../components/featured-carousel";
import { FeaturedCoupons } from "../../components/featured-coupons";

function Homepage(props) {
  return (
    <Fragment>
      <Section title='Lojas em Destaque'>
        <FeaturedStoresCarousel />
      </Section>

      <Section title='Melhores Coupons'>
        <FeaturedCoupons />
      </Section>
    </Fragment>
  );
}

export default Homepage;
