import { ReactNode, createContext, useReducer } from 'react'
import {
  addNewItemAction,
  decrementItemAction,
  incrementItemAction,
  removeItemAction,
} from '../reducers/cart/actions'
import { Item, cartReducer } from '../reducers/cart/reducer'

interface CartItemsContextType {
  cartItems: Item[]

  addNewItem: (item: Item) => void
  incrementItem: (id: string) => void
  decrementItem: (id: string) => void
  removeItem: (id: string) => void
}

export const CartItemsContext = createContext({} as CartItemsContextType)

export function CartItemsProvider({ children }: { children: ReactNode }) {
  const [itemsState, dispatch] = useReducer(
    cartReducer,
    {
      cartItems: [],
    },
    (initialState) => {
      return initialState
    },
  )

  const { cartItems } = itemsState

  function addNewItem(item: Item) {
    dispatch(addNewItemAction(item))
  }

  function incrementItem(id: string) {
    dispatch(incrementItemAction(id))
  }

  function decrementItem(id: string) {
    dispatch(decrementItemAction(id))
  }

  function removeItem(id: string) {
    dispatch(removeItemAction(id))
  }

  return (
    <CartItemsContext.Provider
      value={{
        cartItems,
        addNewItem,
        incrementItem,
        decrementItem,
        removeItem,
      }}
    >
      {children}
    </CartItemsContext.Provider>
  )
}
