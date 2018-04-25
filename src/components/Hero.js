import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Link from 'gatsby-link';
import { media } from '../utils/styled';

import Tag from './Tag';
import HeroTitle from './Post/HeroTitle';
import HeroDate from './Post/HeroDate';

const Wrapper = styled.header`
  position: relative;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 1.5rem 1.5rem;

  ${media.minMedium} {
    text-align: center;
    padding: 5rem 1.5rem 1.5rem;
  }
`;

const List = styled.ul`
  margin: 0 auto 2.5rem auto;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
`;

const Hero = props => (
  <Wrapper>
    <HeroDate>{props.date}</HeroDate>
    <HeroTitle>{props.title}</HeroTitle>
    {props.tags && (
      <List>
        {props.tags.map(tag => (
          <Tag key={tag.id}>
            <Link to={`/tag/${tag.slug}/`}>{tag.title}</Link>
          </Tag>
        ))}
      </List>
    )}
  </Wrapper>
);

export default Hero;
