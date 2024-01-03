import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

import { useCart } from '../../hooks/useCart'
import { Icon, ImageContainer, OrderInfo, SuccessContainer } from './styles'

export const Success = () => {
  const { order } = useCart()

  const formatPaymentMethod = (paymentMethod?: string) => {
    switch (paymentMethod) {
      case 'credit':
        return 'Cartão de Crédito'
      case 'debit':
        return 'Cartão de Débito'
      case 'cash':
        return 'Dinheiro'
      default:
        return 'Não informado'
    }
  }

  return (
    <SuccessContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <div>
        <OrderInfo>
          <div>
            <Icon color="purple">
              <MapPin size={16} weight="fill" />
            </Icon>
            <p>
              Entrega em{' '}
              <strong>
                {order?.orderForm.street}, {order?.orderForm.number}
              </strong>
              <br />
              {order?.orderForm.neighborhood} - {order?.orderForm.city},{' '}
              {order?.orderForm.state}
            </p>
          </div>

          <div>
            <Icon color="yellow">
              <Timer size={16} weight="fill" />
            </Icon>
            <p>
              Previsão de entrega
              <br />
              <strong>20 min - 30 min</strong>
            </p>
          </div>

          <div>
            <Icon color="yellow-dark">
              <CurrencyDollar size={16} />
            </Icon>
            <p>
              Pagamento na entrega
              <br />
              <strong>
                {formatPaymentMethod(order?.orderForm.paymentMethod)}
              </strong>
            </p>
          </div>
        </OrderInfo>

        <ImageContainer>
          <img src="/illustration.png" alt="" />
        </ImageContainer>
      </div>
    </SuccessContainer>
  )
}
