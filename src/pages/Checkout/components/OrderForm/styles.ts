import styled from 'styled-components'
import { mixins } from '../../../../styles/mixins'

export const OrderFormContainer = styled.div`
  flex: 1 1 auto; /* grow and shrink, initial size auto */

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
  hasErrors?: boolean
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

    &:focus-within::after {
      opacity: 0;
    }
  `}

  input {
    width: 100%;
    height: auto;

    padding: 0.75rem;
    border-radius: 4px;

    border: 1px solid ${({ theme }) => theme['base-button']};
    background: ${({ theme }) => theme['base-input']};

    transition: border 0.1s ease-in-out;

    ${mixins.fonts.textS}
    line-height: normal;
    color: ${({ theme }) => theme['base-text']};

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &[type='number'] {
      appearance: textfield;
      -moz-appearance: textfield;
    }

    &::placeholder {
      color: ${({ hasErrors, theme }) =>
        hasErrors ? theme['red-error'] : theme['base-label']};
    }

    ${({ hasErrors, theme }) =>
      hasErrors &&
      `
      border: 1px solid ${theme['red-error']};
    `}

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

export const SelectGroup = styled.div<{ hasErrors: boolean }>`
  display: flex;
  flex-wrap: wrap;

  gap: 0.75rem;

  button {
    ${({ hasErrors, theme }) =>
      hasErrors &&
      `
      border: 1px solid ${theme['red-error']};
  `}
  }
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
    !isSelected &&
    `
    &:focus {
      border: 1px solid ${theme['yellow-dark']};
    }
  `}

  ${({ isSelected, theme }) =>
    isSelected &&
    `
      border: 1px solid ${theme.purple};
      background: ${theme['purple-light']};
  `}
`
