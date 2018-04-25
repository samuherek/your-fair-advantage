import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

import Card from './Card';
import { media } from '../utils/styled';

const Wrap = styled.div`
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

const Empty = styled.span`
  display: block;
  text-align: center;
  margin: 0 auto 5rem auto;
`;

const PostLinks = props => {
  // console.log(props);
  return (
    <Wrap>
      <h4>More {props.vlog ? 'videos' : 'articles'}</h4>
      <List>
        {props.previous && (
          <Card
            slug={props.previous.slug}
            image={props.previous.heroImage}
            title={props.previous.title}
            excerpt={props.previous.body}
          />
        )}
        {props.next && (
          <Card
            slug={props.next.slug}
            image={props.next.heroImage}
            title={props.next.title}
            excerpt={props.next.body}
          />
        )}
        {!props.previous &&
          !props.next && (
            <Empty>More {props.vlog ? 'videos' : 'articles'} coming. Patience is the key ;)</Empty>
          )}
      </List>
    </Wrap>
  );
};

export default PostLinks;
