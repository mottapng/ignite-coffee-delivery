import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import { CartLink, HeaderContainer, LocationLink } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src="/logo-coffee-delivery.svg" alt="" />
      </NavLink>
      <nav>
        <LocationLink>
          <NavLink to="/checkout" title="Endereço">
            <MapPin weight="fill" size={22} />
            <span>Porto Alegre, RS</span>
          </NavLink>
        </LocationLink>
        <CartLink>
          <NavLink to="/checkout" title="Carrinho">
            <ShoppingCart weight="fill" size={22} />
          </NavLink>
        </CartLink>
      </nav>
    </HeaderContainer>
  )
}
