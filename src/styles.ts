import styled, { createGlobalStyle } from 'styled-components'

export const Cores = {
  cinza: '#333',
  cinza2: '#9faac2ff',
  preto: '#111',
  branco: '#fff',
  vermelho: '#c20303ff'
}

export const GlobalCss = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
}

body{
  background-color: ${Cores.branco};
  color: ${Cores.cinza};
}

.container{
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  }
  .contraste{
  background: linear-gradient( rgba(0, 0, 0, 0), ${Cores.preto});
  }
`
export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`
