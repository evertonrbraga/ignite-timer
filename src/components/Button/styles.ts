import styled, { css } from 'styled-components'
import { ButtonProps } from './types'

export const ButtonContainer = styled.button<ButtonProps>`
  ${({ theme, disabled }) => css`
    width: 100%;
    border: 0;
    padding: 1rem;
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.5rem;
    font-weight: bold;

    cursor: pointer;

    background: ${theme['green-500']};
    color: ${theme['gray-100']};

    ${disabled
      ? css`
          opacity: 0.7;
          cursor: not-allowed;
        `
      : css`
          &:hover {
            background: ${theme['green-700']};
          }
        `}
  `}
`
