import styled from 'styled-components'
import { Cores } from '../../styles'
import { Link } from 'react-router-dom'
import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  border: 2px solid
    ${(props) => (props.variant === 'primary' ? Cores.branco : Cores.vermelho)};
  color: ${Cores.branco};
  background-color: ${(props) =>
    props.variant === 'primary' ? 'transparent' : Cores.vermelho};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 8px;
  margin: 20px;
`
export const ButtonLink = styled(Link)`
  border: 2px solid ${Cores.branco};
  color: ${Cores.branco};
  background-color: transparent;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 8px;
  margin: 20px;

  &:hover {
    color: ${Cores.branco};
    background-color: ${Cores.cinza2};
  }
`
