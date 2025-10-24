import styled from 'styled-components'
import { Cores } from '../../styles'

export const FooterContainer = styled.footer`
  background-color: ${Cores.cinza};
  paddding: 32px 0px;
  font-size: 14px;
  color: ${Cores.cinza2};

  .container {
    display: flex;
  }
`
export const DarkSectionTitle = styled.h4`
  color: ${Cores.branco};
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 30px;
`
export const FooterLinks = styled.ul`
  display: flex;
  list-style: none;
  font-size: 14px;
`
export const FooterLink = styled.a`
  text-decoration: none;
  margin-right: 28px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`
export const SubDivFooter = styled.div`
  margin-bottom: 74px;
  border-left: 2px solid ${Cores.cinza2};
  padding-left: 25px;
`
