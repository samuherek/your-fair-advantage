// NPM
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  FacebookShareButton,
  FacebookShareCount,
  TwitterShareButton,
  TwitterShareCount,
  GooglePlusShareButton,
  GooglePlusShareCount,
  PinterestShareButton,
  PinterestShareCount
} from 'react-share';

// COMPONENTS
import { FacebookIcon, TwitterIcon, GooglePlusIcon, PinterestIcon } from './icons';

// ACTIONS/CONFIG
import { media } from '../../../utils/styled';
import config from '../../../utils/siteConfig';

// STYLES
const Wrap = styled.div`
  max-width: ${props => props.theme.sizes.maxWidth};

  ${media.minMedium} {
    display: flex;
    justify-content: center;
    margin: 0 auto;
  }
`;

const Item = styled.div`
  margin-right: 4rem;

  &:last-child {
    margin-right: 0;

    .social-btn svg {
      margin-right: 0;
    }
  }

  .social-btn {
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: color 0.15s;

    svg {
      margin-right: 1rem;
      font-size: 0.875rem;
    }

    &.facebook:hover {
      color: #3b5998;
    }
    &.googleplus:hover {
      color: #dc4e41;
    }

    &.pinterest:hover {
      color: #bd081c;
    }

    &.twitter:hover {
      color: #1da1f2;
    }
  }
`;

// MODULE
export default function SocialShare(props) {
  const shareUrl = `${config.siteUrl}/${props.pathname}`;
  console.log(props);
  return (
    <Wrap>
      <Item>
        <FacebookShareButton url={shareUrl} quote={props.title} className="social-btn facebook">
          <FacebookIcon />
          <FacebookShareCount url={shareUrl}>{count => count}</FacebookShareCount>
        </FacebookShareButton>
      </Item>
      <Item>
        <GooglePlusShareButton url={shareUrl} className="social-btn googleplus">
          <GooglePlusIcon />
          <GooglePlusShareCount url={shareUrl}>{count => count}</GooglePlusShareCount>
        </GooglePlusShareButton>
      </Item>
      <Item>
        <PinterestShareButton
          url={shareUrl}
          media={props.image}
          windowWidth={1000}
          windowHeight={730}
          className="social-btn pinterest"
        >
          <PinterestIcon />
          <PinterestShareCount url={shareUrl} />
        </PinterestShareButton>
      </Item>
      <Item>
        {/* For Twitter Share Count - https://github.com/nygardk/react-share/issues/137 */}
        <TwitterShareButton url={shareUrl} title={props.title} className="social-btn twitter">
          <TwitterIcon />
        </TwitterShareButton>
      </Item>
      {/* <Item>Something else here</Item> */}
    </Wrap>
  );
}

// Props Validation
SocialShare.propTypes = {};
