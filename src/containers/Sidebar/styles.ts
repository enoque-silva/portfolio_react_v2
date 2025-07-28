import styled from 'styled-components'
import { Paragrafo } from '../../components/Paragrafo/styles'

export const Descricao = styled(Paragrafo)`
  margin-top: 8px;
  margin-bottom: 8px;
  line-height: 16px;
`
export const BotaoTema = styled.button`
  background-color: #282a35;
  border: none;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  margin-top: 16px;
  padding: 16px;
  border-radius: 32px;
  font-size: 14px;
`
export const SidebarContainer = styled.aside`
  position: sticky;
  top: 80px;
  left: 0;
`
