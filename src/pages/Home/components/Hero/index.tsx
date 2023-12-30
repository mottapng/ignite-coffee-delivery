import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { Background, HeroContainer, Icon, LeftSide, RightSide } from './styles'

export const Hero = () => {
  return (
    <HeroContainer>
      <Background>
        <img src="/background.png" alt="" />
      </Background>
      <LeftSide>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>

        <div>
          <div>
            <Icon color="yellow-dark">
              <ShoppingCart weight="fill" size={16} />
            </Icon>
            <span>Compra simples e segura</span>
          </div>
          <div>
            <Icon color="base-text">
              <Package weight="fill" size={16} />
            </Icon>
            <span>Embalagem mantém o café intacto</span>
          </div>
          <div>
            <Icon color="yellow">
              <Timer weight="fill" size={16} />
            </Icon>
            <span>Entrega rápida e rastreada</span>
          </div>
          <div>
            <Icon color="purple">
              <Coffee weight="fill" size={16} />
            </Icon>
            <span>O café chega fresquinho até você</span>
          </div>
        </div>
      </LeftSide>
      <RightSide>
        <img src="/hero.png" alt="" />
      </RightSide>
    </HeroContainer>
  )
}
