import { BulletContainer, colors } from './styles'
import { IconProps } from 'phosphor-react'

interface BulletProps {
  bgColor: colors
  icon: IconProps
}

export function Bullet({ bgColor, icon }: BulletProps) {
  return (
    <BulletContainer bgColor={bgColor}>
      <>{icon}</>
    </BulletContainer>
  )
}
