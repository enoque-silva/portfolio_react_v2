import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={20}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nesciunt
      aliquid hic corrupti nisi ipsam veritatis perspiciatis harum facere!
      Maiores veniam itaque ex nisi! Delectus placeat excepturi dicta quod
      accusantium.
    </Paragrafo>

    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=enoque-silva&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=enoque-silva&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
