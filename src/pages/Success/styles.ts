import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const SuccessContainer = styled.div`
  margin-top: 5rem;

  h1 {
    ${mixins.fonts.titleL}
    color: ${(props) => props.theme['yellow-dark']};
  }

  p {
    ${mixins.fonts.textL}
    color: ${(props) => props.theme['base-subtitle']};
  }

  & > div {
    display: flex;
    justify-content: space-between;

    gap: 4rem;

    @media (max-width: 50rem) {
      margin-top: 2.5rem;

      flex-direction: column-reverse;
      justify-content: center;
      gap: 0;
    }
  }
`

export const OrderInfo = styled.div`
  margin-top: 2.5rem;
  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  background: ${(props) => props.theme.background};

  position: relative;
  border-radius: 6px 36px;

  flex: 1 1 auto;
  min-width: 27rem;

  @media (max-width: 60rem) {
    min-width: 0;
  }

  & > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    p {
      color: ${(props) => props.theme['base-text']};
      ${mixins.fonts.textM}
    }
  }

  &::after {
    content: '';
    position: absolute;

    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    z-index: -1;
    margin: -1px;
    border-radius: inherit;

    background-image: linear-gradient(
      120deg,
      ${(props) => props.theme.yellow},
      ${(props) => props.theme.purple}
    );

    background-clip: padding-box; //Prevent Gradient to be Aliased
  }
`

export type IconVariants = 'yellow-dark' | 'yellow' | 'purple'

interface IconProps {
  color: IconVariants
}

export const Icon = styled.div<IconProps>`
  border-radius: 50%;

  width: 2rem;
  padding: 8px;

  display: flex;

  background: ${(props) => props.theme[props.color]};
  color: ${(props) => props.theme.white};
`

export const ImageContainer = styled.div`
  flex: 0 1 auto;
  max-width: 100%;

  display: flex;
  align-items: flex-end;

  img {
    width: 100%;
    height: auto;

    position: relative;
    bottom: -0.875rem;
  }

  @media (max-width: 60rem) {
    max-width: calc(100% - 27rem);
  }

  @media (max-width: 50rem) {
    max-width: inherit;
    width: 100%;

    justify-content: center;

    img {
      position: static;
      max-width: 27rem;
    }
  }
`
