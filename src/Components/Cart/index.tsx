import { ShoppingCart } from 'phosphor-react'
import { ProductsQuantityContainer, ShoppingCartContainer } from './styles'
import { NavLink } from 'react-router-dom'

interface CartProps {
  isEmpty: boolean
}

export function Cart({ isEmpty }: CartProps) {
  return (
    <NavLink to="/checkout" title="checkout">
      <ShoppingCartContainer>
        <ShoppingCart weight="fill" size={22} />
      </ShoppingCartContainer>
      {!isEmpty ? (
        <ProductsQuantityContainer>
          <span>3</span>
        </ProductsQuantityContainer>
      ) : (
        <div></div>
      )}
    </NavLink>
  )
}
