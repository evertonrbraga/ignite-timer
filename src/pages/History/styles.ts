import styled, { css } from 'styled-components'
import * as T from './types'

export const HistoryContainer = styled.main`
  ${({ theme }) => css`
    flex: 1;
    padding: 3.5rem;

    display: flex;
    flex-direction: column;

    h1 {
      font-size: 1.5rem;
      color: ${theme['gray-100']};
    }
  `}
`

export const HistoryList = styled.div`
  ${({ theme }) => css`
    flex: 1;
    overflow: auto;
    margin-top: 2rem;

    table {
      width: 100%;
      border-collapse: collapse;
      min-width: 600px;

      th {
        background: ${theme['gray-600']};
        padding: 1rem;
        text-align: left;
        color: ${theme['gray-100']};
        font-size: 0.875rem;
        line-height: 1.6;

        &:first-child {
          border-top-left-radius: 8px;
          padding-left: 1.5rem;
        }

        &:last-child {
          border-top-right-radius: 8px;
          padding-right: 1.5rem;
        }
      }

      td {
        background: ${theme['gray-700']};
        border-top: 4px solid ${theme['gray-800']};
        padding: 1rem;
        font-size: 0%.875rem;
        line-height: 1.6;

        &:first-child {
          width: 50%;
          padding-left: 1.5rem;
        }

        &:last-child {
          padding-right: 1.5rem;
        }
      }
    }
  `}
`

export const STATUS_COLORS = {
  yellow: 'yellow-500',
  green: 'green-500',
  red: 'red-500'
} as const

export const Status = styled.span<T.StatusProps>`
  ${({ theme, statusColor }) => css`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &::before {
      content: '';
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
      background: ${theme[STATUS_COLORS[statusColor]]};
    }
  `}
`
