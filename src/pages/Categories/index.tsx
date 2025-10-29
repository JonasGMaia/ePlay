import { useEffect, useState } from 'react'
import ProductsList from '../../components/ProductsList'
import { Game } from '../Home'

// const promocoes: Game[] = []

// const emBreve: Game[] = []

const Categories = () => {
  const [gameAcao, setGameAcao] = useState<Game[]>([])
  const [gameEsporte, setGameEsporte] = useState<Game[]>([])
  const [gameSimulacao, setGameSimulacao] = useState<Game[]>([])
  const [gameRPG, setGameRPG] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/eplay/acao')
      .then((res) => res.json())
      .then((res) => setGameAcao(res))

    fetch('https://api-ebac.vercel.app/api/eplay/esportes')
      .then((res) => res.json())
      .then((res) => setGameEsporte(res))

    fetch('https://api-ebac.vercel.app/api/eplay/simulacao')
      .then((res) => res.json())
      .then((res) => setGameSimulacao(res))

    fetch('https://api-ebac.vercel.app/api/eplay/rpg')
      .then((res) => res.json())
      .then((res) => setGameRPG(res))
  })

  return (
    <>
      <ProductsList games={gameAcao} title={'Ação'} background={'white'} />
      <ProductsList
        games={gameEsporte}
        title={'Esportes'}
        background={'gray'}
      />
      <ProductsList
        games={gameSimulacao}
        title={'Simulação'}
        background={'white'}
      />
      <ProductsList games={gameRPG} title={'RPG'} background={'gray'} />
    </>
  )
}

export default Categories
