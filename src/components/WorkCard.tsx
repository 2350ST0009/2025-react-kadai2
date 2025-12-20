import { Work } from '../types/work';

const WorkCard = ({ title, description, image, url }: Work) => {
  return (
    <div className="work-card" style={cardStyle}>
      <img src={image} alt={title} style={imageStyle} />
      <div style={{ padding: '15px' }}>
        <h3 style={{ margin: '0 0 10px 0' }}>{title}</h3>
        <p style={{ fontSize: '14px', color: '#666' }}>{description}</p>
        <a href={url} target="_blank" rel="noopener noreferrer" style={linkStyle}>
          GitHubを見る
        </a>
      </div>
    </div>
  );
};

// --- ここから下のスタイル定義が漏れていたためエラーになっていました ---
const cardStyle: React.CSSProperties = {
  border: '1px solid #333',
  borderRadius: '8px',
  overflow: 'hidden',
  backgroundColor: '#1e1e1e', // カードの背景
  height: '100%',
  color: '#e0e0e0'
};

const imageStyle: React.CSSProperties = {
  width: '100%',
  height: '200px',
  objectFit: 'cover',
  display: 'block'
};

const linkStyle: React.CSSProperties = {
  display: 'inline-block',
  marginTop: '10px',
  color: '#03dac6', // ティール（青緑）系がダークモードに合います
  textDecoration: 'none',
  fontWeight: 'bold'
};

// --- これが漏れていたため「No default export」エラーが出ていました ---
export default WorkCard;