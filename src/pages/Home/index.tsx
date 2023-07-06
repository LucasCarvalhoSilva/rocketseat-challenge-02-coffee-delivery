import { CoffeCard } from '../../Components/CoffeeCard'
import { CoffeeListContainer, CoffeeListTitle, HeroContainer } from './styles'
import coffeCupImagem from '../../assets/coffe-cup-image.png'
import { ShoppingCart, Package, Coffee, Timer } from 'phosphor-react'
import { Bullet } from '../../Components/Bullet'

export function Home() {
  return (
    <>
      <HeroContainer>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <div>
            <div>
              <div>
                <Bullet
                  bgColor="yellow-dark"
                  icon={<ShoppingCart weight="fill" size={16} />}
                />
                <span>Compra simples e segura</span>
              </div>
              <div>
                <Bullet
                  bgColor="base-text"
                  icon={<Package weight="fill" size={16} />}
                />
                <span>Embalagem mantém o café intacto</span>
              </div>
            </div>
            <div>
              <div>
                <Bullet
                  bgColor="yellow"
                  icon={<Timer weight="fill" size={16} />}
                />
                <span>Entrega rápida e rastreada</span>
              </div>
              <div>
                <Bullet
                  bgColor="purple"
                  icon={<Coffee weight="fill" size={16} />}
                />
                <span>O café chega fresquinho até você</span>
              </div>
            </div>
          </div>
        </div>

        <img src={coffeCupImagem} alt="" />
      </HeroContainer>
      <CoffeeListTitle>Nossos cafés</CoffeeListTitle>
      <CoffeeListContainer>
        <CoffeCard />
        <CoffeCard />
        <CoffeCard />
        <CoffeCard />
        <CoffeCard />
        <CoffeCard />
        <CoffeCard />
        <CoffeCard />
        <CoffeCard />
        <CoffeCard />
        <CoffeCard />
        <CoffeCard />
        <CoffeCard />
        <CoffeCard />
      </CoffeeListContainer>
    </>
  )
}
