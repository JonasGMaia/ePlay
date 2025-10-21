import styled, { createGlobalStyle } from 'styled-components'

export const Cores = {
  cinza: '#333',
  preto: '#111',
  branco: '#fff',
  vermelho: '#e70606ff'
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
`
export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`
