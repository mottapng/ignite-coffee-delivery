import { useContext } from 'react'
import { CartItemsContext } from '../contexts/CartItemsContext'

export function useCart() {
  return useContext(CartItemsContext)
}
