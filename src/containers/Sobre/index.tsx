import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={20}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Sou graduando em Engenharia da Computação e entusiasta em criar
      experiências digitais que unem design, funcionalidade e performance. Em
      formação em Desenvolvimento Fullstack pela EBAC, atuo na construção de
      interfaces modernas e responsivas, sempre com foco na usabilidade e na
      experiência do usuário.
    </Paragrafo>
    <br />
    <Paragrafo tipo="principal">
      Tenho facilidade em aprender novas tecnologias, trabalhar em equipe e
      transformar desafios em soluções criativas. Meu objetivo é contribuir para
      projetos inovadores, entregando resultados que gerem impacto real para
      empresas e usuários.
    </Paragrafo>

    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=enoque-silva&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=enoque-silva&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
