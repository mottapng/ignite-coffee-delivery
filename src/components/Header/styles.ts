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

  &:hover {
    filter: brightness(0.96);
  }

  a {
    padding: 0.5rem;

    display: flex;
    justify-content: center;
    align-items: center;

    &.active {
      color: ${(props) => props.theme['green-500']};
    }
  }
`

export const LocationLink = styled(BaseNavLink)`
  background: ${(props) => props.theme['purple-light']};

  a {
    color: ${(props) => props.theme.purple};

    span {
      ${mixins.fonts.textS}

      color: ${(props) => props.theme['purple-dark']};
      padding-left: 0.25rem;
    }
  }
`

export const CartLink = styled(BaseNavLink)`
  background: ${(props) => props.theme['yellow-light']};

  a {
    color: ${(props) => props.theme['yellow-dark']};
  }
`
