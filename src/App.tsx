import { useContext } from 'react';
import './App.css'
import './index.css'
import { PageContext } from './context/Page';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import PageEmprestar from './components/PageEmprestar';
import PageBiblioteca from './components/PageBiblioteca';
import PageRemover from './components/PageRemover';
import PageIncluir from './components/PageIncluir';
import PageDevolver from './components/PageDevolver';



function App() {
  const [PageState, dispatch] = useContext(PageContext);

  return (
    <>
        <Header />
        {PageState.PageStage === 'PageInicial' && <Home />}
        {PageState.PageStage === 'PageEmprestar' && <PageEmprestar />}
        {PageState.PageStage === 'PageBiblioteca' && <PageBiblioteca />}
        {PageState.PageStage === 'PageIncluir' && <PageIncluir />}
        {PageState.PageStage === 'PageRemover' && <PageRemover />}
        {PageState.PageStage === 'PageDevolver' && <PageDevolver />}
        <Footer />
        
    </>
  )
}

export default App
