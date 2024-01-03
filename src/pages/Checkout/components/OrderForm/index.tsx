import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import InputMask from 'react-input-mask'

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
  const {
    register,
    watch,
    setValue,
    trigger,
    formState: { errors },
  } = useFormContext<orderFormData>()

  const paymentMethod = watch('paymentMethod')

  const handleSelectPaymentMethod = (
    event: React.MouseEvent<HTMLButtonElement>,
    method: PaymentMethodTypes,
  ) => {
    event.preventDefault()
    setValue('paymentMethod', method)

    trigger('paymentMethod')
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
            <InputContainer width="196px" disableBasis hasErrors={!!errors.cep}>
              <InputMask
                mask={'99999-999'}
                alwaysShowMask={false}
                maskPlaceholder=""
                type={'text'}
                inputMode="numeric"
                placeholder="CEP"
                {...register('cep')}
                onFocus={(e) => (e.target.placeholder = '')}
                onBlur={(e) => (e.target.placeholder = 'CEP')}
                autoComplete="off"
              />
            </InputContainer>
            <InputContainer hasErrors={!!errors.street}>
              <input
                type="text"
                placeholder="Rua"
                {...register('street')}
                inputMode="numeric"
                onFocus={(e) => (e.target.placeholder = '')}
                onBlur={(e) => (e.target.placeholder = 'Rua')}
                autoComplete="off"
              />
            </InputContainer>

            <div>
              <InputContainer width="35%" hasErrors={!!errors.number}>
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="Número"
                  {...register('number')}
                  onInput={(e) => {
                    e.currentTarget.value = e.currentTarget.value.replace(
                      /[^0-9]/g,
                      '',
                    )
                  }}
                  maxLength={5}
                  onFocus={(e) => (e.target.placeholder = '')}
                  onBlur={(e) => (e.target.placeholder = 'Número')}
                  autoComplete="off"
                />
              </InputContainer>

              <InputContainer optional hasErrors={!!errors.complement}>
                <input
                  type="text"
                  placeholder="Complemento"
                  {...register('complement')}
                  onFocus={(e) => (e.target.placeholder = '')}
                  onBlur={(e) => (e.target.placeholder = 'Complemento')}
                  autoComplete="off"
                />
              </InputContainer>
            </div>

            <div>
              <InputContainer width="35%" hasErrors={!!errors.neighborhood}>
                <input
                  type="text"
                  placeholder="Bairro"
                  {...register('neighborhood')}
                  onFocus={(e) => (e.target.placeholder = '')}
                  onBlur={(e) => (e.target.placeholder = 'Bairro')}
                  autoComplete="off"
                />
              </InputContainer>

              <InputContainer hasErrors={!!errors.city}>
                <input
                  type="text"
                  placeholder="Cidade"
                  {...register('city')}
                  onFocus={(e) => (e.target.placeholder = '')}
                  onBlur={(e) => (e.target.placeholder = 'Cidade')}
                  autoComplete="off"
                />
              </InputContainer>

              <InputContainer width="3.75rem" hasErrors={!!errors.state}>
                <input
                  type="text"
                  placeholder="UF"
                  maxLength={2}
                  onInput={(e) => {
                    e.currentTarget.value = e.currentTarget.value.replace(
                      /[^a-zA-Z]/g,
                      '',
                    )
                  }}
                  {...register('state')}
                  onFocus={(e) => (e.target.placeholder = '')}
                  onBlur={(e) => (e.target.placeholder = 'UF')}
                  autoComplete="off"
                  style={{ textTransform: 'uppercase' }}
                />
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

          <SelectGroup hasErrors={!!errors.paymentMethod}>
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
