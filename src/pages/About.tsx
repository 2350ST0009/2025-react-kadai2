const About = () => {
  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>About Me</h2>
      
      <div style={contentStyle}>
        {/* プロフィール基本情報 */}
        <section style={sectionStyle}>
          <h3>自己紹介</h3>
          <p>
            IT・Web制作を学んでいる学生です。
            現在はReactやphpなどwebアプリケーション開発に興味を持ち、日々勉強中です。
          </p>
        </section>

        {/* スキルセット */}
        <section style={sectionStyle}>
          <h3>Skills</h3>
          <ul style={skillListStyle}>
            <li>HTML / CSS</li>
            <li>JavaScript (ES6+)</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>GitHub / Git</li>
          </ul>
        </section>

        {/* 今後の目標 */}
        <section style={sectionStyle}>
          <h3>Goals</h3>
          <p>
            現在はITパスポートや基本情報技術者試験の取得を目指しています。
          </p>
        </section>
      </div>
    </div>
  );
};

// スタイル定義
const containerStyle: React.CSSProperties = {
  padding: '2rem',
  maxWidth: '800px',
  margin: '0 auto',
  lineHeight: '1.6'
};

const titleStyle: React.CSSProperties = {
  borderBottom: '2px solid #333',
  paddingBottom: '0.5rem',
  marginBottom: '2rem'
};

const contentStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem'
};

const sectionStyle: React.CSSProperties = {
  backgroundColor: '#1e1e1e',
  padding: '1.5rem',
  borderRadius: '8px',
  border: '1px solid #333'
};

const skillListStyle: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '10px',
  listStyle: 'none',
  padding: 0
};

export default About;