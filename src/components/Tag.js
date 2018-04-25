import styled from 'styled-components';

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

export default Tag;
