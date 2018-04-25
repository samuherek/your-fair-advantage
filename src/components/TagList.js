import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'gatsby-link';

import Tag from './Tag';

const List = styled.ul`
  margin: 0 auto 2em auto;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
`;

const TagList = props => {
  if (!props.tags) {
    return null;
  }

  return (
    <List>
      {props.tags.map(tag => (
        <Tag key={tag.id}>
          <Link to={`/tag/${tag.slug}/`}>{tag.title}</Link>
        </Tag>
      ))}
    </List>
  );
};

TagList.propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      slug: PropTypes.string,
      title: PropTypes.string
    })
  )
};

export default TagList;
