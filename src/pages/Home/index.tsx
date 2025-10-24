import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'RPG',
    description: 'teste teste teste teste',
    title: 'Nome do Jogo',
    system: 'D&D',
    infos: ['10%', 'R$ 153,90'],
    image: ''
  },
  {
    id: 2,
    category: 'RPG',
    description: 'teste teste teste teste',
    title: 'Nome do Jogo',
    system: 'D&D',
    infos: ['10%', 'R$ 153,90'],
    image: ''
  },
  {
    id: 3,
    category: 'RPG',
    description: 'teste teste teste teste',
    title: 'Nome do Jogo',
    system: 'D&D',
    infos: ['10%', 'R$ 153,90'],
    image: ''
  },
  {
    id: 4,
    category: 'RPG',
    description: 'teste teste teste teste',
    title: 'Nome do Jogo',
    system: 'D&D',
    infos: ['10%', 'R$ 153,90'],
    image: ''
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'RPG',
    description: 'teste teste teste teste',
    title: 'Nome do Jogo',
    system: 'D&D',
    infos: ['10%', 'R$ 153,90'],
    image: ''
  },
  {
    id: 6,
    category: 'RPG',
    description: 'teste teste teste teste',
    title: 'Nome do Jogo',
    system: 'D&D',
    infos: ['10%', 'R$ 153,90'],
    image: ''
  },
  {
    id: 7,
    category: 'RPG',
    description: 'teste teste teste teste',
    title: 'Nome do Jogo',
    system: 'D&D',
    infos: ['10%', 'R$ 153,90'],
    image: ''
  },
  {
    id: 8,
    category: 'RPG',
    description: 'teste teste teste teste',
    title: 'Nome do Jogo',
    system: 'D&D',
    infos: ['10%', 'R$ 153,90'],
    image: ''
  }
]

const Home = () => (
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

export default Home
