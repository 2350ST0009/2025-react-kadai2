import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={heroSectionStyle}>
      <h1 style={mainTitleStyle}>My Portfolio</h1>
      <p style={subTitleStyle}>
        土曜12 React開発 後期課題成果物2 - ポートフォリオサイト
      </p>
      
      <div style={buttonContainerStyle}>
        <Link to="/works" style={buttonStyle}>
          Worksを見る
        </Link>
      </div>
    </div>
  );
};

// スタイル定義
const heroSectionStyle: React.CSSProperties = {
  textAlign: 'center',
  padding: '120px 20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

const mainTitleStyle: React.CSSProperties = {
  fontSize: '3.5rem',
  color: '#bb86fc', 
  marginBottom: '1rem',
  fontWeight: 'bold',
};

const subTitleStyle: React.CSSProperties = {
  fontSize: '1.2rem',
  color: '#aaa',
  marginBottom: '2.5rem',
};

const buttonContainerStyle: React.CSSProperties = {
  marginTop: '20px',
};

const buttonStyle: React.CSSProperties = {
  display: 'inline-block',
  padding: '12px 32px',
  backgroundColor: '#bb86fc',
  color: '#121212', 
  borderRadius: '30px',
  textDecoration: 'none',
  fontWeight: 'bold',
  fontSize: '1.1rem',
  transition: 'transform 0.2s, background-color 0.2s',
  boxShadow: '0 4px 15px rgba(187, 134, 252, 0.3)',
};

export default Home;