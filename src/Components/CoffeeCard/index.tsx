import {
  BuyoutContainer,
  CoffeType,
  CoffeTypeContainer,
  CoffeeCardContainer,
  DescriptionContainer,
} from './styles'

import americanEspresso from '../../assets/american-espresso.png'
import { AddCart } from '../AddCart'
import { UnityQuantityControl } from '../UnityQuantityControl'

export function CoffeCard() {
  return (
    <CoffeeCardContainer>
      <img src={americanEspresso} alt="" />
      <CoffeTypeContainer>
        <CoffeType>
          <span>tradicional</span>
        </CoffeType>
      </CoffeTypeContainer>
      <DescriptionContainer>
        <h1>Expresso Americano</h1>
        <span>Expresso diluído, menos intenso que o tradicional</span>
      </DescriptionContainer>
      <BuyoutContainer>
        <span>
          R$ <strong>9,90</strong>
        </span>
        <div>
          <UnityQuantityControl />
          <AddCart />
        </div>
      </BuyoutContainer>
    </CoffeeCardContainer>
  )
}
