import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';
import Link from 'gatsby-link';
import config from '../utils/siteConfig';
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
`;

const Post = styled.div`
  margin: 0 auto 1.5rem auto;
  max-width: 660px;

  a {
    color: ${props => props.theme.colors.base};
    text-decoration: none;
  }

  h3 {
    font-size: 1.75rem;
    margin-bottom: 0.5rem;
  }
`;

const VlogPage = ({ data }) => {
  const { edges: vlogs } = data.allContentfulVlog;

  return (
    <div>
      <Helmet>
        <title>{`Archive - ${config.siteTitle}`}</title>
        <meta property="og:title" content={`Archive - ${config.siteTitle}`} />
        <meta property="og:url" content={`${config.siteUrl}/archive/`} />
      </Helmet>

      <Hero>
        <h2>Archive</h2>
      </Hero>

      <Container>
        {vlogs.map(({ node: vlog }) => (
          <Post key={vlog.id}>
            <Link to={`/vlog/${vlog.slug}/`}>
              <h3>{vlog.title}</h3>
            </Link>
            <small>{vlog.publishDate}</small>
          </Post>
        ))}
      </Container>
    </div>
  );
};

export default VlogPage;

export const vlogArchiveQuery = graphql`
  query vlogArchiveQuery {
    allContentfulVlog(limit: 1000, sort: { fields: [publishDate], order: DESC }) {
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
        }
      }
    }
  }
`;
