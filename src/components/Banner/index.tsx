import { ImagemBg } from './styles'
import gameBanner from '../../assets/images/gameBanner.jpg'
import Tag from '../Tag'
import Button from '../Button'
import { useEffect, useState } from 'react'
import { Game } from '../../pages/Home'
import { formataPreco } from '../ProductsList'

const Banner = () => {
  const [game, setGame] = useState<Game>()

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/eplay/destaque')
      .then((res) => res.json())
      .then((res) => setGame(res))
  }, [])

  if (!game) {
    return <h3>Carregando...</h3>
  }

  return (
    <ImagemBg style={{ backgroundImage: `url(${game?.media.cover})` }}>
      <div className="contraste">
        <div className="container">
          <Tag size="big">Destaque do dia</Tag>
          <h3>{game.name}</h3>
          <p>
            De <span>{formataPreco(game.prices.old)}</span> <br />
            por apenas {formataPreco(game.prices.current)}
          </p>
        </div>
        <Button
          type="link"
          to={`/produto/${game.id}`}
          title="clique aqui para aproveitar esta oferta"
        >
          Aproveitar
        </Button>
      </div>
    </ImagemBg>
  )
}
export default Banner
