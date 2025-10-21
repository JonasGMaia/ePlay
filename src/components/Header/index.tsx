import { Container } from '../../styles'
import { HeaderBar, Links } from './styles'
import Logo from '../../assets/images/Logo.jpg'
const Header = () => (
  <HeaderBar>
    <Container>
      <div>
        <img src={Logo} alt="" />
        <h2>ePlay - Loja de Games</h2>
      </div>
      <nav>
        <Links>
          <li>
            <a href="#">Categorias</a>
          </li>
          <li>
            <a href="#">Novidades</a>
          </li>
          <li>
            <a href="#">Promoções</a>
          </li>
          <li>
            <a href="#">0 - itens</a>
          </li>
        </Links>
      </nav>
    </Container>
  </HeaderBar>
)

export default Header
