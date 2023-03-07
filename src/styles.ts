import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
    :root {
        --cor-principal: #a7727d;
        --cor-secundaria: #f9f5e7;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Lato, sans-serif;
        list-style: none;
    }

    body {
        padding-bottom: 120px;
    }

    .container {
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;
    }

    @media (max-width: 768px) {
        .container {
        max-width: 80%;
        }
    }
`

export default EstiloGlobal

export const ContainerList = styled.div`
  .vagas {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 16px;
    row-gap: 16px;
    margin-top: 32px;
  }

  @media (max-width: 768px) {
    .vagas {
      grid-template-columns: 1fr;
    }
  }
`
