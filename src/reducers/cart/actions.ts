import { NavigateFunction } from 'react-router-dom'
import { Item, OrderFormInfo } from './reducer'

export const ActionTypes = {
  ADD_NEW_ITEM: 'ADD_NEW_ITEM',
  INCREMENT_ITEM: 'INCREMENT_ITEM',
  DECREMENT_ITEM: 'DECREMENT_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  CREATE_ORDER: 'CREATE_ORDER',
} as const

export type Actions =
  | ReturnType<typeof addNewItemAction>
  | ReturnType<typeof incrementItemAction>
  | ReturnType<typeof decrementItemAction>
  | ReturnType<typeof removeItemAction>
  | ReturnType<typeof createOrderAction>

export function addNewItemAction(newItem: Item) {
  return {
    type: ActionTypes.ADD_NEW_ITEM,
    payload: {
      newItem,
    },
  }
}

export function incrementItemAction(itemId: string) {
  return {
    type: ActionTypes.INCREMENT_ITEM,
    payload: {
      itemId,
    },
  }
}

export function decrementItemAction(itemId: string) {
  return {
    type: ActionTypes.DECREMENT_ITEM,
    payload: {
      itemId,
    },
  }
}

export function removeItemAction(itemId: string) {
  return {
    type: ActionTypes.REMOVE_ITEM,
    payload: {
      itemId,
    },
  }
}

export function createOrderAction(
  orderForm: OrderFormInfo,
  callback: NavigateFunction,
) {
  return {
    type: ActionTypes.CREATE_ORDER,
    payload: {
      orderForm,
      callback,
    },
  }
}
