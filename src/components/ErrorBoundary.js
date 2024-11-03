import React from 'react';
import commonStyles from '../styles/commonStyles';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error) {
    // エラーが発生した時にステートを更新
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // エラー情報をステートに保存
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    // ここに実際のエラーログ送信などの処理を追加できます
    console.error('エラーが発生しました:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: commonStyles.spacing.xxl,
          backgroundColor: commonStyles.colors.cardBackground,
          borderRadius: '8px',
          maxWidth: '600px',
          margin: '2rem auto',
          textAlign: 'center',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <span style={{ fontSize: '48px', marginBottom: commonStyles.spacing.xl }}>
            😢
          </span>
          <h2 style={{ 
            color: commonStyles.colors.primary,
            marginBottom: commonStyles.spacing.lg 
          }}>
            申し訳ありません。エラーが発生しました。
          </h2>
          <p style={{ 
            color: commonStyles.colors.textSecondary,
            marginBottom: commonStyles.spacing.xl
          }}>
            ページを更新するか、しばらく時間をおいて再度お試しください。
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: commonStyles.spacing.lg }}>
            <button
              onClick={() => window.location.reload()}
              style={{
                ...commonStyles.backButton,
                backgroundColor: commonStyles.colors.primary
              }}
            >
              ページを更新する
            </button>
            <button
              onClick={() => window.history.back()}
              style={{
                ...commonStyles.backButton,
                backgroundColor: 'transparent',
                border: `1px solid ${commonStyles.colors.primary}`,
                color: commonStyles.colors.primary
              }}
            >
              前のページに戻る
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;