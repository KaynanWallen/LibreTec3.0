import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate  } from 'react-router-dom';
import './index.css'
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import PageEmprestar from './components/PageEmprestar';
import PageBiblioteca from './components/PageBiblioteca';
import PageRemover from './components/PageRemover';
import PageIncluir from './components/PageIncluir';
import PageDevolver from './components/PageDevolver';
import Login from './components/Login';
import { VerificarToken } from './services/routes';
import { useEffect, useState } from 'react';

interface PrivateRouteProps {
  element: React.ReactElement; // Tipo explícito para a propriedade element
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const [checkedToken, setCheckedToken] = useState<boolean | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Verifica o token apenas se ainda não foi verificado
    if (checkedToken === null) {
      VerificarToken().then((response) => {
        if (!response) {
          navigate('/login');
        }

        console.log('Testando');
        // Marca o token como verificado
        setCheckedToken(response);
      }).catch((err) => {
        console.log(err);
        setCheckedToken(false);
      });
    }
  }, [checkedToken, navigate]);

  if (checkedToken === null) {
    // Ainda não verificou o token, pode exibir um loader ou algo assim
    return null;
  }

  // Se chegou aqui, já verificou o token e pode renderizar o elemento
  return element;
}


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route
          path="/dashboard/*"
          element={<Header />}
        />
      </Routes>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<PrivateRoute element={<Home />} />}/>
        <Route path="/dashboard/emprestar" element={<PrivateRoute element={<PageEmprestar />} />}/>
        <Route path="/dashboard/biblioteca" element={<PrivateRoute element={<PageBiblioteca />} />}/>
        <Route path="/dashboard/incluir" element={<PrivateRoute element={<PageIncluir />} />}/>
        <Route path="/dashboard/remover" element={<PrivateRoute element={<PageRemover />} />}/>
        <Route path="/dashboard/devolver" element={<PrivateRoute element={<PageDevolver />} />}/>
        <Route path="/login" element={<PrivateRoute element={<Login />} />}/>
      </Routes>
      <Routes>
        <Route
          path="/dashboard/*"
          element={<Footer />}
        />
      </Routes>
    </Router>    
    </>
  )
}

export default App
