import React from 'react';
import find from 'lodash/find';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Img from 'gatsby-image';
import config from '../utils/siteConfig';
// import Hero from '../components/Hero';
import Container from '../components/Container';
import PageBody from '../components/PageBody';
import TagList from '../components/TagList';
import PostLinks from '../components/PostLinks';
import PostDate from '../components/PostDate';

import HeroTitle from '../components/Post/HeroTitle';
import HeroDate from '../components/Post/HeroDate';
import Hero from '../components/Post/Hero';
import SocialShare from '../components/Post/SocialShare';
import Footer from '../components/Post/Footer';

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

const Video = styled.div`
  margin-bottom: 2.5rem;
`;

const VlogTemplate = ({ data }) => {
  console.log(data);
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
  } = data.contentfulVlog;

  const vlogIndex = find(data.allContentfulVlog.edges, ({ node: vlog }) => vlog.id === id);
  return (
    <article>
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
        <meta property="og:title" content={`${title} - ${config.siteTitle}`} />
        <meta property="og:url" content={`${config.siteUrl}/${slug}/`} />
        <meta property="og:image" content={heroImage.sizes.src} />
      </Helmet>

      <Hero>
        <HeroDate>{publishDate}</HeroDate>
        <HeroTitle>{title}</HeroTitle>
        <Video>
          <div
            className="gatsby-resp-iframe-wrapper"
            style={{ paddingBottom: '56.25%', position: 'relative', height: 0, overflow: 'hidden' }}
          >
            <iframe
              src="https://www.youtube.com/embed/xfafNuVegEM?rel=0"
              frameBorder="0"
              allow="encrypted-media"
              allowFullScreen="true"
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%'
              }}
            />
          </div>
        </Video>
        <TagList tags={tags} />
      </Hero>

      {/* <BgImg height={'50vh'} sizes={heroImage.sizes} backgroundColor={'#eeeeee'} /> */}
      <Excerpt dangerouslySetInnerHTML={{ __html: excerpt.childMarkdownRemark.html }} />
      <PageBody body={body} />
      <Footer>
        <SocialShare pathname={`/${slug}`} title={title} image={heroImage.sizes.src} />
      </Footer>
      <PostLinks previous={vlogIndex.previous} next={vlogIndex.next} vlog />
    </article>
  );
};

export const query = graphql`
  query vlogQuery($slug: String!) {
    contentfulVlog(slug: { eq: $slug }, publishDate: { ne: null }) {
      title
      id
      slug
      publishDate(formatString: "MMMM DD, YYYY")
      videoId
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
    allContentfulVlog(limit: 1000, sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          id
        }
        previous {
          slug
          title
          heroImage {
            title
            sizes(maxWidth: 500) {
              ...GatsbyContentfulSizes_withWebp_noBase64
            }
          }
        }
        next {
          slug
          title
          heroImage {
            title
            sizes(maxWidth: 500) {
              ...GatsbyContentfulSizes_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`;

export default VlogTemplate;
