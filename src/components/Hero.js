import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Link from 'gatsby-link';
import { media } from '../utils/styled';

import TagList from './TagList';
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
    <TagList tags={props.tags} />
  </Wrapper>
);

export default Hero;
