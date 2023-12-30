import styled from 'styled-components'
import { mixins } from '../../../../styles/mixins'

export const CatalogContainer = styled.div`
  margin: 2rem 0;

  h2 {
    ${mixins.fonts.titleL}

    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const CardsWrapper = styled.div`
  margin-top: 3.375rem;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 2.5rem;
`
