import worksData from '../data/works.json';
import WorkCard from '../components/WorkCard';
import { Work } from '../types/work';

const Works = () => {
  return (
    <div style={containerStyle}>
      <h2 style={{ marginBottom: '2rem' }}>実績一覧</h2>
      
      {/* map関数を使ってデータの数だけカードを生成 */}
      <div style={gridStyle}>
        {worksData.map((work: Work) => (
          <WorkCard 
            key={work.id} 
            title={work.title} 
            description={work.description} 
            image={work.image} 
            url={work.url} 
            id={work.id} // 型定義に合わせて一応渡しておきます
          />
        ))}
      </div>
    </div>
  );
};

// レスポンシブを意識した簡易的なグリッドスタイル
const containerStyle: React.CSSProperties = {
  padding: '2rem',
  maxWidth: '1200px',
  margin: '0 auto'
};

const gridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '20px'
};

export default Works;