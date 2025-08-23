import styled, { css } from 'styled-components';

import React from 'react';

interface ButtonProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  onClick?: () => void;
}

interface StyledButtonProps {
  $variant: 'primary' | 'secondary' | 'outline';
  $size: 'small' | 'medium' | 'large';
  $disabled: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  onClick,
}) => {
  return (
    <StyledButton
      $variant={variant}
      $size={size}
      $disabled={disabled}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </StyledButton>
  );
};

const StyledButton = styled.button<StyledButtonProps>`
  font-medium;
  border-radius: 0.5rem;
  transition: colors 0.2s;
  outline: none;
  cursor: pointer;
  border: none;
  font-family: inherit;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px white, 0 0 0 4px currentColor;
  }

  ${({ $size }) => {
    switch ($size) {
      case 'small':
        return css`
          padding: 0.375rem 0.75rem;
          font-size: 0.875rem;
        `;
      case 'large':
        return css`
          padding: 0.75rem 1.5rem;
          font-size: 1.125rem;
        `;
      default: // medium
        return css`
          padding: 0.5rem 1rem;
          font-size: 1rem;
        `;
    }
  }}

  ${({ $variant, $disabled }) => {
    if ($disabled) {
      return css`
        opacity: 0.5;
        cursor: not-allowed;
      `;
    }

    switch ($variant) {
      case 'primary':
        return css`
          background-color: #2563eb;
          color: white;
          &:hover {
            background-color: #1d4ed8;
          }
          &:focus {
            box-shadow:
              0 0 0 2px white,
              0 0 0 4px #3b82f6;
          }
        `;
      case 'secondary':
        return css`
          background-color: #4b5563;
          color: white;
          &:hover {
            background-color: #374151;
          }
          &:focus {
            box-shadow:
              0 0 0 2px white,
              0 0 0 4px #6b7280;
          }
        `;
      case 'outline':
        return css`
          background-color: transparent;
          color: #2563eb;
          border: 2px solid #2563eb;
          &:hover {
            background-color: #eff6ff;
          }
          &:focus {
            box-shadow:
              0 0 0 2px white,
              0 0 0 4px #3b82f6;
          }
        `;
    }
  }}
`;
