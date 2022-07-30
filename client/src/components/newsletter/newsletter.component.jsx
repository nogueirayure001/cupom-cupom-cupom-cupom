import { Article } from '../article';
import { Paragraph, UserEmailField } from './index';

function Newsletter() {
  return (
    <Article title='Newsletter'>
      <Paragraph>
        Assine nossa newsletter e fique informado das melhores ofertas e cupons!
      </Paragraph>

      <UserEmailField
        type='email'
        fieldLabel='email@exemplo.com'
        buttonLabel='assinar'
      />
    </Article>
  );
}

export default Newsletter;
