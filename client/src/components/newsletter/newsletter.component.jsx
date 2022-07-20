import { FooterArticle } from "../footer-article";
import {
  NewsletterContainer,
  Title,
  Paragraph,
  Form,
  SubscribeButton,
} from "./index";

function Newsletter() {
  return (
    <FooterArticle title='Newsletter'>
      <Paragraph>
        Assine nossa newsletter e fique informado das melhores ofertas e cupons!
      </Paragraph>

      <Form>
        <input type='email' placeholder='email@exemplo.com' />

        <SubscribeButton>assinar</SubscribeButton>
      </Form>
    </FooterArticle>
  );
}

export default Newsletter;
