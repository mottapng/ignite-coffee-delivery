import { ReactNode, createContext, useReducer } from 'react'
import { useNavigate } from 'react-router-dom'

import {
  addNewItemAction,
  createOrderAction,
  decrementItemAction,
  incrementItemAction,
  removeItemAction,
} from '../reducers/cart/actions'
import {
  Item,
  Order,
  OrderFormInfo,
  cartReducer,
} from '../reducers/cart/reducer'

interface CartItemsContextType {
  cartItems: Item[]
  order: Order | null

  addNewItem: (item: Item) => void
  incrementItem: (id: string) => void
  decrementItem: (id: string) => void
  removeItem: (id: string) => void
  createOrder: (orderForm: OrderFormInfo) => void
}

export const CartItemsContext = createContext({} as CartItemsContextType)

export function CartItemsProvider({ children }: { children: ReactNode }) {
  const [itemsState, dispatch] = useReducer(
    cartReducer,
    {
      cartItems: [],
      order: null,
    },
    (initialState) => {
      return initialState
    },
  )

  const { cartItems, order } = itemsState
  const navigate = useNavigate()

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

  function createOrder(orderForm: OrderFormInfo) {
    dispatch(createOrderAction(orderForm, navigate))
  }

  return (
    <CartItemsContext.Provider
      value={{
        order,
        cartItems,
        addNewItem,
        incrementItem,
        decrementItem,
        removeItem,
        createOrder,
      }}
    >
      {children}
    </CartItemsContext.Provider>
  )
}
