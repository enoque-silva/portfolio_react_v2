import styled from 'styled-components'

export const GithubSecao = styled.div`
  margin-top: 32px;
  margin-bottom: 64px;
  height: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    display: block;
  }

  img + img {
    margin-left: 32px;

    @media (max-width: 768px) {
      margin: 0;
    }
  }

  img {
    height: 157px;

    @media (max-width: 768px) {
      height: auto;
      width: 100%;
    }
  }
`
