import styled from 'styled-components'
import { Cores } from '../../styles'
import { Link } from 'react-router-dom'

export const ButtonContainer = styled.button`
  border: 2px solid ${Cores.branco};
  color: ${Cores.branco};
  background-color: transparent;
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
