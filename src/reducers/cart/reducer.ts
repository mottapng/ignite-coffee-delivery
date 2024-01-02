import { produce } from 'immer'

import { ActionTypes, Actions } from './actions'

export interface Item {
  id: string
  quantity: number
}

interface CartState {
  cartItems: Item[]
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

    default:
      return state
  }
}
