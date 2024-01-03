import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'

import { useFormContext } from 'react-hook-form'
import { orderFormData } from '../..'
import {
  AddressForm,
  Button,
  InputArea,
  InputContainer,
  OrderFormContainer,
  PaymentForm,
  SelectGroup,
} from './styles'

type PaymentMethodTypes = 'credit' | 'debit' | 'cash'

export const OrderForm = () => {
  const { register, watch, setValue } = useFormContext<orderFormData>()

  const paymentMethod = watch('paymentMethod')

  const handleSelectPaymentMethod = (
    event: React.MouseEvent<HTMLButtonElement>,
    method: PaymentMethodTypes,
  ) => {
    event.preventDefault()
    setValue('paymentMethod', method)
  }

  return (
    <OrderFormContainer>
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
              <input type="text" placeholder="CEP" {...register('cep')} />
            </InputContainer>
            <InputContainer>
              <input type="text" placeholder="Rua" {...register('street')} />
            </InputContainer>

            <div>
              <InputContainer width="35%">
                <input
                  type="number"
                  placeholder="Número"
                  {...register('number')}
                />
              </InputContainer>

              <InputContainer optional>
                <input
                  type="text"
                  placeholder="Complemento"
                  {...register('complement')}
                />
              </InputContainer>
            </div>

            <div>
              <InputContainer width="35%">
                <input
                  type="text"
                  placeholder="Bairro"
                  {...register('neighborhood')}
                />
              </InputContainer>
              <InputContainer>
                <input type="text" placeholder="Cidade" {...register('city')} />
              </InputContainer>
              <InputContainer width="3.75rem">
                <input type="text" placeholder="UF" {...register('state')} />
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
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </div>

          <SelectGroup>
            <Button
              isSelected={paymentMethod === 'credit'}
              onClick={(event) => handleSelectPaymentMethod(event, 'credit')}
            >
              <CreditCard size={16} />
              CARTÃO DE CRÉDITO
            </Button>
            <Button
              isSelected={paymentMethod === 'debit'}
              onClick={(event) => handleSelectPaymentMethod(event, 'debit')}
            >
              <Bank size={16} />
              CARTÃO DE DÉBITO
            </Button>
            <Button
              isSelected={paymentMethod === 'cash'}
              onClick={(event) => handleSelectPaymentMethod(event, 'cash')}
            >
              <Money size={16} />
              DINHEIRO
            </Button>
          </SelectGroup>
        </PaymentForm>
      </InputArea>
    </OrderFormContainer>
  )
}
