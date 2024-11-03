import React, { useState } from 'react';
import commonStyles from '../styles/commonStyles';

const CoffeeBasics = ({ onBack }) => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const topics = [
    {
      id: 'history',
      title: 'コーヒーの歴史',
      icon: '📚',
      shortDesc: 'エチオピアでの発見から世界中に広がるまでの歴史',
      content: {
        timeline: [
          {
            period: '9世紀頃',
            event: 'エチオピアでコーヒーの木が発見される',
            description: '山羊飼いのカルディが、コーヒーの実を食べた山羊が活発になることを発見したという伝説があります。'
          },
          {
            period: '15世紀',
            event: 'イエメンで栽培が始まる',
            description: 'モカポートを通じて取引が行われ、「モカコーヒー」の名前の起源となりました。'
          },
          {
            period: '17世紀',
            event: 'ヨーロッパに伝播',
            description: 'イタリアのベネチアを通じてヨーロッパに広がり、カフェ文化が生まれ始めます。'
          },
          {
            period: '18世紀',
            event: '南米での栽培開始',
            description: 'ブラジルやコロンビアなどで大規模栽培が始まり、現代のコーヒー産業の基礎が作られました。'
          }
        ]
      }
    },
    {
      id: 'plant',
      title: 'コーヒーの木と実の特徴',
      icon: '🌱',
      shortDesc: 'コーヒーの木の生育環境から実の特徴まで',
      content: {
        characteristics: [
          {
            title: '生育環境',
            points: [
              '標高：600-2,000m',
              '気温：15-25℃',
              '降水量：1,500-2,000mm/年',
              '日陰を好む特性'
            ]
          },
          {
            title: '木の特徴',
            points: [
              '常緑樹',
              '高さ：3-5m（栽培時）',
              '寿命：約30-50年',
              '開花から結実まで約9ヶ月'
            ]
          },
          {
            title: '実の特徴',
            points: [
              'チェリーと呼ばれる赤い実',
              '一つの実に2つの豆',
              '果肉は甘い',
              '完熟すると赤く変色'
            ]
          }
        ]
      }
    },
    {
      id: 'varieties',
      title: 'アラビカ種とロブスタ種',
      icon: '🫘',
      shortDesc: '主要な2つの品種の特徴と違い',
      content: {
        comparison: [
          {
            aspect: '栽培高度',
            arabica: '600-2,000m',
            robusta: '0-800m'
          },
          {
            aspect: 'カフェイン含有量',
            arabica: '1.2%',
            robusta: '2.2%'
          },
          {
            aspect: '味わいの特徴',
            arabica: '繊細な酸味、豊かな香り',
            robusta: '力強い苦味、シンプルな味わい'
          },
          {
            aspect: '生産量比率',
            arabica: '約60%',
            robusta: '約40%'
          },
          {
            aspect: '主な用途',
            arabica: 'スペシャルティコーヒー、単品販売',
            robusta: 'インスタントコーヒー、ブレンド用'
          }
        ]
      }
    },
    {
      id: 'caffeine',
      title: 'カフェインの特性と効果',
      icon: '⚡',
      shortDesc: 'カフェインの作用と健康への影響',
      content: {
        effects: [
          {
            type: '覚醒作用',
            description: '眠気を抑制し、集中力を高める',
            timing: '摂取後15-45分で効果発現'
          },
          {
            type: '代謝促進',
            description: '脂肪燃焼を促進し、運動能力を向上',
            timing: '効果は2-3時間持続'
          },
          {
            type: '利尿作用',
            description: '水分代謝を促進する',
            timing: '摂取後30分程度で効果発現'
          }
        ],
        safetyGuidelines: [
          '一日の推奨摂取量：400mg以下',
          '妊婦は200mg以下を推奨',
          '過剰摂取に注意',
          '個人差があることを考慮'
        ]
      }
    },
    {
      id: 'health',
      title: 'コーヒーと健康',
      icon: '💪',
      shortDesc: 'コーヒーが健康に与える影響と研究結果',
      content: {
        benefits: [
          {
            effect: '抗酸化作用',
            description: 'ポリフェノールによる老化防止効果',
            research: '多数の研究で確認されている'
          },
          {
            effect: '糖尿病予防',
            description: '適度な摂取で2型糖尿病のリスクを低減',
            research: '大規模疫学調査で示唆'
          },
          {
            effect: '肝機能改善',
            description: '肝臓の健康維持に寄与',
            research: '継続的な研究が進行中'
          }
        ],
        considerations: [
          '適度な量を心がける',
          '個人の体質を考慮',
          '睡眠への影響に注意',
          '空腹時の摂取を避ける'
        ]
      }
    }
  ];

  return (
    <div style={commonStyles.pageContainer}>
      <div style={commonStyles.header}>
        <h1 style={commonStyles.pageTitle}>
          コーヒーの基礎知識
        </h1>
        <button onClick={onBack} style={commonStyles.backButton}>
          ホームに戻る
        </button>
      </div>

      <div style={commonStyles.cardGrid}>
        {topics.map((topic) => (
          <div
            key={topic.id}
            onClick={() => setSelectedTopic(topic)}
            style={{
              ...commonStyles.card,
              cursor: 'pointer',
              transform: selectedTopic?.id === topic.id ? 'scale(1.02)' : 'scale(1)',
              boxShadow: selectedTopic?.id === topic.id
                ? '0 8px 16px rgba(0,0,0,0.2)'
                : '0 2px 4px rgba(0,0,0,0.1)',
              transition: commonStyles.transition.default,
            }}
          >
            <div style={commonStyles.cardHeader}>
              <span style={commonStyles.cardIcon}>{topic.icon}</span>
              <h3 style={commonStyles.cardTitle}>{topic.title}</h3>
            </div>
            <p style={commonStyles.cardDescription}>{topic.shortDesc}</p>
          </div>
        ))}
      </div>

      {selectedTopic && (
        <div style={commonStyles.detailPanel}>
          <div style={commonStyles.detailHeader}>
            <span style={commonStyles.detailIcon}>{selectedTopic.icon}</span>
            <h2 style={commonStyles.detailTitle}>{selectedTopic.title}</h2>
          </div>

          <div style={commonStyles.detailGrid}>
            {selectedTopic.id === 'history' && (
              <div style={{ gridColumn: '1 / -1' }}>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px'
                }}>
                  {selectedTopic.content.timeline.map((item, index) => (
                    <div key={index} style={{
                      padding: '20px',
                      backgroundColor: '#f8f8f8',
                      borderRadius: '8px',
                      borderLeft: '4px solid #2C1810'
                    }}>
                      <h3 style={{ margin: '0 0 8px 0', color: '#2C1810' }}>{item.period}</h3>
                      <h4 style={{ margin: '0 0 8px 0', color: '#4a4a4a' }}>{item.event}</h4>
                      <p style={{ margin: 0, color: '#666' }}>{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedTopic.id === 'plant' && (
              selectedTopic.content.characteristics.map((char, index) => (
                <div key={index}>
                  <h3 style={commonStyles.sectionTitle}>{char.title}</h3>
                  <ul style={commonStyles.list}>
                    {char.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))
            )}

            {selectedTopic.id === 'varieties' && (
              <div style={{ gridColumn: '1 / -1' }}>
                <table style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  backgroundColor: 'white'
                }}>
                  <thead>
                    <tr>
                      <th style={{
                        padding: '12px',
                        border: '1px solid #ddd',
                        backgroundColor: '#2C1810',
                        color: 'white'
                      }}>特徴</th>
                      <th style={{
                        padding: '12px',
                        border: '1px solid #ddd',
                        backgroundColor: '#2C1810',
                        color: 'white'
                      }}>アラビカ種</th>
                      <th style={{
                        padding: '12px',
                        border: '1px solid #ddd',
                        backgroundColor: '#2C1810',
                        color: 'white'
                      }}>ロブスタ種</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedTopic.content.comparison.map((item, index) => (
                      <tr key={index}>
                        <td style={{
                          padding: '12px',
                          border: '1px solid #ddd',
                          backgroundColor: '#f8f8f8',
                          fontWeight: 'bold'
                        }}>{item.aspect}</td>
                        <td style={{
                          padding: '12px',
                          border: '1px solid #ddd'
                        }}>{item.arabica}</td>
                        <td style={{
                          padding: '12px',
                          border: '1px solid #ddd'
                        }}>{item.robusta}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {selectedTopic.id === 'caffeine' && (
              <>
                <div style={{ gridColumn: '1 / -1' }}>
                  <h3 style={commonStyles.sectionTitle}>主な効果</h3>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '20px',
                    marginBottom: '24px'
                  }}>
                    {selectedTopic.content.effects.map((effect, index) => (
                      <div key={index} style={{
                        padding: '16px',
                        backgroundColor: '#f8f8f8',
                        borderRadius: '8px'
                      }}>
                        <h4 style={{ margin: '0 0 8px 0', color: '#2C1810' }}>{effect.type}</h4>
                        <p style={{ margin: '0 0 8px 0', color: '#666' }}>{effect.description}</p>
                        <p style={{ margin: 0, color: '#888', fontSize: '0.9em' }}>{effect.timing}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 style={commonStyles.sectionTitle}>安全ガイドライン</h3>
                  <ul style={commonStyles.list}>
                    {selectedTopic.content.safetyGuidelines.map((guideline, index) => (
                      <li key={index}>{guideline}</li>
                    ))}
                  </ul>
                </div>
              </>
            )}

            {selectedTopic.id === 'health' && (
              <>
                <div style={{ gridColumn: '1 / -1' }}>
                  <h3 style={commonStyles.sectionTitle}>健康効果</h3>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '20px',
                    marginBottom: '24px'
                  }}>
                    {selectedTopic.content.benefits.map((benefit, index) => (
                      <div key={index} style={{
                        padding: '16px',
                        backgroundColor: '#f8f8f8',
                        borderRadius: '8px'
                      }}>
                        <h4 style={{ margin: '0 0 8px 0', color: '#2C1810' }}>{benefit.effect}</h4>
                        <p style={{ margin: '0 0 8px 0', color: '#666' }}>{benefit.description}</p>
                        <p style={{ margin: 0, color: '#888', fontSize: '0.9em' }}>{benefit.research}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 style={commonStyles.sectionTitle}>摂取時の注意点</h3>
                  <ul style={commonStyles.list}>
                    {selectedTopic.content.considerations.map((consideration, index) => (
                      <li key={index}>{consideration}</li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CoffeeBasics;