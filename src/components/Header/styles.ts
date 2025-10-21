import styled from 'styled-components'
import { Cores } from '../../styles'

export const HeaderBar = styled.header`
  padding: 50px 24px 0px 24px;
  text-align: left;
  img {
    max-height: 100px;
  }
  // border-top: 2px solid ${Cores.vermelho};

  div {
    padding-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
export const Links = styled.ul`
  display: flex;
  li {
    margin-right: 20px;
    a {
      text-decoration: none;
      color: ${Cores.cinza};
      padding: 20px;

      &:hover {
        background-color: ${Cores.vermelho};
        color: ${Cores.branco};
        border-radius: 3px;
      }
    }
  }
`
