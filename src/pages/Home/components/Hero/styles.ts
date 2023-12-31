import styled from 'styled-components'
import { mixins } from '../../../../styles/mixins'

export const HeroContainer = styled.section`
  max-width: 74rem;
  margin: 0 auto;
  padding: 0 2rem 2rem;

  display: flex;
  flex-wrap: wrap;
  gap: 3.5rem;
  justify-content: center;

  padding: 5.875rem 0;
`

export const Background = styled.div`
  position: absolute;

  width: 100%;

  top: 6.5%;
  left: 0;

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`

export const LeftSide = styled.div`
  flex: 1;
  min-width: 24rem;
  box-sizing: border-box;

  h1 {
    ${mixins.fonts.titleXL}
    color: ${(props) => props.theme['base-title']};
  }

  p {
    ${mixins.fonts.textL}
    color: ${(props) => props.theme['base-subtitle']};
    margin-top: 0.625rem;
  }

  & > div {
    margin-top: 3.5rem;
    display: grid;
    grid-template-columns: 0.8fr 1fr;
    grid-column-gap: 20px;
    grid-row-gap: 20px;

    & > div {
      display: flex;
      align-items: center;
      gap: 12px;
    }
  }
`

export type IconVariants = 'yellow-dark' | 'yellow' | 'base-text' | 'purple'

interface IconProps {
  color: IconVariants
}

export const Icon = styled.div<IconProps>`
  border-radius: 50%;

  padding: 8px;

  display: flex;

  background: ${(props) => props.theme[props.color]};
  color: ${(props) => props.theme.white};
`

export const RightSide = styled.div`
  flex: 0 0 100%;
  max-width: 476px;

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`
