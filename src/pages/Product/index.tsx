import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import GeneralSection from '../../components/GeneralSection'
import Gallery from '../../components/Gallery'
import Logo from '../../assets/images/Logo.jpg'
import { useEffect, useState } from 'react'
import { Game } from '../Home'

const Product = () => {
  const { id } = useParams()

  const [game, setGame] = useState<Game>()

  useEffect(() => {
    fetch(`https://api-ebac.vercel.app/api/eplay/jogos/${id}`)
      .then((res) => res.json())
      .then((res) => setGame(res))
  }, [id])

  if (!game) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Hero game={game} />
      <GeneralSection title="Sobre o jogo" background="black">
        <p>{game.description}</p>
      </GeneralSection>
      <Gallery
        name={game.name}
        defaultCover={game.media.cover}
        items={game.media.gallery}
      />
      <GeneralSection title="Mais detalhes" background="gray">
        <p>
          <b>Plataforma:</b> {game.details.system} <br />
          <b>Desenvolvedor:</b> {game.details.developer} <br />
          <b>Editora</b> {game.details.publisher} <br />
          <b>Idiomas:</b> Suporte inclui: {game.details.languages.join(', ')}
        </p>
      </GeneralSection>
    </>
  )
}

export default Product
