import { ArticleContainer, Title } from "./index";

function FooterArticle({ children, title }) {
  return (
    <ArticleContainer>
      <Title>{title}</Title>

      {children}
    </ArticleContainer>
  );
}

export default FooterArticle;
