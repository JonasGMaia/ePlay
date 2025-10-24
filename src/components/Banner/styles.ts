import styled from 'styled-components'
import { Cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const ImagemBg = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-size: cover;
  background-position: center;
  backgorund-repeat: no-repeat;

  .container {
    position: relative;
  }

  .contraste {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  ${TagContainer} {
    position: absolute;
    top: -280px;
  }

  h3,
  p {
    color: ${Cores.branco};
    padding: 20px;
    width: 100%;
    font-weight: bold;

    span {
      text-decoration: line-through;
    }
  }
`
