import styled from 'styled-components'
import { mixins } from '../../../../styles/mixins'

export const OrderInfoContainer = styled.div`
  flex: 1 0 22rem; /* grow but don't shrink, initial size 14rem */
  min-width: 22rem;

  @media (max-width: 56.25rem) {
    width: 100%;
  }
`

export const CartContainer = styled.div`
  background: ${({ theme }) => theme['base-card']};

  padding: 2.5rem;

  display: flex;
  flex-direction: column;

  border-radius: 6px 44px;
  margin-top: 1rem;

  & > button {
    border-radius: 6px;

    width: 100%;
    padding: 0.75rem 0.5rem;

    margin-top: 1.5rem;

    background: ${({ theme }) => theme.yellow};
    color: ${({ theme }) => theme.white};
    ${mixins.fonts.buttonG}

    transition: 0.1s ease-in-out;

    &:disabled {
      background: ${({ theme }) => theme['base-button']};
      color: ${({ theme }) => theme['base-label']};
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background: ${({ theme }) => theme['yellow-dark']};
    }
  }
`

export const PriceInfo = styled.div<{ isCartEmpty: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  p,
  strong {
    display: flex;
    justify-content: space-between;
  }

  p {
    ${mixins.fonts.textS}
    color: ${({ theme }) => theme['base-text']};

    &:first-of-type {
      margin-top: ${({ isCartEmpty }) => (!isCartEmpty ? '1.5rem' : 0)};
    }
  }

  & > strong {
    ${mixins.fonts.textL}
    font-weight: 700;
    color: ${({ theme }) => theme['base-subtitle']};
  }
`
