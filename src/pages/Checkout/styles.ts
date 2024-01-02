import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const CheckoutContainer = styled.div`
  margin-top: 2.5rem;

  h2 {
    ${mixins.fonts.titleXS}

    color: ${({ theme }) => theme['base-subtitle']};
  }
`

export const FormContainer = styled.div`
  display: flex;

  gap: 2rem;

  @media (max-width: 56.25rem) {
    flex-direction: column;
  }
`

export const FormLeftSide = styled.div`
  flex: 1 1 auto; /* grow and shrink, initial size auto */

  @media (max-width: 56.25rem) {
    width: 100%;
  }
`

export const FormRightSide = styled.div`
  flex: 1 0 22rem; /* grow but don't shrink, initial size 14rem */
  min-width: 22rem;

  @media (max-width: 56.25rem) {
    width: 100%;
  }
`

export const InputArea = styled.div`
  margin-top: 1rem;

  display: flex;
  flex-direction: column;

  gap: 0.75rem;
`

export const BaseContainers = styled.div`
  background: ${({ theme }) => theme['base-card']};

  border-radius: 0.5rem;
  padding: 2.5rem;

  display: flex;
  flex-direction: column;

  & > div:first-of-type {
    display: flex;
    gap: 0.5rem;
  }

  svg {
    color: ${({ theme }) => theme.purple};
  }

  h3 {
    ${mixins.fonts.textM}

    color: ${({ theme }) => theme['base-subtitle']};
  }

  p {
    ${mixins.fonts.textS}

    color: ${({ theme }) => theme['base-text']};
  }
`

export const AddressForm = styled(BaseContainers)`
  gap: 2rem;

  svg {
    color: ${({ theme }) => theme['yellow-dark']};
  }

  & > div:last-of-type {
    display: flex;
    flex-direction: column;

    gap: 0.5rem;

    div {
      display: flex;

      & div:not(:first-of-type) {
        margin-left: 0.5rem;
      }
    }
  }
`

interface InputProps {
  width?: string
  disableBasis?: boolean
  optional?: boolean
}

export const InputContainer = styled.div<InputProps>`
  width: ${({ width }) => width || '100%'};
  flex: ${({ width, disableBasis }) =>
    !disableBasis && (width ? '0 0 ' + width : '1 1 auto')};

  position: relative;

  ${({ optional, theme }) =>
    optional &&
    `
    &::after {
      content: 'Opcional';
      ${mixins.fonts.textXS}

      font-weight: 400;
      font-style: italic;

      color: ${theme['base-label']};

      position: absolute;

      right: 0.75rem;
      top: 50%;
      transform: translateY(-50%);
    }
  `}

  input {
    width: 100%;
    height: auto;

    padding: 0.75rem;
    border-radius: 4px;

    ${({ optional }) => optional && 'padding-right: 4rem;'}

    border: 1px solid ${({ theme }) => theme['base-button']};
    background: ${({ theme }) => theme['base-input']};

    transition: border 0.1s ease-in-out;

    ${mixins.fonts.textS}
    line-height: normal;
    color: ${({ theme }) => theme['base-text']};

    &::placeholder {
      color: ${({ theme }) => theme['base-label']};
    }

    &:focus {
      border: 1px solid ${({ theme }) => theme['yellow-dark']};
    }

    &::after {
      content: 'asd';
      display: block;
      clear: both;
    }
  }
`

export const PaymentForm = styled(BaseContainers)`
  gap: 2rem;
`

export const SelectGroup = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 0.75rem;
`

export const Button = styled.button<{ isSelected?: boolean }>`
  flex: 1 1 0;
  padding: 1rem;

  border-radius: 6px;

  display: flex;
  align-items: center;
  gap: 0.75rem;

  ${mixins.fonts.buttonM}
  line-height: normal;
  color: ${({ theme }) => theme['base-text']};

  border: 1px solid ${({ theme }) => theme['base-button']};
  background: ${({ theme }) => theme['base-button']};

  transition: 0.1s ease-in-out;

  &:hover {
    background: ${({ isSelected, theme }) =>
      !isSelected && theme['base-hover']};
    color: ${({ isSelected, theme }) => !isSelected && theme['base-subtitle']};
  }

  ${({ isSelected, theme }) =>
    isSelected &&
    `
      border: 1px solid ${theme.purple};
      background: ${theme['purple-light']};
  `}
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
