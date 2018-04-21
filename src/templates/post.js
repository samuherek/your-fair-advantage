import React from 'react';
import find from 'lodash/find';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Img from 'gatsby-image';
import config from '../utils/siteConfig';
import Hero from '../components/Hero';
import Container from '../components/Container';
import PageBody from '../components/PageBody';
import TagList from '../components/TagList';
import PostLinks from '../components/PostLinks';
import PostDate from '../components/PostDate';

const BgImg = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  min-height: 300px;
  height: auto;
  @media (min-width: ${props => props.theme.responsive.small}) {
    height: ${props => props.height || 'auto'};
  }
  & > img {
    object-fit: ${props => props.fit || 'cover'} !important;
    object-position: ${props => props.position || '50% 50%'} !important;
  }
  &:before {
    content: '';
    background: rgba(0, 0, 0, 0.25);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
  }
`;

const Excerpt = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxWidthArticle};
  font-size: 1.75rem;
  margin-bottom: 2.5rem;
  line-height: 2.5rem;

  p::first-letter {
    font-size: 1.75rem;
    line-height: 2.5rem;
    background: #a9a9a9;
    color: white;
    padding: 0.3rem 0.75rem;
    margin-right: 0.35rem;
    font-family: Georgia, serif;
  }
`;

const PostTemplate = ({ data }) => {
  const {
    title,
    slug,
    id,
    heroImage,
    description,
    body,
    publishDate,
    tags,
    excerpt
  } = data.contentfulPost;

  const postIndex = find(data.allContentfulPost.edges, ({ node: post }) => post.id === id);
  console.log(data);
  return (
    <article>
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
        <meta property="og:title" content={`${title} - ${config.siteTitle}`} />
        <meta property="og:url" content={`${config.siteUrl}/${slug}/`} />
        <meta property="og:image" content={heroImage.sizes.src} />
      </Helmet>
      <Hero title={title} image={heroImage} date={publishDate} tags={tags} />
      {/* <BgImg height={'50vh'} sizes={heroImage.sizes} backgroundColor={'#eeeeee'} /> */}
      {/* {tags && <TagList tags={tags} />} */}
      {/* <PostDate date={publishDate} /> */}
      <Excerpt dangerouslySetInnerHTML={{ __html: excerpt.childMarkdownRemark.html }} />
      <PageBody body={body} />
      <PostLinks previous={postIndex.previous} next={postIndex.next} />
    </article>
  );
};

export const query = graphql`
  query postQuery($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      id
      slug
      publishDate(formatString: "MMMM DD, YYYY")
      tags {
        title
        id
        slug
      }
      heroImage {
        title
        sizes(maxWidth: 1800) {
          ...GatsbyContentfulSizes_withWebp_noBase64
        }
      }
      body {
        childMarkdownRemark {
          html
          timeToRead
        }
      }
      excerpt {
        childMarkdownRemark {
          html
        }
      }
    }
    allContentfulPost(limit: 1000, sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          id
        }
        previous {
          slug
          title
          heroImage {
            title
            sizes(maxWidth: 1800) {
              ...GatsbyContentfulSizes_withWebp_noBase64
            }
          }
        }
        next {
          slug
          title
          heroImage {
            title
            sizes(maxWidth: 1800) {
              ...GatsbyContentfulSizes_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`;

export default PostTemplate;
