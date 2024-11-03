// src/styles/commonStyles.js

const commonStyles = {
    // 既存のスタイル
    pageContainer: {
      padding: '20px',
      maxWidth: '1200px',
      margin: '0 auto',
      backgroundColor: '#FAF7F5',
    },
    header: {
      marginBottom: '24px',
    },
    pageTitle: {
      fontSize: '24px',
      color: '#2C1810',
      marginBottom: '16px',
    },
    backButton: {
      padding: '8px 16px',
      backgroundColor: '#2C1810',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    categoryContainer: {
      display: 'flex',
      gap: '12px',
      marginBottom: '24px',
      flexWrap: 'wrap',
    },
    cardGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '20px',
      marginBottom: '32px',
    },
    card: {
      backgroundColor: 'white',
      borderRadius: '8px',
      padding: '20px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
  
    // 新しく追加する共通スタイル
    categoryButton: (isSelected) => ({
      padding: '8px 16px',
      backgroundColor: isSelected ? '#2C1810' : 'white',
      color: isSelected ? 'white' : '#2C1810',
      border: '1px solid #2C1810',
      borderRadius: '20px',
      cursor: 'pointer',
      transition: 'all 0.2s',
    }),
  
    tabContainer: {
      display: 'flex',
      gap: '16px',
      marginBottom: '24px',
      borderBottom: '2px solid #E8E8E8',
    },
  
    tab: (isActive) => ({
      padding: '12px 24px',
      border: 'none',
      borderBottom: isActive ? '2px solid #2C1810' : 'none',
      backgroundColor: 'transparent',
      color: isActive ? '#2C1810' : '#666',
      cursor: 'pointer',
      fontSize: '16px',
      fontWeight: isActive ? 'bold' : 'normal',
      marginBottom: '-2px',
    }),
  
    cardHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginBottom: '16px',
    },
  
    cardIcon: {
      fontSize: '24px',
    },
  
    cardTitle: {
      margin: 0,
      color: '#2C1810',
      fontSize: '18px',
    },
  
    cardDescription: {
      margin: '0 0 16px 0',
      color: '#666',
      minHeight: '60px',
    },
  
    detailPanel: {
      backgroundColor: 'white',
      borderRadius: '8px',
      padding: '24px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    },
  
    detailHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      marginBottom: '24px',
    },
  
    detailIcon: {
      fontSize: '32px',
    },
  
    detailTitle: {
      margin: 0,
      fontSize: '24px',
      color: '#2C1810',
    },
  
    detailGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '24px',
    },
  
    sectionTitle: {
      color: '#2C1810',
      marginBottom: '8px',
      fontSize: '16px',
      fontWeight: 'bold',
    },
  
    list: {
      margin: 0,
      paddingLeft: '20px',
      color: '#666',
    },
  
    // 共通のカラーパレット
    colors: {
      primary: '#2C1810',
      textPrimary: '#2C1810',
      textSecondary: '#666',
      background: '#FAF7F5',
      cardBackground: 'white',
      border: '#E8E8E8',
    },
  
    // 共通のサイズ設定
    spacing: {
      xs: '4px',
      sm: '8px',
      md: '12px',
      lg: '16px',
      xl: '24px',
      xxl: '32px',
    },
  
    // 共通のアニメーション
    transition: {
      default: 'all 0.2s ease',
    },
  };
  
  export default commonStyles;