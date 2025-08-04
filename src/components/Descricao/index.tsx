import { DescricaoStyle } from './styles'

export type Props = {
  children: string
  fontSize?: number
}

const Descricao = ({ children, fontSize }: Props) => (
  <DescricaoStyle fontSize={fontSize}>{children}</DescricaoStyle>
)

export default Descricao
