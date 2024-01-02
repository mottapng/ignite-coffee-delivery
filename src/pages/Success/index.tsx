import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { Icon, ImageContainer, OrderInfo, SuccessContainer } from './styles'

export const Success = () => {
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
              Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              <br />
              Farrapos - Porto Alegre, RS
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
              <strong>Cartão de Crédito</strong>
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
