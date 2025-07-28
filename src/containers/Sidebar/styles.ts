import styled from 'styled-components'
import { Paragrafo } from '../../components/Paragrafo/styles'
import { Theme } from '../../themes/dark'

export const Descricao = styled(Paragrafo)`
  margin-top: 8px;
  margin-bottom: 8px;
  line-height: 16px;
`
export const BotaoTema = styled.button`
  background-color: ${(props) => (props.theme as Theme).corPrincipal};
  border: none;
  color: ${(props) => (props.theme as Theme).corFundo};
  font-weight: bold;
  cursor: pointer;
  margin-top: 16px;
  padding: 16px;
  border-radius: 32px;
  font-size: 14px;
  width: 100%;
`
export const SidebarContainer = styled.aside`
  position: sticky;
  top: 80px;
  left: 0;
  text-align: center;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    text-align: center;
  }
`
