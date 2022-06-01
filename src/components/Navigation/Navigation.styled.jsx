import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  font-weight: 500;
  font-size: 20px;
  color: #000000;
  &:not(:last-child) {
    margin-right: 20px;
  }
  &:hover,
  :focus {
    color: #2196f3;
  }
  &.active {
    color: #2196f3;
  }
`;
