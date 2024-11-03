import { useState, useCallback } from 'react';

export const useAsyncError = (initialLoading = false) => {
  const [loading, setLoading] = useState(initialLoading);
  const [error, setError] = useState(null);

  const handleAsync = useCallback(async (asyncFn, errorMessage = 'エラーが発生しました') => {
    setLoading(true);
    setError(null);
    
    try {
      const result = await asyncFn();
      return result;
    } catch (err) {
      setError({
        message: err.message || errorMessage,
        timestamp: new Date().toISOString(),
        details: err
      });
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    loading,
    error,
    handleAsync,
    clearError
  };
};