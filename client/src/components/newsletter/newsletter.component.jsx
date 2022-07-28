import { Article } from '../article';
import { SingleFieldForm } from '../single-field-form';
import { Paragraph } from './index';

function Newsletter() {
  return (
    <Article title='Newsletter'>
      <Paragraph>
        Assine nossa newsletter e fique informado das melhores ofertas e cupons!
      </Paragraph>

      <SingleFieldForm
        type='email'
        fieldLabel='email@exemplo.com'
        buttonLabel='assinar'
      />
    </Article>
  );
}

export default Newsletter;
