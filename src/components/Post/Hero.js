import styled from 'styled-components';
import { media } from '../../utils/styled';

const Hero = styled.header`
  position: relative;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 1.5rem 1.5rem;

  ${media.minMedium} {
    text-align: center;
    padding: 5rem 1.5rem 1.5rem;
  }
`;

export default Hero;
