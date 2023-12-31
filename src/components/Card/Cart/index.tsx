import { Trash } from 'phosphor-react'

import { formatPrice } from '../../../utils/formatPrice'
import { InputNumber } from '../InputNumber'
import { CardContainer, DeleteButton } from './styles'

interface CartCardProps {
  name: string
  price: number
  image: string
}

export const CartCard = ({ name, price, image }: CartCardProps) => {
  return (
    <CardContainer>
      <img src={image} alt="" />
      <div>
        <h3>{name}</h3>
        <div>
          <InputNumber />
          <DeleteButton>
            <Trash size={16} />
            REMOVER
          </DeleteButton>
        </div>
      </div>
      <strong>R$ {formatPrice(price)}</strong>
    </CardContainer>
  )
}
