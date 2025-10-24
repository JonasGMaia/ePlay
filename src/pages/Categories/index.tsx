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

const Categories = () => (
  <>
    <ProductsList games={promocoes} title={'RPG'} background={'white'} />
    <ProductsList games={emBreve} title={'Mistério'} background={'gray'} />
    <ProductsList games={promocoes} title={'Estratégia'} background={'white'} />
    <ProductsList games={emBreve} title={'Party Games'} background={'gray'} />
  </>
)

export default Categories
