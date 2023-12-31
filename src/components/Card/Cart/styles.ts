import styled from 'styled-components'
import { mixins } from '../../../styles/mixins'

export const CardContainer = styled.div`
  width: 100%;
  padding: calc(0.5rem + 1.5rem) 0.25rem;

  border-bottom: 1px solid ${({ theme }) => theme['base-button']};

  &:first-of-type {
    padding-top: 0;
  }

  display: flex;
  gap: 1.25rem;

  img {
    width: 4rem;
    height: 4rem;
  }
  h3 {
    flex: 1;
    ${mixins.fonts.textM}

    color: ${({ theme }) => theme['base-subtitle']};

    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  strong {
    margin-left: auto;
    ${mixins.fonts.textM}
    font-weight: 700;
    color: ${({ theme }) => theme['base-text']};

    white-space: nowrap;
  }

  & > div {
    overflow: hidden;

    display: flex;
    flex-direction: column;

    gap: 0.5rem;

    & > div {
      display: flex;
      gap: 0.5rem;

      flex-wrap: wrap;

      div,
      button {
        height: 2rem;
      }
    }
  }
`

export const DeleteButton = styled.button`
  border-radius: 6px;
  padding: 0 0.5rem;

  background: ${({ theme }) => theme['base-button']};

  display: flex;
  align-items: center;
  gap: 0.25rem;

  ${mixins.fonts.buttonM}
  color: ${({ theme }) => theme['base-text']};

  transition: 0.1s ease-in-out;

  svg {
    color: ${({ theme }) => theme.purple};
  }

  &:hover {
    background: ${({ theme }) => theme['base-hover']};
    color: ${({ theme }) => theme['base-subtitle']};

    svg {
      color: ${({ theme }) => theme['purple-dark']};
    }
  }
`
