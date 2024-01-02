import { Trash } from 'phosphor-react'

import { useState } from 'react'
import { useCart } from '../../../hooks/useCart'
import { formatPrice } from '../../../utils/formatPrice'
import { InputNumber } from '../InputNumber'
import { CardContainer, DeleteButton } from './styles'

interface CartCardProps {
  id: string
  name: string
  price: number
  image: string
  quantity: number
}

export const CartCard = ({
  id,
  name,
  price,
  image,
  quantity,
}: CartCardProps) => {
  const [count, setCount] = useState(quantity)
  const { incrementItem, decrementItem, removeItem } = useCart()

  const increment = () => {
    if (count < 99) {
      setCount((prevCount) => prevCount + 1)
      incrementItem(id)
    }
  }

  const decrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1)
      decrementItem(id)
    }
  }

  const handleRemoveItem = () => {
    removeItem(id)
  }

  return (
    <CardContainer>
      <img src={image} alt="" />
      <div>
        <h3>{name}</h3>
        <div>
          <InputNumber
            count={count}
            increment={increment}
            decrement={decrement}
          />
          <DeleteButton onClick={handleRemoveItem}>
            <Trash size={16} />
            REMOVER
          </DeleteButton>
        </div>
      </div>
      <strong>R$ {formatPrice(price)}</strong>
    </CardContainer>
  )
}
