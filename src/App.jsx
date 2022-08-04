import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBAr';
import GlobalStyle from './GlobalStyle';

function App() {
  return (
    <GlobalStyle>
      <article className='navBar'>
        <Routes>
          <Route path='*' element={<NavBar />} />;
          <Route path='*' element={<NavBar />} />;
          <Route path='*' element={<NavBar />} />;
          <Route path='*' element={<NavBar />} />;
        </Routes>
      </article>
    </GlobalStyle>
  );
}

export default App;
