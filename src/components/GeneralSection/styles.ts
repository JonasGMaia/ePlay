import styled from 'styled-components'
import { Props } from '.'
import { Cores } from '../../styles'

export const Section = styled.section<Omit<Props, 'title' | 'games'>>`
  padding: 32px 0;
  height: auto;
  background-color: ${(props) =>
    props.background === 'black' ? Cores.preto : Cores.cinza};
  color: ${(props) =>
    props.background === 'black' ? Cores.branco : Cores.cinza2};

  p {
    font-size: 16px;
    line-height: 22px;
    max-width: 640px;
  }
  }
`
export const Title = styled.h2`
  font-size: 18px;
  font-weight; bold;
  margin-bottom: 40px;
`
