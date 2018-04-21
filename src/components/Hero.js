import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Link from 'gatsby-link';
import { media } from '../utils/styled';

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

const Date = styled.span`
  opacity: 0.5;
  font-size: 0.5rem;
  margin-bottom: 1.5rem;
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;

  ${media.minMedium} {
    margin-bottom: 2.5rem;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  text-transform: capitalize;
  line-height: 1.4;
  margin-bottom: 2.5rem;

  ${media.minMedium} {
    font-size: 3.5rem;
    max-width: 920px;
    margin: 0 auto 2.5rem auto;
  }
`;

const List = styled.ul`
  margin: 0 auto 2.5rem auto;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
`;

const Tag = styled.li`
  display: inline-block;
  margin-right: 1rem;

  &:last-child {
    margin-right: 0;
  }

  a {
    transition: 0.2s;
    background: white;
    padding: 0.5rem 0.75rem;
    font-size: 0.75rem;
    font-weight: 600;
    opacity: 0.5;
    border-radius: 2px;
    text-transform: capitalize;
    text-decoration: none;
    color: ${props => props.theme.colors.base};
    border: 1px solid ${props => props.theme.colors.secondary};

    &:hover {
      background: ${props => props.theme.colors.secondary};
      opacity: 1;
    }
  }
`;

const Hero = props => (
  <Wrapper>
    <Date>{props.date}</Date>
    <Title>{props.title}</Title>
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
