import React, { useState } from 'react';
import commonStyles from '../styles/commonStyles';

const ProcessingMethods = ({ onBack }) => {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [activeTab, setActiveTab] = useState('bean'); // 'bean' or 'product'

  const beanProcessingMethods = [
    {
      name: "ウォッシュド（湿式）",
      icon: "💧",
      description: "収穫後、果肉を取り除き、水槽で発酵させて粘液質を除去し、その後乾燥させます。",
      details: {
        flavor: "クリーンで明るい酸味、透明感のある味わい",
        body: "ライトからミディアム",
        commonOrigins: "中南米、アフリカ東部",
        processingTime: "約2週間",
        quality: "品質が安定しやすい",
        characteristics: [
          "果実味は控えめ",
          "品質の均一性が高い",
          "豆の欠損が見つけやすい",
          "水の使用量が多い"
        ]
      }
    },
    {
      name: "ナチュラル（乾式）",
      icon: "☀️",
      description: "果肉をつけたまま天日干しし、完全に乾燥させた後に果肉と種子を分離します。",
      details: {
        flavor: "フルーティーで甘い、複雑な風味",
        body: "フルボディ",
        commonOrigins: "エチオピア、ブラジル、イエメン",
        processingTime: "3-4週間",
        quality: "天候に左右されやすい",
        characteristics: [
          "強い果実味",
          "ワインのような発酵風味",
          "自然な甘み",
          "環境負荷が低い"
        ]
      }
    },
    {
      name: "ハニー（半湿式）",
      icon: "🍯",
      description: "果肉を取り除き、粘液質を残したまま乾燥させます。残す粘液質の量によって様々なタイプがあります。",
      details: {
        types: [
          "ホワイトハニー：粘液質を最も少なく残す",
          "イエローハニー：粘液質を中程度残す",
          "レッドハニー：粘液質を多く残す",
          "ブラックハニー：粘液質をほぼ完全に残す"
        ],
        flavor: "フルーティーな甘みと程よい酸味",
        body: "ミディアムからフル",
        commonOrigins: "中米諸国、特にコスタリカ",
        characteristics: [
          "バランスの取れた味わい",
          "複雑な風味プロファイル",
          "自然な甘み"
        ]
      }
    },
    {
      name: "ウェットハルド",
      icon: "🌊",
      description: "水に浸漬させながら発酵させる新しい加工方法。温度や時間を厳密に管理します。",
      details: {
        flavor: "クリーンでジューシー、明確な風味特性",
        processingTime: "12-36時間",
        characteristics: [
          "高い再現性",
          "風味の制御が可能",
          "近年注目を集めている手法"
        ]
      }
    },
    {
      name: "アナエロビック発酵",
      icon: "🔋",
      description: "酸素を遮断した環境で発酵させる方法。独特の風味が生まれます。",
      details: {
        flavor: "特徴的な発酵風味、フルーティー",
        processingTime: "24-72時間",
        characteristics: [
          "ユニークな風味プロファイル",
          "高度な管理が必要",
          "実験的な手法"
        ]
      }
    },
    {
      name: "カーボニックマセレーション",
      icon: "🎈",
      description: "二酸化炭素充填環境下で発酵させる方法。ワイン製造からインスピレーションを得ています。",
      details: {
        flavor: "ワインのような風味、ベリー系の甘み",
        processingTime: "約1週間",
        characteristics: [
          "ワインのような風味特性",
          "高い品質管理が必要",
          "革新的な加工方法"
        ]
      }
    }
  ];

  const productProcessingMethods = [
    {
      name: "インスタントコーヒー",
      icon: "⚡",
      description: "コーヒーを抽出し、水分を除去して粉末化したもの。",
      details: {
        methods: [
          "スプレードライ方式：高温の空気で瞬間的に乾燥",
          "フリーズドライ方式：凍結させた後、真空状態で昇華"
        ],
        pros: [
          "長期保存が可能",
          "携帯性が高い",
          "調理が簡単"
        ],
        characteristics: [
          "溶解性が高い",
          "風味は通常のコーヒーと異なる",
          "価格が手頃"
        ]
      }
    },
    {
      name: "デカフェ（カフェインレス）",
      icon: "🚫",
      description: "カフェインを除去したコーヒー。複数の製法があります。",
      details: {
        methods: [
          "スイスウォータープロセス：水を使用した自然な方法",
          "有機溶剤法：化学溶剤を使用",
          "二酸化炭素法：超臨界CO₂を使用"
        ],
        retainedCaffeine: "0.1%未満",
        characteristics: [
          "妊婦や夜間でも安心",
          "オリジナルの風味を維持",
          "複数の製法から選択可能"
        ]
      }
    },
    {
      name: "コールドブリュー",
      icon: "❄️",
      description: "低温で長時間かけて抽出したコーヒー。",
      details: {
        extractionTime: "12-24時間",
        temperature: "常温または冷蔵",
        characteristics: [
          "低酸性",
          "まろやかな味わい",
          "保存可能期間が比較的長い"
        ]
      }
    },
    {
      name: "フリーズドライコーヒー",
      icon: "🧊",
      description: "凍結乾燥技術を使用して製造される高品質なインスタントコーヒー。",
      details: {
        process: [
          "コーヒーの抽出",
          "急速冷凍",
          "真空環境での昇華"
        ],
        advantages: [
          "風味保持が優れている",
          "素早い溶解",
          "長期保存が可能"
        ]
      }
    },
    {
      name: "窒素充填コーヒー",
      icon: "🌪️",
      description: "窒素ガスを注入したクリーミーな口当たりのコーヒー。",
      details: {
        characteristics: [
          "クリーミーな泡立ち",
          "滑らかな口当たり",
          "冷たい飲み方に適している"
        ]
      }
    }
  ];

  const renderMethodCard = (method) => (
    <div
      key={method.name}
      style={{
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: '20px',
        cursor: 'pointer',
        transition: 'transform 0.2s, box-shadow 0.2s',
        transform: selectedMethod?.name === method.name ? 'scale(1.02)' : 'scale(1)',
        boxShadow: selectedMethod?.name === method.name
          ? '0 8px 16px rgba(0,0,0,0.2)'
          : '0 2px 4px rgba(0,0,0,0.1)',
      }}
      onClick={() => setSelectedMethod(method)}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
        <span style={{ fontSize: '24px' }}>{method.icon}</span>
        <h3 style={{ margin: 0, color: '#2C1810', fontSize: '18px' }}>{method.name}</h3>
      </div>
      <p style={{ margin: '0', color: '#666' }}>{method.description}</p>
    </div>
  );

  return (
    <div style={commonStyles.pageContainer}>
      <div style={commonStyles.header}>
        <h1 style={commonStyles.pageTitle}>
          加工方法
        </h1>
        <button onClick={onBack} style={commonStyles.backButton}>
          ホームに戻る
        </button>
      </div>
  
      <div style={{ 
        display: 'flex', 
        gap: commonStyles.spacing.xl, 
        marginBottom: commonStyles.spacing.xl,
        borderBottom: `2px solid ${commonStyles.colors.border}`
      }}>
        <button
          onClick={() => setActiveTab('bean')}
          style={{
            padding: `${commonStyles.spacing.lg} ${commonStyles.spacing.xl}`,
            border: 'none',
            borderBottom: activeTab === 'bean' ? `2px solid ${commonStyles.colors.primary}` : 'none',
            backgroundColor: 'transparent',
            color: activeTab === 'bean' ? commonStyles.colors.primary : commonStyles.colors.textSecondary,
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: activeTab === 'bean' ? 'bold' : 'normal',
            marginBottom: '-2px'
          }}
        >
          生豆の加工方法
        </button>
        <button
          onClick={() => setActiveTab('product')}
          style={{
            padding: `${commonStyles.spacing.lg} ${commonStyles.spacing.xl}`,
            border: 'none',
            borderBottom: activeTab === 'product' ? `2px solid ${commonStyles.colors.primary}` : 'none',
            backgroundColor: 'transparent',
            color: activeTab === 'product' ? commonStyles.colors.primary : commonStyles.colors.textSecondary,
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: activeTab === 'product' ? 'bold' : 'normal',
            marginBottom: '-2px'
          }}
        >
          コーヒー製品の加工方法
        </button>
      </div>
  
      <div style={commonStyles.cardGrid}>
        {activeTab === 'bean' 
          ? beanProcessingMethods.map((method) => renderMethodCard(method))
          : productProcessingMethods.map((method) => renderMethodCard(method))
        }
      </div>
  
      {selectedMethod && (
        <div style={commonStyles.detailPanel}>
          <div style={commonStyles.detailHeader}>
            <span style={commonStyles.detailIcon}>{selectedMethod.icon}</span>
            <h2 style={commonStyles.detailTitle}>{selectedMethod.name}</h2>
          </div>
  
          <div style={commonStyles.detailGrid}>
            {Object.entries(selectedMethod.details).map(([key, value]) => (
              <div key={key}>
                <h3 style={commonStyles.sectionTitle}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </h3>
                {Array.isArray(value) ? (
                  <ul style={commonStyles.list}>
                    {value.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p style={{ margin: 0, color: commonStyles.colors.textSecondary }}>
                    {value}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProcessingMethods;