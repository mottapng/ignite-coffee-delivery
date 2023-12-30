import styled from 'styled-components'
import { mixins } from '../../../styles/mixins'

export const CardContainer = styled.div`
  width: 16rem;

  border-radius: 6px 36px;
  background: ${(props) => props.theme['base-card']};

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  padding: 0 1.25rem 1.25rem;

  img {
    width: 7.5rem;

    position: relative;
    top: -1.25rem;
  }

  & > div:first-of-type {
    display: flex;
    gap: 0.25rem;

    span {
      padding: 0.25px 0.5rem;

      background: ${(props) => props.theme['yellow-light']};

      ${mixins.fonts.tag}
      color: ${(props) => props.theme['yellow-dark']};

      border-radius: 100px;

      display: flex;
      text-align: center;

      text-transform: uppercase;
    }
  }

  h3 {
    margin-top: 1rem;

    ${mixins.fonts.titleS}
    color: ${(props) => props.theme['base-subtitle']};
    text-transform: capitalize;
  }

  & > p {
    margin-top: 0.5rem;

    ${mixins.fonts.textS}
    color: ${(props) => props.theme['base-label']};
  }
`

export const CardFooter = styled.div`
  width: 100%;
  margin: 2rem 0.25rem 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    ${mixins.fonts.textS}
    color: ${(props) => props.theme['base-text']};

    strong {
      ${mixins.fonts.titleM}
    }
  }

  & > div {
    display: flex;
    align-items: center;

    gap: 0.5rem;

    & > button {
      padding: 0.5rem;
      border-radius: 6px;

      display: flex;

      background: ${(props) => props.theme.purple};
      color: ${(props) => props.theme.white};

      transition: background 0.1s;

      &:hover {
        background: ${(props) => props.theme['purple-dark']};
      }
    }
  }
`
