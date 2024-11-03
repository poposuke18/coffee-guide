// App.js の修正
import React, { useState } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import CoffeeHome from './components/CoffeeHome';
import CoffeeBeanCharacteristics from './components/CoffeeBeanCharacteristics';
import RoastingLevels from './components/RoastingLevels';
import ProcessingMethods from './components/ProcessingMethods';
import BrewingMethods from './components/BrewingMethods';
import CoffeeTypes from './components/CoffeeTypes';
import CoffeeBasics from './components/CoffeeBasics'; // 追加

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleBack = () => {
    setCurrentPage('home');
  };

  const renderPage = () => {
    switch(currentPage) {
      case 'basics':  // 追加
        return <CoffeeBasics onBack={handleBack} />;
      case 'beans':
        return <CoffeeBeanCharacteristics onBack={handleBack} />;
      case 'roasting':
        return <RoastingLevels onBack={handleBack} />;
      case 'processing':
        return <ProcessingMethods onBack={handleBack} />;
      case 'brewing':
        return <BrewingMethods onBack={handleBack} />;
      case 'types':
        return <CoffeeTypes onBack={handleBack} />;
      default:
        return <CoffeeHome onPageChange={setCurrentPage} />;
    }
  };

  return (
    <ErrorBoundary>
      <div className="App" style={{ backgroundColor: '#F5F5F5', minHeight: '100vh' }}>
        {renderPage()}
      </div>
    </ErrorBoundary>
  );
}

export default App;