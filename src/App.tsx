import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';

function App() {
  return (
    <BrowserRouter>
      {/* ↓ 画面全体の高さを確保し、縦並びのFlexに設定 */}
      <div style={appWrapperStyle}>
        <Header />
        {/* ↓ mainに flex-grow を持たせて、余ったスペースを占有させる */}
        <main style={mainContentStyle}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/works" element={<Works />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

const appWrapperStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh', // 最低でも画面いっぱいの高さを確保
};

const mainContentStyle: React.CSSProperties = {
  flexGrow: 1, // コンテンツが少なくても、フッターを下に押し出す
};

export default App;