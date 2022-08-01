import { ArticleContainer, Title } from './index';

function Article({ children, title, ...otherProps }) {
  return (
    <ArticleContainer {...otherProps}>
      <Title>{title}</Title>

      {children}
    </ArticleContainer>
  );
}

export default Article;
