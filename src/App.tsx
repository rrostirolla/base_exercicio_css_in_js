import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import EstiloGlobal, { ContainerList } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Header />
      <Hero />
      <ContainerList>
        <div className="container">
          <ListaVagas />
        </div>
      </ContainerList>
    </>
  )
}

export default App
