import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  width: 16rem;
  height: 19.375rem;

  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  background: ${(props) => props.theme['base-card']};

  img {
    width: 7.5rem;
    height: 7.5rem;
    position: relative;
    top: -1.25rem;
  }
`

export const CoffeTypeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
`
export const CoffeType = styled.div`
  height: 1.3125rem;
  padding: 0.25rem 0.5rem;
  background: ${(props) => props.theme['yellow-light']};
  border-radius: 6.25rem;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    color: ${(props) => props.theme['yellow-dark']};
    font-size: 0.625rem;
    text-transform: uppercase;
  }
`

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 13.75rem;
  gap: 0.5rem;
  margin-top: 1.25rem;

  h1 {
    color: ${(props) => props.theme['base-subtitle']};
    font-family: 'Baloo 2', cursive;
    font-size: 1.25rem;
    font-weight: 700;
    text-align: center;
  }

  span {
    color: ${(props) => props.theme['base-label']};
    font-size: 0.875rem;
    text-align: center;
  }
`

export const BuyoutContainer = styled.div`
  display: flex;
  width: 13rem;
  justify-content: space-between;
  align-content: center;
  margin-top: 2.06rem;

  span {
    font-size: 0.875rem;
    align-self: center;

    strong {
      font-size: 1.25rem;
      font-weight: 700;
      color: ${(props) => props.theme['base-title']};
    }
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
`
