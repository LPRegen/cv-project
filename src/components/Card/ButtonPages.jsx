import React, { Component } from 'react';
import styled from 'styled-components';
import { colors } from '../theme';

import { Link } from 'react-router-dom';
import { MdArrowForwardIos, MdArrowBackIos } from 'react-icons/md';

export default class Button extends Component {
  render() {
    const path = this.props.path;
    const buttonType = this.props.buttonType;

    if (buttonType === 'button') {
      return (
        <StyledButton
          type={this.props.buttonType}
          direction={this.props.direction}
        >
          <StyledLink to={`${path}`}>
            {this.props.direction === 'previous' && <IconPrev />}
            {this.props.buttonText}
            {this.props.direction === 'next' && <IconNext />}
          </StyledLink>
        </StyledButton>
      );
    } else {
      return (
        <StyledButton
          type={this.props.buttonType}
          direction={this.props.direction}
        >
          {this.props.direction === 'previous' && <IconPrev />}
          {this.props.buttonText}
          {this.props.direction === 'next' && <IconNext />}
        </StyledButton>
      );
    }
  }
}

const StyledButton = styled.button`
  all: unset;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  padding: 0.8rem 0.3rem;
  background-color: ${colors.bgSecondary};
  color: ${colors.primaryText};
  border-radius: 20px;
  cursor: pointer;
  min-width: 120px;
  font-size: 14px;
`;

const IconNext = styled(MdArrowForwardIos)`
  color: ${colors.primaryText};
`;

const IconPrev = styled(MdArrowBackIos)`
  color: ${colors.primaryText};
`;

const StyledLink = styled(Link)`
  all: unset;
`;
