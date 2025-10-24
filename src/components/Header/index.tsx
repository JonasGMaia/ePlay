import { Link } from 'react-router-dom'
import { Container } from '../../styles'
import { HeaderBar, Links } from './styles'
import Logo from '../../assets/images/Logo.jpg'

const Header = () => (
  <HeaderBar>
    <div className="container">
      <Link to="/">
        <div className="homeCabecalho">
          <img src={Logo} alt="" />
          <h2>ePlay</h2>
          <p>Games</p>
        </div>
      </Link>
      <nav>
        <Links>
          <li>
            <Link to="/categories">Categorias</Link>
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
    </div>
  </HeaderBar>
)

export default Header
