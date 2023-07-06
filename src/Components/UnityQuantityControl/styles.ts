import styled from 'styled-components'

export type heightDimension = 'big' | 'small'

const heightDimensions = {
  big: 2.375,
  small: 2,
}

interface UnityControlProps {
  heightDimension: heightDimension
}

export const UnityControlContainer = styled.div<UnityControlProps>`
  width: 4.5rem;
  height: ${(props) => heightDimensions[props.heightDimension]}rem;
  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;

  button {
    color: ${(props) => props.theme.purple};
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) => props.theme['base-button']};
    &:hover {
      color: ${(props) => props.theme['purple-dark']};
      cursor: pointer;
    }
  }

  span {
    color: ${(props) => props.theme['base-title']};
  }
`
