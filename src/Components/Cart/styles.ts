import styled from 'styled-components'

export const ShoppingCartContainer = styled.div`
  height: 2.375rem;
  width: 2.375rem;
  border-radius: 6px;
  padding: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  border: 0;
`

export const ProductsQuantityContainer = styled.div`
  height: 1.25rem;
  width: 1.25rem;
  border-radius: 99%;
  background-color: ${(props) => props.theme['yellow-dark']};
  position: relative;
  top: -3rem;
  left: 1.75rem;
  text-align: center;

  display: hidden;

  span {
    position: relative;
    top: -2px;
    font-size: 0.75rem;
    color: ${(props) => props.theme.white};
  }
`
