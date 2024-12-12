import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Erro na aplicação:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen w-full bg-[#0A0A0B] flex items-center justify-center">
          <div className="max-w-lg w-full mx-4">
            <div className="bg-[#1A1A1A] border border-[#333] rounded-lg p-8 shadow-xl">
              <h1 className="text-2xl font-bold text-white mb-4">
                Ops! Algo deu errado
              </h1>
              <p className="text-gray-400 mb-6">
                Desculpe pelo inconveniente. Por favor, tente novamente mais tarde.
              </p>
              <div className="bg-[#242424] rounded p-4 mb-6">
                <p className="text-sm font-mono text-red-400">
                  {this.state.error?.message}
                </p>
              </div>
              <button
                onClick={() => window.location.href = '/'}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
              >
                Voltar para o início
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
} 