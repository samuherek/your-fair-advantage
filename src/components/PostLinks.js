import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

import Card from './Card';
import { media } from '../utils/styled';

const Wrapper = styled.div`
  padding: 0 1.5rem;
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxWidthCentered};

  & > h4 {
    font-size: 1.5rem;
    margin-bottom: 5rem;

    ${media.minMedium} {
      text-align: center;
    }
  }

  ${media.minMedium} {
    padding: 0;
  }
`;

const List = styled.div`
  ${media.minMedium} {
    display: flex;
    justify-content: space-between;
  }

  & > div {
    ${media.minMedium} {
      flex: 0 0 47%;
    }
  }
`;

// const PreviousLink = styled(Link)`
//   margin-right: auto;
//   flex: 0 0 32%;
// `;

const NextLink = styled(Link)`
  margin-left: auto;
  flex: 0 0 32%;
`;

const PostLinks = props => {
  console.log(props);
  return (
    <Wrapper>
      <h4>More articles</h4>
      <List>
        {props.previous && (
          <Card
            slug={props.previous.slug}
            image={props.previous.heroImage}
            title={props.previous.title}
            excerpt={props.previous.body}
          />
        )}
        {/* <Img height="250px" sizes={props.previous.heroImage.sizes} /> */}
        {/* <PreviousLink to={`/${props.previous.slug}/`}>Prev Post</PreviousLink> */}
        {props.next && (
          <Card
            slug={props.next.slug}
            image={props.next.heroImage}
            title={props.next.title}
            excerpt={props.next.body}
          />
          // <div>
          //   <Img height="250px" sizes={props.next.heroImage.sizes} />
          //   <NextLink to={`/${props.next.slug}/`}>Next Post</NextLink>
          // </div>
        )}
      </List>
    </Wrapper>
  );
};

export default PostLinks;
