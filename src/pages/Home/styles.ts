import styled from 'styled-components'

export const HeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 34rem;
  width: auto;

  div {
    width: 36.75rem;
    display: flex;
    flex-direction: column;

    h1 {
      font-family: 'Baloo 2', cursive;
      color: ${(props) => props.theme['base-title']};
      font-size: 3rem;
      font-weight: 800;
      line-height: 130%;
      margin-bottom: 1rem;
    }

    p {
      color: ${(props) => props.theme['base-subtitle']};
      font-size: 1.25rem;
      line-height: 130%;
      margin-bottom: 4.12rem;
    }
    div {
      display: flex;
      flex-direction: column;
      width: 37rem;
      gap: 1.25rem;

      div {
        display: flex;
        flex-direction: row;
        gap: 0.1rem;
        height: 2rem;

        div {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 0.75rem;
        }
      }
    }
  }
`

export const CoffeeListTitle = styled.h3`
  h3 {
    color: ${(props) => props.theme['base-subtitle']};
    font-family: 'Baloo 2', cursive;
    font-size: 2rem;
    line-height: 130%;
    font-weight: 800;
    margin-top: 2rem;
  }
`

export const CoffeeListContainer = styled.section`
  margin-top: 3.4rem;
  margin-bottom: 10rem;
  max-width: 70rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`
