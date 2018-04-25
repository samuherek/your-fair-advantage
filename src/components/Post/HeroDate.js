import styled from 'styled-components';
import { media } from '../../utils/styled';

const HeroDate = styled.span`
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

export default HeroDate;
