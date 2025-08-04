import Projeto from '../../components/Projeto'
import Titulo from '../../components/Titulo'
import { Lista } from './styles'

const Projetos = () => (
  <section>
    <Titulo fontSize={20}>Projetos</Titulo>
    <Lista>
      <li>
        <Projeto
          imagem="/images/imgInterstellar.png"
          titulo="Projeto - Landing Page Interstelar"
          descricao="Landing page temática com design inspirado
          no espaço e elementos interplanetários, desenvolvida
          com HTML, SCSS e JavaScript. Apresenta conteúdo
          visual impactante e interações dinâmicas"
          urlBotao="#"
        />
      </li>
      <li>
        <Projeto
          imagem="/images/imgCalculadoraIMCReact.png"
          titulo="Projeto - Calculadora IMC com React"
          descricao="Aplicação web desenvolvida em React para calcular o
          Índice de Massa Corporal (IMC) de forma rápida e intuitiva,
          exibindo o resultado e a classificação de acordo com a faixa de peso."
          urlBotao="#"
        ></Projeto>
      </li>
      <li>
        <Projeto
          imagem="/images/imgCalculadoraVueJS.png"
          titulo="Projeto - Calculadora VueJS"
          descricao="Calculadora Web desenvolvida com Vue.js,
          permitindo realizar operações matemáticas básicas de
          forma rápida e intuitiva, com interface simples e responsiva."
          urlBotao="#"
        />
      </li>
      <li>
        <Projeto
          imagem="/images/imgProjetoEvento.png"
          titulo="Projeto - Página de evento fictício"
          descricao="Página de evento comemorativo desenvolvida com
          HTML, SCSS e JavaScript, criada para apresentar as
          informações do meu aniversário fictício. Inclui detalhes
          como data, horário, local, atrações e contagem regressiva,
          com layout responsivo e visual moderno."
          urlBotao="#"
        />
      </li>
      <li>
        <Projeto
          imagem="/images/imgToDo.png"
          titulo="Projeto - ToDo List com VueJS"
          descricao="Aplicação de lista de tarefas (ToDo List)
          desenvolvida com Vue.js, HTML e JavaScript. Permite
          adicionar, marcar como concluída e remover tarefas
          de forma dinâmica e reativa, com interface simples
          e intuitiva para organizar atividades diárias."
          urlBotao="#"
        />
      </li>
      <li>
        <Projeto
          imagem="/images/imgGitHubAJAX.png"
          titulo="Projeto - Perfil GitHub com AJAX"
          descricao="Aplicação web que consome a API pública
          do GitHub usando AJAX para buscar e exibir informações
          do perfil do usuário, como nome, foto, repositórios e
          estatísticas. Desenvolvida com HTML, JavaScript e CSS,
          a página atualiza os dados dinamicamente."
          urlBotao="#"
        />
      </li>
      <li>
        <Projeto
          imagem="/images/imgDisney.png"
          titulo="Projeto - Clone da Página DisneyPlus"
          descricao="Projeto clone da página principal da DisneyPlus,
          desenvolvido com HTML, SCSS e JavaScript. Reproduz a
          estrutura visual, layout responsivo e elementos interativos
          da plataforma de streaming, focando em design fiel e usabilidade."
          urlBotao="#"
        />
      </li>
      <li>
        <Projeto
          imagem="/images/imgSorteador.png"
          titulo="Projeto - Sorteador Grunt"
          descricao="Aplicação web de sorteio desenvolvida com JavaScript,
          HTML, Less e CSS. Utiliza automação de tarefas com Grunt para
          otimizar o fluxo de desenvolvimento, permitindo gerar números ou
          itens sorteados de forma rápida e interativa, com layout responsivo."
          urlBotao="#"
        />
      </li>
    </Lista>
  </section>
)

export default Projetos
