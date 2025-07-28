import Paragrafo from '../Paragrafo'
import { Titulo } from '../Titulo/styles'
import { Card, LinkBotao } from './styles'

const Projeto = () => (
  <Card>
    <Titulo>Calculadora IMC</Titulo>
    <Paragrafo tipo="secundario">
      Calculadora IMC desenvolvida com React.
    </Paragrafo>
    <LinkBotao>Visualizar</LinkBotao>
  </Card>
)

export default Projeto
