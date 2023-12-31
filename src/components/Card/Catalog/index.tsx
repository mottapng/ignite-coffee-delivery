import { ShoppingCart } from 'phosphor-react'

import { CoffeeProps } from '../../../constants/coffees'
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
          <InputNumber />
          <button>
            <ShoppingCart weight="fill" size={22} />
          </button>
        </div>
      </CardFooter>
    </CardContainer>
  )
}
