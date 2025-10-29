import styled from 'styled-components'
import { Cores } from '../../styles'

export const Banner = styled.div`
  position: relative;
  height: 480px;
  display: block;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  color: ${Cores.branco};
  padding-top: 16px;

  &::after {
    position: absolute;
    background-color: ${Cores.preto};
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    opacity: 0.56;
  }

  .container {
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }
`
export const Infos = styled.div`
  padding: 16px;
  background-color: ${Cores.preto};
  max-width: 290px;
  font-weight: bold;
  border-radius: 8px 8px 0 0;

  h2 {
    font-size: 32px;
  }

  p {
    font-size: 18px;
    margin: 16px 0;

    span {
      display: block;
      text-decoration: line-through;
    }
  }
`
