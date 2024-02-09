import ErrorFallback from '@components/common/molecule/ErrorFallback';
import { Modals } from '@components/common/molecule/Modals';
import BottomSheet from '@components/common/organism/BottomSheet';
import useHttpInterceptor from '@hooks/common/useHttpInterceptor';
import { Stack } from '@hooks/common/useStackFlow';
import { http } from '@utils/API';
import { WebviewBridge } from '@utils/webview';
import { useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Toaster } from 'react-hot-toast';

function App() {
  useHttpInterceptor(http);
  useEffect(() => {
    WebviewBridge.registerMessageListener();
    window.AppleID.auth.init({
      clientId: import.meta.env.VITE_APPLE_CLIENT_ID,
      scope: 'email',
      redirectURI: import.meta.env.VITE_APPLE_REDIRECT_URI,
      usePopup: false,
    });
    window.Kakao.init(import.meta.env.VITE_JAVASCRIPT_KEY);
  }, []);

  return (
    <div className="w-screen min-h-screen flex justify-center">
      <ErrorBoundary
        onReset={() => window.location.reload()}
        fallbackRender={({ resetErrorBoundary }) => (
          <ErrorFallback handleClick={resetErrorBoundary} />
        )}
      >
        <Stack />
        <Modals />
        <BottomSheet />
        <Toaster
          toastOptions={{
            style: {
              borderRadius: '100px',
            },
          }}
        />
      </ErrorBoundary>
    </div>
  );
}

export default App;
