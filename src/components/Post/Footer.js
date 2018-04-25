import styled from 'styled-components';

const Footer = styled.footer`
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxWidth};
  border-bottom: 1px solid #efefef;
  padding-top: 2.5rem;
  padding-bottom: 5rem;
  margin-bottom: 5rem;
`;

export default Footer;
