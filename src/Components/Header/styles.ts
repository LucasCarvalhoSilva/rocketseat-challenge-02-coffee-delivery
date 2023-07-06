import styled from 'styled-components'

export const HeaderContainer = styled.div`
  height: 6.5rem;
  padding: 2rem 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.75rem;
  }
`

export const LocationContainer = styled.div`
  height: 2.375rem;
  border-radius: 6px;
  padding: 0.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};

  font-size: 0.875rem;
  border: 0;
`
