import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

const Post = styled.div`
  margin: 0 0 1em 0;
  width: 100%;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    flex: 0 0 49%;
    margin: 0 0 2vw 0;
  }
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    flex: 0 0 32%;
  }
  a {
    display: flex;
    flex-flow: column;
    height: 100%;
    width: 100%;
    color: ${props => props.theme.colors.base};
    text-decoration: none;
    .gatsby-image-wrapper {
      height: 0;
      padding-bottom: 60%;
      margin-bottom: 1.5rem;
    }
  }
`;

const Title = styled.h2`
  font-size: 1.5em;
  font-weight: 600;
  text-transform: capitalize;
  margin-bottom: 0.5rem;
`;

const Date = styled.span`
  margin-bottom: 1.5rem;
  color: gray;
`;

const Excerpt = styled.p`
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const Card = props => {
  // TODO: This is a mess. I'm getting other excerpt types from psot and from vlog
  return (
    <Post>
      <Link to={`/${props.slug}/`}>
        {props.image && <Img sizes={props.image.sizes} backgroundColor={'#eeeeee'} />}
        <Title>{props.title}</Title>
        {props.date && <Date>{props.date}</Date>}
        {props.excerpt ? (
          props.excerpt.childMarkdownRemark ? (
            <Excerpt
              dangerouslySetInnerHTML={{ __html: props.excerpt.childMarkdownRemark.excerpt }}
            />
          ) : (
            <Excerpt>{props.excerpt}</Excerpt>
          )
        ) : null}
      </Link>
    </Post>
  );
};

export default Card;
