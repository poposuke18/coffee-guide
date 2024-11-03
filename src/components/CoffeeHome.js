import React from 'react';

const CoffeeHome = ({ onPageChange }) => {
  const menuItems = [
    {
      title: "コーヒー豆の産地",
      description: "世界各地のコーヒー豆の特徴を紹介",
      icon: "🌍",
      page: "beans"
    },
    {
      title: "焙煎度合い",
      description: "ライトローストからダークローストまでの違い",
      icon: "🔥",
      page: "roasting"
    },
    {
      title: "加工方法",
      description: "様々なコーヒー豆の加工方法について",
      icon: "⚙️",
      page: "processing"
    },
    {
      title: "抽出方法",
      description: "ドリップ、エスプレッソなど様々な淹れ方",
      icon: "☕",
      page: "brewing"
    },
    {
      title: "コーヒーの種類",
      description: "ブレンドやシングルオリジンなど",
      icon: "🫘",
      page: "types"
    }
  ];

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ 
        fontSize: '2.5em',
        textAlign: 'center',
        marginBottom: '40px',
        color: '#2C1810'
      }}>
        コーヒーガイド
      </h1>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '20px',
        padding: '20px'
      }}>
        {menuItems.map((item, index) => (
          <div
            key={index}
            style={{
              padding: '20px',
              borderRadius: '12px',
              backgroundColor: 'white',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer',
              transition: 'transform 0.2s ease',
              border: '1px solid #E8E8E8'
            }}
            onClick={() => onPageChange(item.page)}
          >
            <div style={{ fontSize: '2em', marginBottom: '10px' }}>{item.icon}</div>
            <h2 style={{ 
              fontSize: '1.5em',
              marginBottom: '10px',
              color: '#2C1810'
            }}>
              {item.title}
            </h2>
            <p style={{ 
              color: '#666',
              fontSize: '1em'
            }}>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoffeeHome;