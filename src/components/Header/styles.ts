import styled from 'styled-components'

import { mixins } from '../../styles/mixins'

export const HeaderContainer = styled.header`
  padding: 2rem 0;

  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.5rem;
  }
`

export const BaseNavLink = styled.div`
  border-radius: 6px;

  transition: filter 0.1s;

  a,
  div {
    padding: 0.5rem;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const Location = styled(BaseNavLink)`
  background: ${(props) => props.theme['purple-light']};

  color: ${(props) => props.theme.purple};

  span {
    ${mixins.fonts.textS}

    color: ${(props) => props.theme['purple-dark']};
    padding-left: 0.25rem;

    margin-top: 2px;
  }
`

export const CartLink = styled(BaseNavLink)<{ CartItemsAmount: number }>`
  background: ${(props) => props.theme['yellow-light']};

  position: relative;
  a {
    color: ${(props) => props.theme['yellow-dark']};
  }

  &:hover {
    filter: brightness(0.96);
  }

  &::after {
    content: ${(props) =>
      props.CartItemsAmount > 0 ? `"${props.CartItemsAmount}"` : 'none'};

    position: absolute;

    width: calc(1.25rem - 1px);
    height: calc(1.25rem - 2px);

    top: -0.5rem;
    right: -0.5rem;

    background: ${(props) => props.theme['yellow-dark']};

    border-radius: 50%;

    padding-top: 2px;
    padding-left: 1px;

    display: grid;
    place-items: center;

    ${mixins.fonts.textS}
    font-weight: bold;
    color: ${(props) => props.theme.white};
  }
`
