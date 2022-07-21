import { FooterContainer, Subdivision, Paragraph } from "./footer.styles";
import { Article } from "../article";
import { LinksList } from "../links-list";
import { Newsletter } from "../newsletter";
import { TERMOS_LINKS, DUVIDAS_LINKS, SOCIAL_LINKS } from "./index";

function Footer() {
  return (
    <FooterContainer>
      <Subdivision>
        <Article title='Termos'>
          <LinksList list={TERMOS_LINKS} />
        </Article>

        <Article title='Dúvidas'>
          <LinksList list={DUVIDAS_LINKS} />
        </Article>

        <Article title='Sobre'>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Facilisis gravida neque convallis a cras semper auctor neque vitae.
            Proin fermentum leo vel orci porta non pulvinar.
          </Paragraph>
        </Article>
      </Subdivision>

      <Subdivision>
        <Article title='Redes Sociais'>
          <LinksList list={SOCIAL_LINKS} horizontal />
        </Article>

        <Newsletter />
      </Subdivision>
    </FooterContainer>
  );
}

export default Footer;
