import React from 'react';
import { Loader2 } from 'lucide-react';

const LoadingSpinner = ({ size = 'default', fullPage = false }) => {
  const sizeClass = {
    small: 'w-4 h-4',
    default: 'w-8 h-8',
    large: 'w-12 h-12'
  }[size] || 'w-8 h-8';

  if (fullPage) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white/80">
        <Loader2 className={`animate-spin text-primary ${sizeClass}`} />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center p-4">
      <Loader2 className={`animate-spin text-primary ${sizeClass}`} />
    </div>
  );
};

export default LoadingSpinner;