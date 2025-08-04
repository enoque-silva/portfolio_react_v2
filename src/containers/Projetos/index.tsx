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
          urlBotao="https://landing-page-interistelar.vercel.app/"
          urlBotaoSecundario="https://github.com/enoque-silva/landing_page_interistelar"
        />
      </li>
      <li>
        <Projeto
          imagem="/images/imgCalculadoraIMCReact.png"
          titulo="Projeto - Calculadora IMC com React"
          descricao="Aplicação web desenvolvida em React para calcular o
          Índice de Massa Corporal (IMC) de forma rápida e intuitiva,
          exibindo o resultado e a classificação de acordo com a faixa de peso."
          urlBotao="https://calculadora-imc-react-js-exercicio.vercel.app/"
          urlBotaoSecundario="https://github.com/enoque-silva/calculadoraIMC_ReactJS_exercicio"
        ></Projeto>
      </li>
      <li>
        <Projeto
          imagem="/images/imgCalculadoraVueJS.png"
          titulo="Projeto - Calculadora VueJS"
          descricao="Calculadora Web desenvolvida com Vue.js,
          permitindo realizar operações matemáticas básicas de
          forma rápida e intuitiva, com interface simples e responsiva."
          urlBotao="https://calcul-exercicio-vue-js.vercel.app/"
          urlBotaoSecundario="https://github.com/enoque-silva/calcul_exercicio_VueJS"
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
          urlBotao="https://landing-page-evento-aniversario-ruddy.vercel.app/"
          urlBotaoSecundario="https://github.com/enoque-silva/landing_page_evento"
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
          urlBotao="https://todo-vue-project-coral.vercel.app/"
          urlBotaoSecundario="https://github.com/enoque-silva/todo-vue-project"
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
          urlBotao="https://exercicio-ajax-rust-beta.vercel.app/"
          urlBotaoSecundario="https://github.com/enoque-silva/exercicio_ajax"
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
          urlBotao="https://projeto-clone-landing-page-disney-plus.vercel.app/"
          urlBotaoSecundario="https://github.com/enoque-silva/projeto_landing_page_disney_plus"
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
          urlBotao="https://sorteador-grunt-enoqueribeiro.vercel.app/"
          urlBotaoSecundario="https://github.com/enoque-silva/sorteador_grunt"
        />
      </li>
    </Lista>
  </section>
)

export default Projetos
