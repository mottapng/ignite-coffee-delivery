import { ShoppingCart } from 'phosphor-react'

import { useState } from 'react'
import { CoffeeProps } from '../../../constants/coffees'
import { useCart } from '../../../hooks/useCart'
import { formatPrice } from '../../../utils/formatPrice'
import { InputNumber } from '../InputNumber'
import { CardContainer, CardFooter } from './styles'

export const CatalogCard = ({
  id,
  name,
  description,
  price,
  image,
  tags,
}: CoffeeProps) => {
  const [count, setCount] = useState(1)
  const { addNewItem } = useCart()

  const increment = () => {
    if (count < 99) {
      setCount((prevCount) => prevCount + 1)
    }
  }

  const decrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1)
    }
  }

  const handleAddNewItem = () => {
    addNewItem({ id, quantity: count })
    setCount(1)
  }

  return (
    <CardContainer key={id}>
      <img src={image} alt="" />
      <div>
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <h3>{name}</h3>
      <p>{description}</p>
      <CardFooter>
        <p>
          R$ <strong>{formatPrice(price)}</strong>
        </p>
        <div>
          <InputNumber
            count={count}
            increment={increment}
            decrement={decrement}
          />
          <button onClick={handleAddNewItem}>
            <ShoppingCart weight="fill" size={22} />
          </button>
        </div>
      </CardFooter>
    </CardContainer>
  )
}
