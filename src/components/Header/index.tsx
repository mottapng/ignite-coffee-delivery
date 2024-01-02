import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import { useCart } from '../../hooks/useCart'
import { CartLink, HeaderContainer, Location } from './styles'

export function Header() {
  const { cartItems } = useCart()

  const CartItemsAmount = cartItems.length

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src="/logo-coffee-delivery.svg" alt="" />
      </NavLink>
      <nav>
        <Location>
          <div>
            <MapPin weight="fill" size={22} />
            <span>Porto Alegre, RS</span>
          </div>
        </Location>
        <CartLink CartItemsAmount={CartItemsAmount}>
          <NavLink to="/checkout" title="Carrinho">
            <ShoppingCart weight="fill" size={22} />
          </NavLink>
        </CartLink>
      </nav>
    </HeaderContainer>
  )
}
