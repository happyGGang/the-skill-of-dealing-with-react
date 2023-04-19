import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from '../../node_modules/axios/index';
import usePromise from '../lib/usePromise';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({ category }) => {
  const [loading, resonse, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=76ca758593974d9b86496aac6b72cfc3`,
    );
  }, [category]);

  if (loading) {
    return <NewsListBlock>대기중</NewsListBlock>;
  }

  if (!resonse) {
    return null;
  }

  if (error) {
    return <NewsListBlock>에러발생</NewsListBlock>;
  }
  const { articles } = resonse.data;
  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
