import { Minus, Plus } from 'phosphor-react'

import { InputNumberContainer } from './styles'

interface InputNumberProps {
  count: number
  increment: () => void
  decrement: () => void
}

export const InputNumber = ({
  count,
  increment,
  decrement,
}: InputNumberProps) => {
  return (
    <InputNumberContainer>
      <button onClick={decrement}>
        <Minus size={14} weight="bold" />
      </button>
      <span>{count}</span>
      <button onClick={increment}>
        <Plus size={14} weight="bold" />
      </button>
    </InputNumberContainer>
  )
}
