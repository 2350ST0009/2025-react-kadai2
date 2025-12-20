const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p style={{ margin: 0 }}>&copy; 2025 My Portfolio</p>
      <p style={{ fontSize: '0.8rem', color: '#888', marginTop: '5px' }}>
        Built with React & TypeScript
      </p>
    </footer>
  );
};

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  padding: '2rem 1rem',
  backgroundColor: '#1f1f1f', // ヘッダーと同じ少し明るい黒
  borderTop: '1px solid #333', // 上部に細い境界線
  color: '#aaa',               // 文字は少し控えめなグレー
};

export default Footer;