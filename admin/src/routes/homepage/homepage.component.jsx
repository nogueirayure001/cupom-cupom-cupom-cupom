import { Section } from '../../components/section';
import { ActionCard } from '../../components/action-card';
import { ActionsContainer } from './index';
import { ProtectRoute } from '../../components/protect-route';

function Homepage(props) {
  return (
    <ProtectRoute>
      <Section title='Menu de Ações'>
        <ActionsContainer>
          <ActionCard
            name='Cupons'
            to='coupons'
            image='../../assets/images/coupon.png'
          />

          <ActionCard
            name='Lojas'
            to='stores'
            image='../../assets/images/store.png'
          />
        </ActionsContainer>
      </Section>
    </ProtectRoute>
  );
}

export default Homepage;
