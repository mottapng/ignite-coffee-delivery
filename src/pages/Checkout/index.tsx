import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useNavigate } from 'react-router-dom'

import { useState } from 'react'
import { CartCard } from '../../components/Card/Cart'
import {
  AddressForm,
  Button,
  CartContainer,
  CheckoutContainer,
  FormContainer,
  FormLeftSide,
  FormRightSide,
  InputArea,
  InputContainer,
  PaymentForm,
  PriceInfo,
  SelectGroup,
} from './styles'

type PaymentMethods = 'credit' | 'debit' | 'cash'

export const Checkout = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<
    PaymentMethods | undefined
  >(undefined)
  const navigate = useNavigate()

  const handleConfirmOrder = () => {
    navigate('/order/1')
  }

  const handleSelectPaymentMethod = (method: PaymentMethods) => {
    setSelectedPaymentMethod(method)
  }

  return (
    <CheckoutContainer>
      <FormContainer>
        <FormLeftSide>
          <h2>Complete seu pedido</h2>
          <InputArea>
            <AddressForm>
              <div>
                <MapPinLine size={22} />
                <div>
                  <h3>Endereço de Entrega</h3>
                  <p>Informe o endereço onde deseja receber seu pedido</p>
                </div>
              </div>

              <div>
                <InputContainer width="196px" disableBasis>
                  <input type="text" placeholder="CEP" />
                </InputContainer>
                <InputContainer>
                  <input type="text" placeholder="Rua" />
                </InputContainer>

                <div>
                  <InputContainer width="35%">
                    <input type="text" placeholder="Número" />
                  </InputContainer>

                  <InputContainer optional>
                    <input type="text" placeholder="Complemento" />
                  </InputContainer>
                </div>

                <div>
                  <InputContainer width="35%">
                    <input type="text" placeholder="Bairro" />
                  </InputContainer>
                  <InputContainer>
                    <input type="text" placeholder="Cidade" />
                  </InputContainer>
                  <InputContainer width="3.75rem">
                    <input type="text" placeholder="UF" />
                  </InputContainer>
                </div>
              </div>
            </AddressForm>

            <PaymentForm>
              <div>
                <CurrencyDollar size={22} />
                <div>
                  <h3>Pagamento</h3>
                  <p>
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </p>
                </div>
              </div>

              <SelectGroup>
                <Button
                  isSelected={selectedPaymentMethod === 'credit'}
                  onClick={() => handleSelectPaymentMethod('credit')}
                >
                  <CreditCard size={16} />
                  CARTÃO DE CRÉDITO
                </Button>
                <Button
                  isSelected={selectedPaymentMethod === 'debit'}
                  onClick={() => handleSelectPaymentMethod('debit')}
                >
                  <Bank size={16} />
                  CARTÃO DE DÉBITO
                </Button>
                <Button
                  isSelected={selectedPaymentMethod === 'cash'}
                  onClick={() => handleSelectPaymentMethod('cash')}
                >
                  <Money size={16} />
                  DINHEIRO
                </Button>
              </SelectGroup>
            </PaymentForm>
          </InputArea>
        </FormLeftSide>

        <FormRightSide>
          <h2>Cafés selecionados</h2>
          <CartContainer>
            <CartCard
              image="/coffees/expresso.png"
              name="Expresso Tradicional"
              price={9.9}
            />
            <CartCard
              image="/coffees/expresso.png"
              name="Expresso Tradicional"
              price={9.9}
            />
            <PriceInfo>
              <p>
                Total de itens<span>R$ 29,70</span>
              </p>
              <p>
                Entrega<span>R$ 3,50</span>
              </p>
              <strong>
                Total<span>R$ 33,20</span>
              </strong>
            </PriceInfo>
            <button onClick={handleConfirmOrder}>CONFIRMAR PEDIDO</button>
          </CartContainer>
        </FormRightSide>
      </FormContainer>
    </CheckoutContainer>
  )
}
