import { Article } from "../article";
import { Paragraph, Form, SubscribeButton } from "./index";

function Newsletter() {
  return (
    <Article title='Newsletter'>
      <Paragraph>
        Assine nossa newsletter e fique informado das melhores ofertas e cupons!
      </Paragraph>

      <Form>
        <input type='email' placeholder='email@exemplo.com' />

        <SubscribeButton>assinar</SubscribeButton>
      </Form>
    </Article>
  );
}

export default Newsletter;
