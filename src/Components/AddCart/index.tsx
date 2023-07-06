import { ShoppingCart } from 'phosphor-react'
import { AddCartContainer } from './styles'

export function AddCart() {
  return (
    <AddCartContainer>
      <ShoppingCart size={22} weight="fill" />
    </AddCartContainer>
  )
}
