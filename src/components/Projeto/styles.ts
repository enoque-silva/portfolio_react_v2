import styled from 'styled-components'
import { Theme } from '../../themes/dark'

export const Card = styled.div`
  border: 1px solid ${(props) => (props.theme as Theme).corBorda};
  border-radius: 8px;
  padding: 16px;
  background-color: ${(props) => (props.theme as Theme).corFundoCard};
  text-align: center;
`
export const LinkBotao = styled.a`
  color: ${(props) => (props.theme as Theme).corTextoBotao};
  background-color: ${(props) => (props.theme as Theme).corFundoBotao};
  border: 1px solid ${(props) => (props.theme as Theme).corBorda};
  font-size: 14px;
  text-decoration: none;
  padding: 8px 16px;
  display: inline-block;
  margin-top: 16px;
  border-radius: 8px;
  cursor: pointer;
  margin: 16px;

  &:hover {
    background-color: ${(props) => (props.theme as Theme).corHoverBotao};
  }
`

export const LinkBotaoSecundario = styled.a`
  color: ${(props) => (props.theme as Theme).corFundoBotao};
  background-color: ${(props) => (props.theme as Theme).corTextoBotao};
  border: 1px solid ${(props) => (props.theme as Theme).corFundoBotao};
  font-size: 14px;
  text-decoration: none;
  padding: 8px 16px;
  display: inline-block;
  margin-top: 16px;
  border-radius: 8px;
  cursor: pointer;
  margin: 16px;

  &:hover {
    background-color: ${(props) => (props.theme as Theme).corHoverBotao};
    color: ${(props) => (props.theme as Theme).corTextoBotao};
  }
`

export const ImagemPost = styled.img`
  width: 100%;
  height: 200px;
  border: 1px solid ${(props) => (props.theme as Theme).corBorda};
  margin-bottom: 16px;
  object-fit: cover;
`
