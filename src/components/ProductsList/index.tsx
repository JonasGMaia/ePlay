import Game from '../../models/Game'
import Product from '../Product'
import { List, Section } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'white'
  games: Game[]
}

const ProductsList = ({ background, title, games }: Props) => (
  <Section background={background}>
    <div className="container">
      <h2>{title}</h2>
      <List>
        {games.map((game) => (
          <Product
            key={game.id}
            category={game.category}
            description={game.description}
            image="//placehold.co/222x250" //{game.image}
            infos={game.infos}
            system={game.system}
            title={game.title}
          />
        ))}
      </List>
    </div>
  </Section>
)

export default ProductsList
