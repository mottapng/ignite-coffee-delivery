import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const CheckoutContainer = styled.div`
  margin-top: 2.5rem;

  h2 {
    ${mixins.fonts.titleXS}

    color: ${({ theme }) => theme['base-subtitle']};
  }
`

export const FormContainer = styled.div`
  display: flex;

  gap: 2rem;

  @media (max-width: 56.25rem) {
    flex-direction: column;
  }
`
