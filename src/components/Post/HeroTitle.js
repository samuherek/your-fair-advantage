import styled from 'styled-components';
import { media } from '../../utils/styled';

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

export default Title;
