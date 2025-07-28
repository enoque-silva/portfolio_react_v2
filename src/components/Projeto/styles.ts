import styled from 'styled-components'
import { Theme } from '../../themes/dark'

export const Card = styled.div`
  border: 1px solid ${(props) => (props.theme as Theme).corBorda};
  border-radius: 8px;
  padding: 16px;
  background-color: ${(props) => (props.theme as Theme).corFundoCard};
`
export const LinkBotao = styled.a`
  color: ${(props) => (props.theme as Theme).corTextoBotao};
  background-color: ${(props) => (props.theme as Theme).corFundoBotao};
  border: 1px solid ${(props) => (props.theme as Theme).corBorda};
  font-size: 14px;
  text-decoration: none;
  padding: 8px 16px;
  display: inline-block;
  margin-top: 24px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.theme as Theme).corHoverBotao};
  }
`
