import styled from 'styled-components'
import { Cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { Link } from 'react-router-dom'

export const Card = styled(Link)`
  background-color: ${Cores.cinza2};
  border-radius: 8px;
  max-width: 222px;
  position: relative;
  text-decoration: none;
  color: ${Cores.cinza};
  display: block;

  img {
    display: block;
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 8px 8px 0px 0px;
  }

  ${TagContainer} {
    margin: 8px;
    font-size: 12px;
  }
`
export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
  padding: 8px;
`
export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
  padding: 8px;
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: 12px;
`
