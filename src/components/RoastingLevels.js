import React, { useState } from 'react';
import commonStyles from '../styles/commonStyles';

const RoastingLevels = ({ onBack }) => {
  const [selectedLevel, setSelectedLevel] = useState(null);

  // 背景色に応じてテキストの色を白か黒か決定する関数
  const getTextColor = (backgroundColor) => {
    // カラーコードをRGBに変換
    const hex = backgroundColor.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    
    // 輝度を計算（YIQ式）
    const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    
    // 輝度が128以上なら黒、それ以外なら白
    return yiq >= 128 ? '#000000' : '#FFFFFF';
  };

  const roastLevels = [
    {
      name: "ライトロースト",
      color: "#C2A27D",
      characteristics: {
        acidity: "強い",
        body: "軽い",
        flavor: "フルーティー、明るい酸味"
      },
      description: "豆の色は明るく、酸味が強調されます。フルーティーで軽やかな風味が特徴です。",
      timing: "一般的に、第一クラックの直後"
    },
    {
      name: "シナモンロースト",
      color: "#B4916C",
      characteristics: {
        acidity: "やや強い",
        body: "やや軽い",
        flavor: "軽い甘み、穀物的な風味"
      },
      description: "ライトローストよりやや深く、軽いボディと甘みが特徴です。",
      timing: "第一クラックの終わり頃"
    },
    {
      name: "ミディアムロースト",
      color: "#8B593B",
      characteristics: {
        acidity: "バランス良い",
        body: "中程度",
        flavor: "バランスの良い味わい"
      },
      description: "酸味と苦味のバランスが良く、香りも豊かです。最も一般的な焙煎度合いです。",
      timing: "第一クラックと第二クラックの間"
    },
    {
      name: "ハイロースト",
      color: "#714832",
      characteristics: {
        acidity: "やや弱い",
        body: "やや強い",
        flavor: "チョコレートのような風味"
      },
      description: "中煎りと深煎りの間で、甘みとコクが増します。",
      timing: "第二クラック直前"
    },
    {
      name: "シティロースト",
      color: "#5C3C2D",
      characteristics: {
        acidity: "弱い",
        body: "強い",
        flavor: "ナッツ、キャラメル"
      },
      description: "コクが出て、深みのある味わいが特徴です。",
      timing: "第二クラック開始時"
    },
    {
      name: "フルシティロースト",
      color: "#4A3024",
      characteristics: {
        acidity: "ごく弱い",
        body: "とても強い",
        flavor: "ビターチョコレート"
      },
      description: "深いコクと苦味が強調されます。エスプレッソに適しています。",
      timing: "第二クラック進行中"
    },
    {
      name: "フレンチロースト",
      color: "#32221B",
      characteristics: {
        acidity: "ほぼなし",
        body: "非常に強い",
        flavor: "スモーキー、ビター"
      },
      description: "強い苦味とスモーキーな風味が特徴です。豆の表面に油が出てきます。",
      timing: "第二クラック終盤"
    },
    {
      name: "イタリアンロースト",
      color: "#2C1810",
      characteristics: {
        acidity: "なし",
        body: "最も強い",
        flavor: "炭のような苦味"
      },
      description: "非常に深い焙煎で、オイリーな表面と濃厚な苦味が特徴です。",
      timing: "第二クラック完了後"
    }
  ];

  return (
    <div style={commonStyles.pageContainer}>
      <div style={commonStyles.header}>
        <h1 style={commonStyles.pageTitle}>
          焙煎度合い
        </h1>
        <button onClick={onBack} style={commonStyles.backButton}>
          ホームに戻る
        </button>
      </div>
  
      <div style={commonStyles.cardGrid}>
        {roastLevels.map((level) => (
          <div
            key={level.name}
            onClick={() => setSelectedLevel(level)}
            style={{
              height: '96px',
              backgroundColor: level.color,
              borderRadius: '8px',
              cursor: 'pointer',
              transition: commonStyles.transition.default,
              transform: selectedLevel?.name === level.name ? 'scale(1.05)' : 'scale(1)',
              boxShadow: selectedLevel?.name === level.name 
                ? '0 0 0 4px white, 0 0 0 6px #8B4513'
                : '0 2px 4px rgba(0,0,0,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* グラデーションオーバーレイ */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.3))',
            }} />
            
            <span style={{
              color: getTextColor(level.color),
              fontSize: '1.1rem',
              fontWeight: 'bold',
              textAlign: 'center',
              padding: commonStyles.spacing.md,
              position: 'relative',
              textShadow: `0 1px 2px ${getTextColor(level.color) === '#FFFFFF' ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.5)'}`
            }}>
              {level.name}
            </span>
          </div>
        ))}
      </div>
  
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: commonStyles.spacing.md,
        marginBottom: commonStyles.spacing.xxl
      }}>
        {roastLevels.map((level) => (
          <div
            key={level.name}
            onClick={() => setSelectedLevel(level)}
            style={{
              width: '12px',
              height: '12px',
              backgroundColor: level.color,
              borderRadius: '50%',
              cursor: 'pointer',
              transition: commonStyles.transition.default,
              transform: selectedLevel?.name === level.name ? 'scale(1.25)' : 'scale(1)',
              boxShadow: selectedLevel?.name === level.name 
                ? '0 0 0 2px white, 0 0 0 3px #8B4513'
                : 'none'
            }}
          />
        ))}
      </div>
  
      {selectedLevel ? (
        <div style={commonStyles.detailPanel}>
          <div style={commonStyles.detailHeader}>
            <div style={{
              width: '48px',
              height: '48px',
              backgroundColor: selectedLevel.color,
              borderRadius: '50%'
            }} />
            <h2 style={commonStyles.detailTitle}>{selectedLevel.name}</h2>
          </div>
  
          <div style={commonStyles.detailGrid}>
            <div>
              <h3 style={commonStyles.sectionTitle}>特徴</h3>
              <ul style={commonStyles.list}>
                <li>酸味: {selectedLevel.characteristics.acidity}</li>
                <li>コク: {selectedLevel.characteristics.body}</li>
                <li>風味: {selectedLevel.characteristics.flavor}</li>
              </ul>
            </div>
  
            <div>
              <h3 style={commonStyles.sectionTitle}>説明</h3>
              <p style={{ margin: 0, color: commonStyles.colors.textSecondary }}>
                {selectedLevel.description}
              </p>
            </div>
  
            <div>
              <h3 style={commonStyles.sectionTitle}>焙煎タイミング</h3>
              <p style={{ margin: 0, color: commonStyles.colors.textSecondary }}>
                {selectedLevel.timing}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div style={{
          backgroundColor: 'rgba(255,255,255,0.5)',
          borderRadius: '8px',
          padding: commonStyles.spacing.xl,
          textAlign: 'center',
          color: commonStyles.colors.textSecondary
        }}>
          <p>焙煎度合いをクリックして詳細を表示</p>
        </div>
      )}
    </div>
  );
};

export default RoastingLevels;