import { Card } from '../../../../components/Card/Catalog'
import { coffees } from '../../../../constants/coffees'
import { CardsWrapper, CatalogContainer } from './styles'

export const Catalog = () => {
  return (
    <CatalogContainer>
      <h2>Nossos Cafés</h2>
      <CardsWrapper>
        {coffees.map((coffee) => (
          <Card
            key={coffee.id}
            id={coffee.id}
            name={coffee.name}
            description={coffee.description}
            price={coffee.price}
            image={coffee.image}
            tags={coffee.tags}
          />
        ))}
      </CardsWrapper>
    </CatalogContainer>
  )
}
