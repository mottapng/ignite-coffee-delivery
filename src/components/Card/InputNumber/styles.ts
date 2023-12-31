import styled from 'styled-components'
import { mixins } from '../../../styles/mixins'

interface InputNumberProps {
  minusDisabled?: boolean
  plusDisabled?: boolean
}

export const InputNumberContainer = styled.div<InputNumberProps>`
  width: 4.875rem;

  display: flex;
  border-radius: 6px;

  background: ${(props) => props.theme['base-button']};

  span {
    ${mixins.fonts.textM}
    color: ${(props) => props.theme['base-title']};

    margin: auto;
  }

  button {
    padding: 0.75rem 0.5rem;
    display: flex;
    align-items: center;
    text-align: center;

    background-color: transparent;

    color: ${(props) => props.theme.purple};

    transition: color 0.1s;

    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }
`
