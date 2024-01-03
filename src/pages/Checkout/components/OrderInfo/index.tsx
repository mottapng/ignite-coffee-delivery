import { CartCard } from '../../../../components/Card/Cart'
import { coffees } from '../../../../constants/coffees'
import { useCart } from '../../../../hooks/useCart'
import { formatPrice } from '../../../../utils/formatPrice'
import { CartContainer, OrderInfoContainer, PriceInfo } from './styles'

export const OrderInfo = () => {
  const { cartItems } = useCart()

  const cartItemsInfo = cartItems.map((item) => {
    const coffee = coffees.find((coffee) => coffee.id === item.id)

    if (!coffee) {
      throw new Error('Coffee not found')
    }

    return {
      ...coffee,
      quantity: item.quantity,
    }
  })

  const totalItemsPrice = cartItemsInfo.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  )

  const isCartEmpty = cartItems.length < 1

  const deliveryPrice = isCartEmpty ? 0 : 3.5
  const totalPrice = totalItemsPrice + deliveryPrice

  return (
    <OrderInfoContainer>
      <h2>Cafés selecionados</h2>
      <CartContainer>
        {!isCartEmpty &&
          cartItemsInfo.map((item) => (
            <CartCard
              key={item.id}
              id={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
            />
          ))}
        <PriceInfo isCartEmpty={isCartEmpty}>
          <p>
            Total de itens<span>R$ {formatPrice(totalItemsPrice)}</span>
          </p>
          {!isCartEmpty && (
            <p>
              Entrega<span>R$ {formatPrice(deliveryPrice)}</span>
            </p>
          )}
          <strong>
            Total<span>R$ {formatPrice(totalPrice)}</span>
          </strong>
        </PriceInfo>
        <button type="submit" disabled={isCartEmpty}>
          CONFIRMAR PEDIDO
        </button>
      </CartContainer>
    </OrderInfoContainer>
  )
}
