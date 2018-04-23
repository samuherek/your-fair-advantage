import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Link from 'gatsby-link';
import config from '../utils/siteConfig';
import CardList from '../components/CardList';
import Card from '../components/Card';
import Container from '../components/Container';

const Hero = styled.div`
  text-align: center;
  padding-top: 5rem;
  padding-bottom: 2.5rem;

  h2 {
    display: block;
    font-size: 3.25rem;
    line-height: 1.15;
    max-width: 780px;
    margin: 0 auto 2.5rem auto;
  }

  p {
    max-width: 660px;
    margin: 0 auto;
    font-size: 1.25rem;
    line-height: 1.42;
    color: ${props => props.theme.colors.readingText};
  }
`;
const MoreContainer = styled.div`
  text-align: center;
  padding-top: 2.5rem;
  margin-bottom: 5rem;

  a {
    color: ${props => props.theme.colors.base};
    display: inline-block;
    margin: 0 auto;
    padding: 0.75rem 1.15rem;
    border: 1px solid ${props => props.theme.colors.base};
    text-decoration: none;
    font-family: ${props => props.theme.fonts.strong};
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.3px;
  }
`;

const Index = ({ data }) => {
  const posts = data.allContentfulPost.edges;
  const vlogs = data.allContentfulVlog.edges;

  return (
    <main>
      <Hero>
        <h2>Collection of thoughs from some random guy.</h2>
        <p>
          Everyone is aware of the unfair advantage term. It is the thing that makes you stand out
          without much effort. However, you can have a clear advantage in life which if fair. I call
          it a fair advantage. You can find all about how to get there on these pages. Just start
          right below :)
        </p>
      </Hero>
      <Container>
        <CardList>
          {posts.map(({ node: post }) => (
            <Card
              key={post.id}
              slug={post.slug}
              image={post.heroImage}
              title={post.title}
              date={post.publishDate}
              excerpt={post.body}
            />
          ))}
        </CardList>
        <CardList>
          {vlogs.map(({ node: post }) => (
            <Card
              key={post.id}
              slug={post.slug}
              image={post.heroImage}
              title={post.title}
              date={post.publishDate}
              excerpt={post.exceprt}
            />
          ))}
        </CardList>
      </Container>
      <MoreContainer>
        <Link to="/archive">Explore all the content</Link>
      </MoreContainer>
    </main>
  );
};

export const query = graphql`
  query indexQuery {
    allContentfulPost(limit: 3, sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          id
          slug
          publishDate(formatString: "MMMM DD, YYYY")
          heroImage {
            title
            sizes(maxWidth: 800) {
              ...GatsbyContentfulSizes_withWebp_noBase64
            }
          }
          body {
            childMarkdownRemark {
              html
              excerpt(pruneLength: 80)
            }
          }
        }
      }
    }
    allContentfulVlog(limit: 3, sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          id
          slug
          publishDate(formatString: "MMMM DD, YYYY")
          heroImage {
            title
            sizes(maxWidth: 800) {
              ...GatsbyContentfulSizes_withWebp_noBase64
            }
          }
          excerpt {
            excerpt
          }
        }
      }
    }
  }
`;

export default Index;
