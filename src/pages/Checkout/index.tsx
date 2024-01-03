import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import * as z from 'zod'

import { useCart } from '../../hooks/useCart'
import { OrderForm } from './components/OrderForm'
import { OrderInfo } from './components/OrderInfo'
import { CheckoutContainer, FormContainer } from './styles'

const orderFormValidationSchema = z.object({
  cep: z
    .string()
    .min(1, 'Informe o CEP')
    .regex(/^\d{5}-?\d{3}$/i, 'CEP inválido'),
  street: z.string().min(1, 'Informe a rua'),
  number: z.string().min(1, 'Informe o número'),
  complement: z.string().optional(),
  neighborhood: z.string().min(1, 'Informe o bairro'),
  city: z.string().min(1, 'Informe a cidade'),
  state: z.string().length(2, 'Informe o estado'),
  paymentMethod: z.enum(['credit', 'debit', 'cash'], {
    invalid_type_error: 'Selecione uma forma de pagamento',
  }),
})

export type orderFormData = z.infer<typeof orderFormValidationSchema>

export const Checkout = () => {
  const orderForm = useForm<orderFormData>({
    resolver: zodResolver(orderFormValidationSchema),
  })

  const { createOrder, removeItem, cartItems } = useCart()

  const { handleSubmit, reset } = orderForm

  const deleteAllCartItems = () => {
    cartItems.forEach((item) => removeItem(item.id))
  }

  const handleCreateOrder = (data: orderFormData) => {
    createOrder(data)
    deleteAllCartItems()
    reset()
  }

  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit(handleCreateOrder)}>
        <FormProvider {...orderForm}>
          <FormContainer>
            <OrderForm />
            <OrderInfo />
          </FormContainer>
        </FormProvider>
      </form>
    </CheckoutContainer>
  )
}
