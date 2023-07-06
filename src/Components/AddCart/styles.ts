import styled from 'styled-components'

export const AddCartContainer = styled.button`
  height: 2.375rem;
  width: 2.375rem;
  border-radius: 6px;
  padding: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme['base-card']};
  border: 0;
  &:hover {
    background-color: ${(props) => props.theme.purple};
    cursor: pointer;
  }
`
