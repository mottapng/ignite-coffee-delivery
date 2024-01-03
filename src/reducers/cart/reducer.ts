import { produce } from 'immer'

import { ActionTypes, Actions } from './actions'

export interface Item {
  id: string
  quantity: number
}

export interface OrderFormInfo {
  cep: string
  street: string
  number: string
  complement?: string
  neighborhood: string
  city: string
  state: string
  paymentMethod: string
}

export interface Order {
  id: string
  items: Item[]
  orderForm: OrderFormInfo
}

interface CartState {
  cartItems: Item[]
  order: Order | null
}

export function cartReducer(state: CartState, action: Actions) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_ITEM:
      return produce(state, (draft) => {
        const itemIndex = draft.cartItems.findIndex(
          (item) => item.id === action.payload.newItem.id,
        )

        if (itemIndex >= 0) {
          draft.cartItems[itemIndex].quantity += action.payload.newItem.quantity
        } else {
          draft.cartItems.push(action.payload.newItem)
        }
      })

    case ActionTypes.INCREMENT_ITEM:
      return produce(state, (draft) => {
        const itemIndex = draft.cartItems.findIndex(
          (item) => item.id === action.payload.itemId,
        )

        if (itemIndex >= 0) {
          draft.cartItems[itemIndex].quantity += 1
        }
      })

    case ActionTypes.DECREMENT_ITEM:
      return produce(state, (draft) => {
        const itemIndex = draft.cartItems.findIndex(
          (item) => item.id === action.payload.itemId,
        )

        if (itemIndex >= 0) {
          draft.cartItems[itemIndex].quantity -= 1
        }
      })

    case ActionTypes.REMOVE_ITEM:
      return produce(state, (draft) => {
        const itemIndex = draft.cartItems.findIndex(
          (item) => item.id === action.payload.itemId,
        )

        if (itemIndex >= 0) {
          draft.cartItems.splice(itemIndex, 1)
        }
      })

    case ActionTypes.CREATE_ORDER:
      return produce(state, (draft) => {
        const order = {
          id: new Date().getTime().toString(),
          items: [...draft.cartItems],
          orderForm: action.payload.orderForm,
        }

        draft.order = order

        action.payload.callback(`/order/${order.id}`)
      })

    default:
      return state
  }
}
