import { Catalog } from './components/Catalog'
import { Hero } from './components/Hero'
import { HomeContainer } from './styles'

export const Home = () => {
  return (
    <HomeContainer>
      <Hero />
      <Catalog />
    </HomeContainer>
  )
}
