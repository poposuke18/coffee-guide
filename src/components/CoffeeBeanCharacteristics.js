import React, { useState } from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';
import commonStyles from '../styles/commonStyles';

const CoffeeBeanCharacteristics = ({ onBack }) => {
  const [selectedCoffee, setSelectedCoffee] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState('all');

  const regions = [
    { id: 'all', name: 'すべての地域' },
    { id: 'america', name: '中南米' },
    { id: 'africa', name: 'アフリカ' },
    { id: 'asia', name: 'アジア' },
    { id: 'others', name: 'その他' }
  ];

  const coffeeData = [
    {
      name: "ブラジル サントス",
      region: "america",
      country: "ブラジル",
      altitude: "800-1,200m",
      harvest: "5月-9月",
      characteristics: {
        コク: 7,
        苦味: 5,
        酸味: 3,
        香り: 6,
        甘み: 7
      },
      description: "柔らかな酸味と甘みが特徴で、飲みやすいコーヒーとして親しまれています。",
      flavor_notes: ["ナッツ", "チョコレート", "キャラメル"],
      processing: "ナチュラル / パルプドナチュラル",
      icon: "🇧🇷"
    },
    {
      name: "グアテマラ アンティグア",
      region: "america",
      country: "グアテマラ",
      altitude: "1,500-1,700m",
      harvest: "12月-3月",
      characteristics: {
        コク: 8,
        苦味: 6,
        酸味: 4,
        香り: 7,
        甘み: 6
      },
      description: "火山性の土壌で育つため、スパイシーでチョコレートのような風味が特徴です。",
      flavor_notes: ["チョコレート", "スパイス", "シトラス"],
      processing: "ウォッシュド",
      icon: "🇬🇹"
    },
    {
      name: "エチオピア イルガチェフェ",
      region: "africa",
      country: "エチオピア",
      altitude: "1,800-2,200m",
      harvest: "10月-12月",
      characteristics: {
        コク: 5,
        苦味: 3,
        酸味: 8,
        香り: 9,
        甘み: 7
      },
      description: "ジャスミンやベリーのようなフローラルな香りと明るい酸味が特徴です。",
      flavor_notes: ["ジャスミン", "ベリー", "柑橘"],
      processing: "ウォッシュド",
      icon: "🇪🇹"
    },
    {
      name: "コロンビア スプレモ",
      region: "america",
      country: "コロンビア",
      altitude: "1,200-2,000m",
      harvest: "4月-6月",
      characteristics: {
        コク: 7,
        苦味: 5,
        酸味: 6,
        香り: 7,
        甘み: 6
      },
      description: "バランスの取れた味わいと、カラメルのような甘みが特徴です。",
      flavor_notes: ["カラメル", "レッドフルーツ", "ナッツ"],
      processing: "ウォッシュド",
      icon: "🇨🇴"
    },
    {
      name: "ケニア AA",
      region: "africa",
      country: "ケニア",
      altitude: "1,700-2,000m",
      harvest: "11月-12月",
      characteristics: {
        コク: 6,
        苦味: 4,
        酸味: 9,
        香り: 8,
        甘み: 5
      },
      description: "ワインのような複雑な酸味とベリー系の風味が特徴です。",
      flavor_notes: ["ブラックベリー", "ワイン", "シトラス"],
      processing: "ウォッシュド",
      icon: "🇰🇪"
    },
    {
      name: "インドネシア マンデリン",
      region: "asia",
      country: "インドネシア",
      altitude: "900-1,300m",
      harvest: "通年",
      characteristics: {
        コク: 9,
        苦味: 8,
        酸味: 2,
        香り: 6,
        甘み: 4
      },
      description: "重厚なコクとスパイシーな風味、アースリーな味わいが特徴です。",
      flavor_notes: ["アース", "スパイス", "ハーブ"],
      processing: "ウェットハルド",
      icon: "🇮🇩"
    },
    {
      name: "イエメン モカ マタリ",
      region: "others",
      country: "イエメン",
      altitude: "1,500-2,100m",
      harvest: "9月-12月",
      characteristics: {
        コク: 7,
        苦味: 5,
        酸味: 7,
        香り: 8,
        甘み: 8
      },
      description: "伝統的な乾燥製法による独特のワイニーな風味が特徴です。",
      flavor_notes: ["ドライフルーツ", "スパイス", "チョコレート"],
      processing: "ナチュラル",
      icon: "🇾🇪"
    },
    {
      name: "コスタリカ タラス",
      region: "america",
      country: "コスタリカ",
      altitude: "1,500-1,900m",
      harvest: "12月-3月",
      characteristics: {
        コク: 7,
        苦味: 5,
        酸味: 7,
        香り: 8,
        甘み: 7
      },
      description: "クリーンで明るい酸味とハチミツのような甘みが特徴です。",
      flavor_notes: ["ハチミツ", "オレンジ", "キャラメル"],
      processing: "ハニー",
      icon: "🇨🇷"
    },
    {
      name: "パナマ ゲイシャ",
      region: "america",
      country: "パナマ",
      altitude: "1,600-1,800m",
      harvest: "1月-3月",
      characteristics: {
        コク: 5,
        苦味: 3,
        酸味: 8,
        香り: 10,
        甘み: 8
      },
      description: "ジャスミンやベルガモットのような華やかな香りと、繊細な味わいが特徴です。",
      flavor_notes: ["ジャスミン", "ベルガモット", "蜂蜜"],
      processing: "ウォッシュド",
      icon: "🇵🇦"
    },
    {
      name: "タンザニア キリマンジャロ",
      region: "africa",
      country: "タンザニア",
      altitude: "1,400-1,800m",
      harvest: "8月-12月",
      characteristics: {
        コク: 6,
        苦味: 4,
        酸味: 8,
        香り: 7,
        甘み: 6
      },
      description: "ワインのような酸味とブラックベリーの風味が特徴です。",
      flavor_notes: ["ブラックベリー", "ワイン", "柑橘"],
      processing: "ウォッシュド",
      icon: "🇹🇿"
    }
  ];

  const formatDataForRadar = (coffee) => {
    return Object.entries(coffee.characteristics).map(([key, value]) => ({
      subject: key,
      value: value
    }));
  };

  const filteredCoffee = selectedRegion === 'all' 
    ? coffeeData 
    : coffeeData.filter(coffee => coffee.region === selectedRegion);

    return (
      <div style={commonStyles.pageContainer}>
        <div style={commonStyles.header}>
          <h1 style={commonStyles.pageTitle}>
            コーヒー豆の特性
          </h1>
          
          <button onClick={onBack} style={commonStyles.backButton}>
            ホームに戻る
          </button>
        </div>
    
        <div style={commonStyles.categoryContainer}>
          {regions.map(region => (
            <button
              key={region.id}
              onClick={() => setSelectedRegion(region.id)}
              style={commonStyles.categoryButton(selectedRegion === region.id)}
            >
              {region.name}
            </button>
          ))}
        </div>
    
        <div style={commonStyles.cardGrid}>
          {filteredCoffee.map((coffee) => (
            <div 
              key={coffee.name}
              onClick={() => setSelectedCoffee(coffee)}
              style={{
                ...commonStyles.card,
                cursor: 'pointer',
                transform: selectedCoffee?.name === coffee.name ? 'scale(1.02)' : 'scale(1)',
                boxShadow: selectedCoffee?.name === coffee.name
                  ? '0 8px 16px rgba(0,0,0,0.2)'
                  : '0 2px 4px rgba(0,0,0,0.1)',
                transition: commonStyles.transition.default,
              }}
            >
              <div style={commonStyles.cardHeader}>
                <span style={commonStyles.cardIcon}>{coffee.icon}</span>
                <h3 style={commonStyles.cardTitle}>{coffee.name}</h3>
              </div>
    
              <div style={{ marginBottom: commonStyles.spacing.xl }}>
                <p style={commonStyles.cardDescription}>{coffee.description}</p>
              </div>
    
              <div style={{ width: '100%', height: '300px' }}>
                <RadarChart
                  width={280}
                  height={280}
                  data={formatDataForRadar(coffee)}
                  margin={{ top: 20, right: 30, bottom: 20, left: 30 }}
                >
                  <PolarGrid />
                  <PolarAngleAxis
                    dataKey="subject"
                    tick={{ fill: commonStyles.colors.textSecondary, fontSize: 12 }}
                  />
                  <PolarRadiusAxis
                    angle={30}
                    domain={[0, 10]}
                    tick={{ fill: commonStyles.colors.textSecondary, fontSize: 10 }}
                  />
                  <Radar
                    name={coffee.name}
                    dataKey="value"
                    stroke={commonStyles.colors.primary}
                    fill={commonStyles.colors.primary}
                    fillOpacity={0.6}
                  />
                  <Legend wrapperStyle={{ fontSize: 12 }} />
                </RadarChart>
              </div>
            </div>
          ))}
        </div>
    
        {selectedCoffee && (
          <div style={commonStyles.detailPanel}>
            <div style={commonStyles.detailHeader}>
              <span style={commonStyles.detailIcon}>{selectedCoffee.icon}</span>
              <h2 style={commonStyles.detailTitle}>{selectedCoffee.name}</h2>
            </div>
    
            <div style={commonStyles.detailGrid}>
              <div>
                <h3 style={commonStyles.sectionTitle}>基本情報</h3>
                <ul style={commonStyles.list}>
                  <li>産地: {selectedCoffee.country}</li>
                  <li>標高: {selectedCoffee.altitude}</li>
                  <li>収穫時期: {selectedCoffee.harvest}</li>
                  <li>加工方法: {selectedCoffee.processing}</li>
                </ul>
              </div>
    
              <div>
                <h3 style={commonStyles.sectionTitle}>風味ノート</h3>
                <div style={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  gap: commonStyles.spacing.md 
                }}>
                  {selectedCoffee.flavor_notes.map((note, index) => (
                    <span
                      key={index}
                      style={{
                        padding: `${commonStyles.spacing.xs} ${commonStyles.spacing.lg}`,
                        backgroundColor: '#F5F5F5',
                        borderRadius: '16px',
                        fontSize: '14px',
                        color: commonStyles.colors.textSecondary
                      }}
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>
    
              <div>
                <h3 style={commonStyles.sectionTitle}>特徴</h3>
                <p style={{ 
                  margin: 0, 
                  color: commonStyles.colors.textSecondary 
                }}>
                  {selectedCoffee.description}
                </p>
              </div>
    
              <div>
                <h3 style={commonStyles.sectionTitle}>特性値</h3>
                <ul style={commonStyles.list}>
                  {Object.entries(selectedCoffee.characteristics).map(([key, value]) => (
                    <li key={key}>{key}: {value}/10</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    );
};

export default CoffeeBeanCharacteristics;