import React, { useState } from 'react';
import commonStyles from '../styles/commonStyles';

const BrewingMethods = ({ onBack }) => {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'すべての抽出方法' },
    { id: 'hot', name: '温抽出' },
    { id: 'cold', name: '冷抽出' },
    { id: 'pressure', name: '圧力抽出' }
  ];

  const brewingMethods = [
    {
      name: "ペーパードリップ",
      category: "hot",
      icon: "☕",
      difficulty: "初級",
      brewTime: "2-3分",
      groundSize: "中細挽き",
      waterTemp: "92-96℃",
      ratio: "コーヒー1：水15-16",
      description: "ペーパーフィルターを使用して、お湯を注ぎ抽出する最も一般的な方法です。",
      characteristics: {
        clarity: 9,
        body: 5,
        flavor: 8,
        ease: 8
      },
      equipment: [
        "ドリッパー",
        "ペーパーフィルター",
        "サーバー",
        "ケトル"
      ],
      steps: [
        "フィルターを折って予熱する",
        "コーヒー粉を入れて中心を少し凹ませる",
        "お湯を少量注いで蒸らす（30秒）",
        "中心から螺旋を描くように注ぐ",
        "2-3回に分けて注ぐ"
      ],
      tips: [
        "粉の表面が平らになるように注ぐ",
        "フィルターの側面に粉が付かないよう注意",
        "一定の速度でお湯を注ぐ"
      ],
      pros: [
        "クリーンな味わい",
        "手軽さ",
        "道具が安価"
      ],
      cons: [
        "技術が必要",
        "ペーパーの味が出ることがある",
        "大量抽出には向かない"
      ]
    },
    {
      name: "フレンチプレス",
      category: "hot",
      icon: "🔧",
      difficulty: "初級",
      brewTime: "4-5分",
      groundSize: "粗挽き",
      waterTemp: "93-96℃",
      ratio: "コーヒー1：水16-17",
      description: "粗挽きのコーヒー粉とお湯を直接接触させ、金属フィルターでこす抽出方法です。",
      characteristics: {
        clarity: 6,
        body: 9,
        flavor: 7,
        ease: 9
      },
      equipment: [
        "フレンチプレス",
        "計量スプーン",
        "ケトル",
        "タイマー"
      ],
      steps: [
        "コーヒー粉を入れる",
        "お湯を注ぐ",
        "4分待つ",
        "プランジャーをゆっくり押し下げる",
        "すぐにカップに注ぐ"
      ],
      tips: [
        "抽出後は速やかに注ぐ",
        "プランジャーは慎重に押す",
        "粗挽きを使用する"
      ],
      pros: [
        "コクのある味わい",
        "オイルを含んだ風味",
        "簡単な操作"
      ],
      cons: [
        "微粉が残ることがある",
        "洗浄が少し面倒",
        "抽出時間の調整が必要"
      ]
    },
    {
      name: "エスプレッソ",
      category: "pressure",
      icon: "💨",
      difficulty: "上級",
      brewTime: "20-30秒",
      groundSize: "極細挽き",
      waterTemp: "90-96℃",
      ratio: "コーヒー1：水2",
      description: "高圧で短時間抽出する方法。濃厚な味わいとクレマが特徴です。",
      characteristics: {
        clarity: 7,
        body: 10,
        flavor: 9,
        ease: 5
      },
      equipment: [
        "エスプレッソマシン",
        "タンパー",
        "グラインダー",
        "クリーニングブラシ"
      ],
      steps: [
        "豆を極細挽きに挽く",
        "ポルタフィルターに粉を入れる",
        "タンピングする",
        "抽出する（9気圧、20-30秒）",
        "クレマを確認"
      ],
      tips: [
        "タンピング圧は約20kg",
        "抽出時間を守る",
        "グラインドサイズの調整が重要"
      ],
      pros: [
        "濃厚な味わい",
        "クレマの形成",
        "様々なアレンジが可能"
      ],
      cons: [
        "高価な機材が必要",
        "技術習得に時間がかかる",
        "メンテナンスが必要"
      ]
    },
    {
      name: "サイフォン",
      category: "hot",
      icon: "🧪",
      difficulty: "上級",
      brewTime: "1.5-2分",
      groundSize: "中挽き",
      waterTemp: "90-95℃",
      ratio: "コーヒー1：水15",
      description: "真空式サイフォンで抽出する方法。見た目も美しく、クリアな味わいが特徴です。",
      characteristics: {
        clarity: 10,
        body: 6,
        flavor: 9,
        ease: 4
      },
      equipment: [
        "サイフォン本体",
        "アルコールランプ/バーナー",
        "クロス/ペーパーフィルター",
        "攪拌棒"
      ],
      steps: [
        "下部に水を入れる",
        "上部にフィルターをセット",
        "加熱して水を上部に移動",
        "コーヒー粉を入れて攪拌",
        "火を消して下部に落とす"
      ],
      tips: [
        "適切な温度管理が重要",
        "攪拌は優しく行う",
        "火加減の調整が必要"
      ],
      pros: [
        "クリアな味わい",
        "見た目の魅力",
        "温度管理が容易"
      ],
      cons: [
        "準備と後片付けが面倒",
        "技術が必要",
        "破損のリスク"
      ]
    },
    {
      name: "水出し",
      category: "cold",
      icon: "❄️",
      difficulty: "初級",
      brewTime: "8-12時間",
      groundSize: "中粗挽き～粗挽き",
      waterTemp: "常温または冷水",
      ratio: "コーヒー1：水8-10",
      description: "常温または冷水で長時間かけて抽出する方法。まろやかな味わいが特徴です。",
      characteristics: {
        clarity: 8,
        body: 5,
        flavor: 7,
        ease: 10
      },
      equipment: [
        "水出し専用ポット",
        "フィルター",
        "計量スプーン",
        "冷蔵庫"
      ],
      steps: [
        "コーヒー粉をフィルターに入れる",
        "水を注ぐ",
        "冷蔵庫で8-12時間抽出",
        "フィルターを取り出す",
        "氷を入れて楽しむ"
      ],
      tips: [
        "粗めの挽き方を選ぶ",
        "清潔な器具を使用",
        "抽出後は速やかに飲む"
      ],
      pros: [
        "まろやかな味わい",
        "低酸性",
        "簡単な準備"
      ],
      cons: [
        "抽出に時間がかかる",
        "一度に大量準備が必要",
        "豆の特徴が出にくい"
      ]
    },
    {
      name: "エアロプレス",
      category: "pressure",
      icon: "🎯",
      difficulty: "中級",
      brewTime: "1-2分",
      groundSize: "中細挽き～細挽き",
      waterTemp: "80-95℃",
      ratio: "コーヒー1：水12-15",
      description: "空気圧を利用して短時間で抽出する方法。携帯性が高く、様々なレシピがあります。",
      characteristics: {
        clarity: 8,
        body: 7,
        flavor: 8,
        ease: 7
      },
      equipment: [
        "エアロプレス本体",
        "専用フィルター",
        "攪拌棒",
        "ケトル"
      ],
      steps: [
        "フィルターをセット",
        "コーヒー粉を入れる",
        "お湯を注いで攪拌",
        "1分待つ",
        "ゆっくり押し下げる"
      ],
      tips: [
        "水温を調整して味を変える",
        "逆さまにしての抽出も可能",
        "押す速度を一定に"
      ],
      pros: [
        "携帯性が高い",
        "クリーンな味わい",
        "抽出時間が短い"
      ],
      cons: [
        "一度に少量しか作れない",
        "専用フィルターが必要",
        "安定性に注意が必要"
      ]
    },
    {
      name: "モカポット",
      category: "pressure",
      icon: "🏺",
      difficulty: "中級",
      brewTime: "3-4分",
      groundSize: "中細挽き",
      waterTemp: "沸騰",
      ratio: "固定",
      description: "直火で加熱し、蒸気圧で抽出する方法。濃厚なコーヒーが楽しめます。",
      characteristics: {
        clarity: 6,
        body: 9,
        flavor: 8,
        ease: 6
      },
      equipment: [
        "モカポット本体",
        "コンロ",
        "計量スプーン",
        "タオル"
      ],
      steps: [
        "下部に水を入れる",
        "フィルターに粉を入れる",
        "組み立てて火にかける",
        "沸騰音を確認",
        "抽出が完了したら火を止める"
      ],
      tips: [
        "粉は押し込まない",
        "火加減は中火～弱火",
        "抽出後すぐに冷やす"
      ],
      pros: [
        "濃厚な味わい",
        "シンプルな構造",
        "ガス火でも使える"
      ],
      cons: [
        "温度管理が難しい",
        "洗浄が面倒",
        "火傷に注意"
      ]
    },
    {
      name: "ネルドリップ",
      category: "hot",
      icon: "🧵",
      difficulty: "上級",
      brewTime: "3-4分",
      groundSize: "中挽き",
      waterTemp: "90-95℃",
      ratio: "コーヒー1：水15",
      description: "布フィルターを使用する伝統的な抽出方法。まろやかでコクのある味わいが特徴です。",
      characteristics: {
        clarity: 7,
        body: 8,
        flavor: 9,
        ease: 5
      },
      equipment: [
        "ネルドリッパー",
        "ネルフィルター",
        "サーバー",
        "ケトル"
      ],
      steps: [
        "ネルを湯通しする",
        "コーヒー粉を入れる",
        "中心から少量ずつ注ぐ",
        "3-4回に分けて注ぐ",
        "最後の一滴まで待つ"
      ],
      tips: [
        "ネルの手入れが重要",
        "注ぐ速度を一定に",
        "使用後は清潔に保管"
      ],
      pros: [
        "まろやかな口当たり",
        "豊かな風味",
        "オイルを程よく抽出"
      ],
      cons: [
        "メンテナンスが面倒",
        "技術習得が必要",
        "準備に時間がかかる"
      ]
    }
  ];

  const getCharacteristicColor = (value) => {
    if (value >= 8) return '#2E7D32';
    if (value >= 6) return '#FFA000';
    return '#C62828';
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case '初級': return '#4CAF50';
      case '中級': return '#FF9800';
      case '上級': return '#F44336';
      default: return '#757575';
    }
  };

  const filteredMethods = selectedCategory === 'all'
    ? brewingMethods
    : brewingMethods.filter(method => method.category === selectedCategory);

    return (
        <div style={commonStyles.pageContainer}>
          <div style={commonStyles.header}>
            <h1 style={commonStyles.pageTitle}>
              抽出方法
            </h1>
            <button onClick={onBack} style={commonStyles.backButton}>
              ホームに戻る
            </button>
          </div>
      
          <div style={commonStyles.categoryContainer}>
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                style={commonStyles.categoryButton(selectedCategory === category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
      
          <div style={commonStyles.cardGrid}>
            {filteredMethods.map((method) => (
              <div 
                key={method.name}
                onClick={() => setSelectedMethod(method)}
                style={{
                  ...commonStyles.card,
                  cursor: 'pointer',
                  transition: commonStyles.transition.default,
                  transform: selectedMethod?.name === method.name ? 'scale(1.02)' : 'scale(1)',
                  boxShadow: selectedMethod?.name === method.name
                    ? '0 8px 16px rgba(0,0,0,0.2)'
                    : '0 2px 4px rgba(0,0,0,0.1)',
                }}
              >
                <div style={commonStyles.cardHeader}>
                  <span style={commonStyles.cardIcon}>{method.icon}</span>
                  <div>
                    <h3 style={commonStyles.cardTitle}>{method.name}</h3>
                    <span style={{
                      fontSize: '12px',
                      padding: `${commonStyles.spacing.xs} ${commonStyles.spacing.md}`,
                      borderRadius: '12px',
                      backgroundColor: getDifficultyColor(method.difficulty),
                      color: 'white',
                      display: 'inline-block',
                      marginTop: commonStyles.spacing.xs
                    }}>
                      {method.difficulty}
                    </span>
                  </div>
                </div>
      
                <p style={commonStyles.cardDescription}>{method.description}</p>
      
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: commonStyles.spacing.md,
                  fontSize: '14px',
                  color: commonStyles.colors.textSecondary
                }}>
                  <div>抽出時間: {method.brewTime}</div>
                  <div>挽き方: {method.groundSize}</div>
                  <div>水温: {method.waterTemp}</div>
                  <div>比率: {method.ratio}</div>
                </div>
              </div>
            ))}
          </div>
      
          {selectedMethod && (
            <div style={commonStyles.detailPanel}>
              <div style={commonStyles.detailHeader}>
                <span style={commonStyles.detailIcon}>{selectedMethod.icon}</span>
                <div>
                  <h2 style={commonStyles.detailTitle}>{selectedMethod.name}</h2>
                  <span style={{
                    fontSize: '14px',
                    padding: `${commonStyles.spacing.xs} ${commonStyles.spacing.lg}`,
                    borderRadius: '12px',
                    backgroundColor: getDifficultyColor(selectedMethod.difficulty),
                    color: 'white',
                    display: 'inline-block',
                    marginTop: commonStyles.spacing.md
                  }}>
                    {selectedMethod.difficulty}
                  </span>
                </div>
              </div>
      
              <div style={commonStyles.detailGrid}>
                <div>
                  <h3 style={commonStyles.sectionTitle}>必要な道具</h3>
                  <ul style={commonStyles.list}>
                    {selectedMethod.equipment.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
      
                <div>
                  <h3 style={commonStyles.sectionTitle}>抽出手順</h3>
                  <ol style={commonStyles.list}>
                    {selectedMethod.steps.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ol>
                </div>
      
                <div>
                  <h3 style={commonStyles.sectionTitle}>コツ</h3>
                  <ul style={commonStyles.list}>
                    {selectedMethod.tips.map((tip, index) => (
                      <li key={index}>{tip}</li>
                    ))}
                  </ul>
                </div>
      
                <div>
                  <h3 style={commonStyles.sectionTitle}>特徴</h3>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: commonStyles.spacing.md
                  }}>
                    {Object.entries(selectedMethod.characteristics).map(([key, value]) => (
                      <div 
                        key={key}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: commonStyles.spacing.md
                        }}
                      >
                        <div style={{ flex: 1 }}>{key}:</div>
                        <div style={{
                          backgroundColor: getCharacteristicColor(value),
                          color: 'white',
                          padding: `${commonStyles.spacing.xs} ${commonStyles.spacing.md}`,
                          borderRadius: '4px',
                          fontSize: '14px'
                        }}>
                          {value}/10
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
      
                <div>
                  <h3 style={commonStyles.sectionTitle}>メリット</h3>
                  <ul style={commonStyles.list}>
                    {selectedMethod.pros.map((pro, index) => (
                      <li key={index}>{pro}</li>
                    ))}
                  </ul>
                </div>
      
                <div>
                  <h3 style={commonStyles.sectionTitle}>デメリット</h3>
                  <ul style={commonStyles.list}>
                    {selectedMethod.cons.map((con, index) => (
                      <li key={index}>{con}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      );
};

export default BrewingMethods;