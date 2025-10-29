import { Section, Title } from './styles'

export type Props = {
  title: string
  background: 'black' | 'gray'
  children: JSX.Element
}

const GeneralSection = ({ title, background, children }: Props) => (
  <Section background={background}>
    <div className="container">
      <Title>{title}</Title>
      {children}
    </div>
  </Section>
)

export default GeneralSection
