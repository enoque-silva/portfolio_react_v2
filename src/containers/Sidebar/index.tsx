import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { Descricao, BotaoTema, SidebarContainer } from './styles'

type Props = {
  trocarTema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={24}>Enoque Ribeiro</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        enoque-silva
      </Paragrafo>
      <Descricao fontSize={12} tipo="principal">
        Engenheiro da Computação
      </Descricao>
      <Descricao fontSize={12} tipo="principal">
        Desenvolvedor Full Stack Python
      </Descricao>
      <BotaoTema onClick={props.trocarTema}>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
