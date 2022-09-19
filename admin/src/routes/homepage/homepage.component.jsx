import { useSelector } from 'react-redux';
import { selectUser } from '../../store/auth';
import { Section } from '../../components/section';
import { ActionCard } from '../../components/action-card';
import { ActionsContainer } from './index';
import { ProtectRoute } from '../../components/protect-route';

function Homepage(props) {
  const user = useSelector(selectUser);

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

          <ActionCard
            name='Newsletter'
            to='newsletter'
            image='../../assets/images/newsletter.png'
          />

          {user && user?.isMaster && (
            <ActionCard
              name='Admin'
              to='admin'
              image='../../assets/images/admin.png'
            />
          )}
        </ActionsContainer>
      </Section>
    </ProtectRoute>
  );
}

export default Homepage;
