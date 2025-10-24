import styled from 'styled-components'
import { Cores } from '../../styles'

export const HeaderBar = styled.header`
  padding: 30px 24px 0px 24px;
  text-align: left;
  img {
    max-height: 100px;
  }
  .container {
    padding-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .homeCabecalho {
      display: flex;
      align-items: center;
    }

    a {
      link-style: none;
      text-decoration: none;
      color: ${Cores.cinza};
    }
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
      transition-property: all;
      transition-duration: 0.5s;

      &:hover {
        background-color: ${Cores.vermelho};
        color: ${Cores.branco};
        border-radius: 8px;
      }
    }
  }
`
