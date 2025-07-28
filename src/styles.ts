import styled, { createGlobalStyle } from 'styled-components'
import { Theme } from './themes/dark'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    adding: 0;
    font-family: "Inter", sans-serif;
    }

  body {
    padding-top: 80px;
    padding-bottom: 80px;
    background-color: ${(props) => (props.theme as Theme).corFundo};

    @media (max-width: 768px) {
      pading-top: 16px;
    }
  }

  ul{
    padding: 0;
    list-style: none;
  }
`

export default EstiloGlobal

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 200px auto;
  column-gap: 56px;

  @media (max-width: 768px) {
    max-width: 80%;
    display: block;
  }
`
