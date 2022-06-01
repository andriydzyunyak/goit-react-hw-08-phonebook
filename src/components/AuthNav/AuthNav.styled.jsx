import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  font-weight: 500;
  font-size: 20px;
  color: #ffffff;
  &:not(:last-child) {
    margin-right: 20px;
  }
  &.active {
    color: #ffdd00;
  }
`;
