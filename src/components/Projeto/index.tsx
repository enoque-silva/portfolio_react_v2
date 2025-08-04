import Paragrafo from '../Paragrafo'
import { Titulo } from '../Titulo/styles'
import { Card, LinkBotao, ImagemPost, LinkBotaoSecundario } from './styles'

interface ProjetoProps {
  imagem?: string
  titulo?: string
  descricao?: string
  urlBotao?: string
  urlBotaoSecundario?: string
}

const Projeto = ({
  imagem = 'https://placehold.jp/300x150.png',
  titulo = 'Título padrão',
  descricao = 'Descrição padrão do projeto.',
  urlBotao = '#',
  urlBotaoSecundario = '#'
}: ProjetoProps) => (
  <Card>
    <ImagemPost src={imagem} alt={titulo} />
    <Titulo>{titulo}</Titulo>
    <Paragrafo tipo="secundario">{descricao}</Paragrafo>
    <LinkBotao href={urlBotao} target="_blank">
      Visualizar
    </LinkBotao>
    <LinkBotaoSecundario href={urlBotaoSecundario} target="_blank">
      GitHub
    </LinkBotaoSecundario>
  </Card>
)

export default Projeto
