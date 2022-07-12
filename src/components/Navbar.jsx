import React, { Component } from 'react';
import styled from 'styled-components';
import { colors } from './theme';

import { NavLink } from 'react-router-dom';
import {
  MdPerson,
  MdContactPage,
  MdSchool,
  MdOutlineWork,
  MdOutlineStar,
  MdLanguage,
  MdVisibility,
} from 'react-icons/md';
import { VscGithubAlt } from 'react-icons/vsc';

export default class Navbar extends Component {
  render() {
    return (
      <NavigationBar>
        <StyledNavLink to="/">
          <MdPerson />
        </StyledNavLink>
        <StyledNavLink to="/contact">
          <MdContactPage />
        </StyledNavLink>
        <StyledNavLink to="/education">
          <MdSchool />
        </StyledNavLink>
        <StyledNavLink to="/work">
          <MdOutlineWork />
        </StyledNavLink>
        <StyledNavLink to="/skills">
          <MdOutlineStar />
        </StyledNavLink>
        <StyledNavLink to="/languages">
          <MdLanguage />
        </StyledNavLink>
        <StyledNavLink to="/preview">
          <MdVisibility />
        </StyledNavLink>
        <StyledAnchor
          href="https://github.com/LPRegen"
          target={'_blank'}
          rel={'noreferrer'}
        >
          <StyleGithub />
        </StyledAnchor>
      </NavigationBar>
    );
  }
}

const NavigationBar = styled.nav`
  background-color: ${colors.bgPrimary};
  width: 3.5rem;
  margin: 1.5rem 0 0 0;
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  font-size: 2rem;
  border-radius: 10px 0 0 0px;
  height: 100%;
  min-height: 740px;
  position: absolute;
  right: 0;
`;

const StyledNavLink = styled(NavLink)`
  color: ${colors.bgSecondary};
  position: relative;
  z-index: 9;

  :hover {
    color: ${colors.primaryText};
  }

  &.active {
    color: ${colors.primaryText};
  }

  &.active:before {
    content: '';
    overflow: hidden;
    display: flex;
    top: -3px;
    left: -6px;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${colors.bgSecondary};
    z-index: -1;
    border: 2px solid ${colors.selected};
  }
`;

const StyledAnchor = styled.a`
  padding-top: 2rem;
`;

const StyleGithub = styled(VscGithubAlt)`
  color: white;

  :visited {
    color: white;
  }
`;
