import React, { useState } from 'react';
import commonStyles from '../styles/commonStyles';

const CoffeeTypes = ({ onBack }) => {
  const [selectedType, setSelectedType] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'すべて', icon: '☕' },
    { id: 'black', name: 'ブラック', icon: '☕' },
    { id: 'milk', name: 'ミルクベース', icon: '🥛' },
    { id: 'arrange', name: 'アレンジ', icon: '🍨' },
    { id: 'iced', name: 'アイス', icon: '❄️' },
    { id: 'hot', name: 'ホット', icon: '♨️' }
  ];

  const coffeeTypes = [
    {
      name: "エスプレッソ",
      category: ["black", "hot"],
      baseType: "エスプレッソ",
      temperature: "hot",
      icon: "☕",
      description: "高圧力で抽出された濃厚なコーヒー。クレマと呼ばれる特徴的な泡が表面に浮かびます。",
      volume: "30ml",
      intensity: 5,
      milk: 0,
      recipe: {
        coffee: "7-9g",
        water: "30ml",
        time: "25-30秒",
        pressure: "9bar"
      },
      characteristics: {
        body: "非常に強い",
        acidity: "控えめ",
        bitterness: "強い",
        sweetness: "凝縮"
      }
    },
    {
      name: "アメリカーノ",
      category: ["black", "hot"],
      baseType: "エスプレッソ",
      temperature: "hot",
      icon: "🫖",
      description: "エスプレッソにお湯を追加したコーヒー。すっきりとした味わいが特徴です。",
      volume: "120-180ml",
      intensity: 3,
      milk: 0,
      recipe: {
        coffee: "7-9g（エスプレッソ）",
        water: "90-150ml",
        time: "---",
        temperature: "85-95℃"
      },
      characteristics: {
        body: "軽め",
        acidity: "バランス",
        bitterness: "中程度",
        sweetness: "控えめ"
      }
    },
    {
      name: "カフェラテ",
      category: ["milk", "hot"],
      baseType: "エスプレッソ",
      temperature: "hot",
      icon: "🥛",
      description: "エスプレッソにスチームミルクを加えた定番のミルクコーヒー。",
      volume: "240ml",
      intensity: 3,
      milk: 4,
      recipe: {
        espresso: "30ml",
        milk: "180ml",
        foam: "少量",
        temperature: "65-70℃"
      },
      characteristics: {
        body: "クリーミー",
        milkiness: "強い",
        sweetness: "自然な甘み",
        balance: "調和"
      }
    },
    {
      name: "カプチーノ",
      category: ["milk", "hot"],
      baseType: "エスプレッソ",
      temperature: "hot",
      icon: "☕",
      description: "エスプレッソ、スチームミルク、フォームミルクが1:1:1の割合のイタリアの定番。",
      volume: "180ml",
      intensity: 4,
      milk: 3,
      recipe: {
        espresso: "30ml",
        milk: "60ml",
        foam: "60ml",
        temperature: "65-70℃"
      },
      characteristics: {
        body: "バランス",
        milkiness: "中程度",
        sweetness: "程よい",
        texture: "きめ細かい"
      }
    },
    {
      name: "カフェモカ",
      category: ["arrange", "hot"],
      baseType: "エスプレッソ",
      temperature: "hot",
      icon: "🍫",
      description: "エスプレッソ、スチームミルク、チョコレートシロップを組み合わせた甘い飲み物。",
      volume: "240ml",
      intensity: 3,
      milk: 3,
      recipe: {
        espresso: "30ml",
        milk: "150ml",
        chocolate: "30ml",
        whipped: "オプション"
      },
      characteristics: {
        body: "リッチ",
        sweetness: "強い",
        chocolate: "濃厚",
        creaminess: "なめらか"
      }
    },
    {
      name: "アイスラテ",
      category: ["milk", "iced"],
      baseType: "エスプレッソ",
      temperature: "cold",
      icon: "🧊",
      description: "冷たいミルクにエスプレッソを注いだ夏の定番ドリンク。",
      volume: "400ml",
      intensity: 3,
      milk: 4,
      recipe: {
        espresso: "30ml",
        milk: "200ml",
        ice: "適量"
      },
      characteristics: {
        body: "さっぱり",
        milkiness: "強い",
        refreshing: "爽やか",
        dilution: "適度"
      }
    },
    {
      name: "フラットホワイト",
      category: ["milk", "hot"],
      baseType: "エスプレッソ",
      temperature: "hot",
      icon: "☕",
      description: "エスプレッソにマイクロフォームミルクを加えた、オーストラリア発祥のコーヒー。",
      volume: "160ml",
      intensity: 4,
      milk: 3,
      recipe: {
        espresso: "60ml（ダブル）",
        milk: "100ml",
        foam: "最小限",
        temperature: "65-70℃"
      },
      characteristics: {
        body: "しっかり",
        milkiness: "程よい",
        coffee: "強い",
        texture: "なめらか"
      }
    },
    {
      name: "アフォガート",
      category: ["arrange"],
      baseType: "エスプレッソ",
      temperature: "mixed",
      icon: "🍨",
      description: "バニラアイスクリームにエスプレッソを注いだイタリアのデザートドリンク。",
      volume: "120ml",
      intensity: 4,
      milk: 2,
      recipe: {
        espresso: "30ml",
        icecream: "1スクープ",
        temperature: "コントラスト"
      },
      characteristics: {
        body: "デザート",
        contrast: "温冷",
        sweetness: "強い",
        creaminess: "最高"
      }
    },
    {
      name: "コールドブリュー",
      category: ["black", "iced"],
      baseType: "水出し",
      temperature: "cold",
      icon: "❄️",
      description: "冷水でゆっくり抽出した、まろやかな味わいのコーヒー。",
      volume: "350ml",
      intensity: 2,
      milk: 0,
      recipe: {
        coffee: "100g",
        water: "1000ml",
        time: "12-24時間",
        temperature: "常温〜冷蔵"
      },
      characteristics: {
        body: "なめらか",
        acidity: "低い",
        bitterness: "控えめ",
        clarity: "クリア"
      }
    },
    {
      name: "ニトロコールドブリュー",
      category: ["black", "iced"],
      baseType: "水出し",
      temperature: "cold",
      icon: "🌪️",
      description: "窒素ガスを注入したクリーミーな口当たりのコールドブリュー。",
      volume: "350ml",
      intensity: 2,
      milk: 0,
      recipe: {
        coldbrew: "350ml",
        nitrogen: "注入",
        pressure: "高圧",
        temperature: "冷蔵"
      },
      characteristics: {
        body: "クリーミー",
        texture: "なめらか",
        cascade: "美しい",
        mouthfeel: "シルキー"
      }
    }
  ];

  const filteredTypes = selectedCategory === 'all'
    ? coffeeTypes
    : coffeeTypes.filter(type => type.category.includes(selectedCategory));

  const styles = {
      cardDescription: {
        margin: '0 0 16px 0',
        color: '#666',
        minHeight: '60px',
      },
      strengthContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
      },
      strengthRow: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      strengthLabel: {
        fontSize: '14px',
        color: '#666',
      },
      dotsContainer: {
        display: 'flex',
        gap: '4px',
      },
      dot: (isFilled, type) => ({
        width: '12px',
        height: '12px',
        borderRadius: '50%',
        backgroundColor: isFilled 
          ? (type === 'intensity' ? '#42A5F5' : '#E0E0E0')
          : '#F5F5F5',
        border: '1px solid #999',
      }),
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
        fontSize: '24px',
        margin: 0,
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
      }
    };
  
    return (
        <div style={commonStyles.pageContainer}>
          <div style={commonStyles.header}>
            <h1 style={commonStyles.pageTitle}>コーヒーの種類</h1>
            <button onClick={onBack} style={commonStyles.backButton}>
              ホームに戻る
            </button>
          </div>
      
          <div style={commonStyles.categoryContainer}>
            {categories.map(category => (
              <button
                key={category.id}
                style={commonStyles.categoryButton(selectedCategory === category.id)}
                onClick={() => setSelectedCategory(category.id)}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
      
          <div style={commonStyles.cardGrid}>
            {filteredTypes.map((type) => (
              <div
                key={type.name}
                onClick={() => setSelectedType(type)}
                style={{
                  ...commonStyles.card,
                  cursor: 'pointer',
                  transform: selectedType?.name === type.name ? 'scale(1.02)' : 'scale(1)',
                  boxShadow: selectedType?.name === type.name
                    ? '0 8px 16px rgba(0,0,0,0.2)'
                    : '0 2px 4px rgba(0,0,0,0.1)',
                  transition: commonStyles.transition.default,
                }}
              >
                <div style={commonStyles.cardHeader}>
                  <span style={commonStyles.cardIcon}>{type.icon}</span>
                  <h3 style={commonStyles.cardTitle}>{type.name}</h3>
                </div>
      
                <p style={commonStyles.cardDescription}>{type.description}</p>
      
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: commonStyles.spacing.md,
                }}>
                  {/* 濃さとミルクの表示 */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '14px', color: commonStyles.colors.textSecondary }}>
                      濃さ {type.intensity}/5
                    </span>
                    <div style={{ display: 'flex', gap: commonStyles.spacing.xs }}>
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          style={{
                            width: '12px',
                            height: '12px',
                            borderRadius: '50%',
                            backgroundColor: i < type.intensity ? '#42A5F5' : '#F5F5F5',
                            border: '1px solid #999',
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '14px', color: commonStyles.colors.textSecondary }}>
                      ミルク {type.milk}/5
                    </span>
                    <div style={{ display: 'flex', gap: commonStyles.spacing.xs }}>
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          style={{
                            width: '12px',
                            height: '12px',
                            borderRadius: '50%',
                            backgroundColor: i < type.milk ? '#E0E0E0' : '#F5F5F5',
                            border: '1px solid #999',
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
      
          {selectedType && (
            <div style={commonStyles.detailPanel}>
              <div style={commonStyles.detailHeader}>
                <span style={commonStyles.detailIcon}>{selectedType.icon}</span>
                <h2 style={commonStyles.detailTitle}>{selectedType.name}</h2>
              </div>
      
              <div style={commonStyles.detailGrid}>
                <div>
                  <h3 style={commonStyles.sectionTitle}>基本情報</h3>
                  <ul style={commonStyles.list}>
                    <li>ベース: {selectedType.baseType}</li>
                    <li>温度: {selectedType.temperature}</li>
                    <li>量: {selectedType.volume}</li>
                  </ul>
                </div>
      
                <div>
                  <h3 style={commonStyles.sectionTitle}>レシピ</h3>
                  <ul style={commonStyles.list}>
                    {Object.entries(selectedType.recipe).map(([key, value]) => (
                      <li key={key}>{key}: {value}</li>
                    ))}
                  </ul>
                </div>
      
                <div>
                  <h3 style={commonStyles.sectionTitle}>特徴</h3>
                  <ul style={commonStyles.list}>
                    {Object.entries(selectedType.characteristics).map(([key, value]) => (
                      <li key={key}>{key}: {value}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      );
  };
  
  export default CoffeeTypes;