import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={headerStyle}>
      <nav>
        <ul style={navListStyle}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/works">Works</Link></li>
        </ul>
      </nav>
    </header>
  );
};

// 簡易的なスタイル（後でCSSファイルやTailwindに移行してもOK）
const headerStyle = {
  padding: '1rem',
  backgroundColor: '#1f1f1f', // 少し明るい黒
  borderBottom: '1px solid #333',
  color: 'white',
};

const navListStyle = {
  display: 'flex',
  gap: '20px',
  listStyle: 'none',
};

export default Header;