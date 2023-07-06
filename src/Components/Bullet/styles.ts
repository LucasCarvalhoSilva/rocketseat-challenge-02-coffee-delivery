import styled from 'styled-components'

export type colors = 'yellow' | 'yellow-dark' | 'base-text' | 'purple'

interface BulletProps {
  bgColor: colors
}

export const BulletContainer = styled.div<BulletProps>`
  height: 2rem;
  max-width: 2rem;
  border-radius: 1rem;
  background: ${(props) => props.theme[props.bgColor]};
  padding: 0.5rem;
  color: ${(props) => props.theme.white};
`
