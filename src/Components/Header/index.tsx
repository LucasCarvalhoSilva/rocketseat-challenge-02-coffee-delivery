import { HeaderContainer, LocationContainer } from './styles'
import logo from '../../assets/logo.svg'
import { MapPin } from 'phosphor-react'
import { Cart } from '../Cart'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="home">
        <img src={logo} alt="" />
      </NavLink>

      <nav>
        <LocationContainer>
          <MapPin weight="fill" size={22} />
          <span>Porto Alegre, RS</span>
        </LocationContainer>
        <Cart isEmpty={true} />
      </nav>
    </HeaderContainer>
  )
}
