import { FooterContainer, Subdivision, Paragraph } from "./footer.styles";
import { FooterArticle } from "../footer-article";
import { LinksList } from "../links-list";
import { Newsletter } from "../newsletter";
import { TERMOS_LINKS, DUVIDAS_LINKS, SOCIAL_LINKS } from "./index";

function Footer() {
  return (
    <FooterContainer>
      <Subdivision>
        <FooterArticle title='Termos'>
          <LinksList list={TERMOS_LINKS} />
        </FooterArticle>

        <FooterArticle title='Dúvidas'>
          <LinksList list={DUVIDAS_LINKS} />
        </FooterArticle>

        <FooterArticle title='Sobre'>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Facilisis gravida neque convallis a cras semper auctor neque vitae.
            Proin fermentum leo vel orci porta non pulvinar.
          </Paragraph>
        </FooterArticle>
      </Subdivision>

      <Subdivision>
        <FooterArticle title='Redes Sociais'>
          <LinksList list={SOCIAL_LINKS} horizontal />
        </FooterArticle>

        <Newsletter />
      </Subdivision>
    </FooterContainer>
  );
}

export default Footer;
