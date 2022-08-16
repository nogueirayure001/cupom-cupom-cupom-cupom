import { Fragment } from 'react';

import { Section } from '../../components/section';
import { ActionCard } from '../../components/action-card';
import { ActionsContainer } from './index';

function Homepage(props) {
  return (
    <Fragment>
      <Section title='Menu de Ações'>
        <ActionsContainer>
          <ActionCard
            name='Cupons'
            to='/coupons'
            image='../../assets/images/coupon.png'
          />

          <ActionCard
            name='Lojas'
            to='/stores'
            image='../../assets/images/store.png'
          />
        </ActionsContainer>
      </Section>
    </Fragment>
  );
}

export default Homepage;
