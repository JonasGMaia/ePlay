import {
  DarkSectionTitle,
  FooterContainer,
  FooterLink,
  FooterLinks,
  SubDivFooter
} from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <FooterContainer>
    <div className="container">
      <SubDivFooter>
        <DarkSectionTitle>Categorias</DarkSectionTitle>
        <FooterLinks>
          <li>
            <FooterLink>RPG</FooterLink>
          </li>
          <li>
            <FooterLink>Mistério</FooterLink>
          </li>
          <li>
            <FooterLink>Estratégia</FooterLink>
          </li>
          <li>
            <FooterLink>Party Games</FooterLink>
          </li>
        </FooterLinks>
      </SubDivFooter>
      <SubDivFooter>
        <DarkSectionTitle>Acesso rápido</DarkSectionTitle>
        <FooterLinks>
          <li>
            <FooterLink>Promoções</FooterLink>
          </li>
          <li>
            <FooterLink>Novidades</FooterLink>
          </li>
          <li>
            <FooterLink>Em Breve</FooterLink>
          </li>
          <li>
            <FooterLink>Fale Conosco</FooterLink>
          </li>
        </FooterLinks>
      </SubDivFooter>
    </div>
    <div className="container">
      <p>{currentYear} - &copy; ePlay Todos os direitos reservados</p>
    </div>
  </FooterContainer>
)

export default Footer
