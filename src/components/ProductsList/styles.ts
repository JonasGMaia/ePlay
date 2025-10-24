import styled from 'styled-components'
import { Props } from '.'
import { Cores } from '../../styles'

export const Section = styled.section<Omit<Props, 'title' | 'games'>>`
  padding: 32px 0;
  height: 100vh;
  background-color: ${(props) =>
    props.background === 'white' ? Cores.branco : Cores.cinza};
  h2 {
    color: ${(props) =>
      props.background === 'white' ? Cores.cinza : Cores.branco};
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 24px;
  margin-top: 40px;
`
export const Title = styled.h2`
  font-size: 18px;
  font-weight; bold;
`
