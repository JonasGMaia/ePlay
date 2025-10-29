import { useEffect, useState } from 'react'
import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

// const promocoes: Game[] = [
//   {
//     id: 1,
//     category: 'RPG',
//     description: 'teste teste teste teste',
//     title: 'Nome do Jogo',
//     system: 'D&D',
//     infos: ['10%', 'R$ 153,90'],
//     image: ''
//   },
//   {
//     id: 2,
//     category: 'RPG',
//     description: 'teste teste teste teste',
//     title: 'Nome do Jogo',
//     system: 'D&D',
//     infos: ['10%', 'R$ 153,90'],
//     image: ''
//   },
//   {
//     id: 3,
//     category: 'RPG',
//     description: 'teste teste teste teste',
//     title: 'Nome do Jogo',
//     system: 'D&D',
//     infos: ['10%', 'R$ 153,90'],
//     image: ''
//   },
//   {
//     id: 4,
//     category: 'RPG',
//     description: 'teste teste teste teste',
//     title: 'Nome do Jogo',
//     system: 'D&D',
//     infos: ['10%', 'R$ 153,90'],
//     image: ''
//   }
// ]

// const emBreve: Game[] = [
//   {
//     id: 5,
//     category: 'RPG',
//     description: 'teste teste teste teste',
//     title: 'Nome do Jogo',
//     system: 'D&D',
//     infos: ['10%', 'R$ 153,90'],
//     image: ''
//   },
//   {
//     id: 6,
//     category: 'RPG',
//     description: 'teste teste teste teste',
//     title: 'Nome do Jogo',
//     system: 'D&D',
//     infos: ['10%', 'R$ 153,90'],
//     image: ''
//   },
//   {
//     id: 7,
//     category: 'RPG',
//     description: 'teste teste teste teste',
//     title: 'Nome do Jogo',
//     system: 'D&D',
//     infos: ['10%', 'R$ 153,90'],
//     image: ''
//   },
//   {
//     id: 8,
//     category: 'RPG',
//     description: 'teste teste teste teste',
//     title: 'Nome do Jogo',
//     system: 'D&D',
//     infos: ['10%', 'R$ 153,90'],
//     image: ''
//   }
// ]

export interface GalleryContent {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    system: string
    category: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryContent[]
  }
}

const Home = () => {
  const [promocoes, setPromocoes] = useState<Game[]>([])
  const [emBreve, setEmBreve] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/eplay/promocoes')
      .then((res) => res.json())
      .then((res) => setPromocoes(res))

    fetch('https://api-ebac.vercel.app/api/eplay/em-breve')
      .then((res) => res.json())
      .then((res) => setEmBreve(res))
  }, [])

  return (
    <>
      <Banner />
      <ProductsList
        games={promocoes}
        title={'Lançamentos'}
        background={'white'}
      />
      <ProductsList games={emBreve} title={'Em Breve'} background={'gray'} />
    </>
  )
}

export default Home
