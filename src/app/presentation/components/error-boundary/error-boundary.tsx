import { Component, ErrorInfo, ReactNode } from 'react';

import { FullPageError } from '~/app/presentation/components';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ error, errorInfo });
  }

  public render() {
    if (this.state.hasError) {
      return <FullPageError />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
