import { Minus, Plus } from 'phosphor-react'

import { useState } from 'react'
import { InputNumberContainer } from './styles'

export const InputNumber = () => {
  const [count, setCount] = useState(1)

  const increment = () => {
    if (count < 99) {
      setCount((prevCount) => prevCount + 1)
    }
  }

  const decrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1)
    }
  }

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
