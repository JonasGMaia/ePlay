import { ImagemBg } from './styles'
import gameBanner from '../../assets/images/gameBanner.jpg'
import Tag from '../Tag'
import Button from '../Button'
const Banner = () => (
  <ImagemBg style={{ backgroundImage: `url(${gameBanner})` }}>
    <div className="contraste">
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <h3>
          {' '}
          Novos Board Games - Lorem ipsum dolor sit amet consectetur <br />
        </h3>
        <p>
          De <span>R$ 250,00</span> <br />
          por apenas R$ 99,90
        </p>
      </div>
      <Button
        type="link"
        to="/produto"
        title="clique aqui para aproveitar esta oferta"
      >
        Aproveitar
      </Button>
    </div>
  </ImagemBg>
)
export default Banner
