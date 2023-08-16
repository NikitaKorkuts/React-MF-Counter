import React from 'react';

import { Layout } from './components/layout/Layout';

import ErrorBoundary from './ErrorBoundary';

// @ts-ignore
const IncreaseButton = React.lazy(() => import("increase/IncreaseButton"));

// @ts-ignore
const DecreaseButton = React.lazy(() => import("decrease/DecreaseButton"));

export const App = () => {
  return (
    <div>
      <Layout>
        <React.Suspense fallback="Loading...">
          <ErrorBoundary>
            <IncreaseButton />
          </ErrorBoundary>
          <ErrorBoundary>
            <DecreaseButton />
          </ErrorBoundary>
        </React.Suspense>
      </Layout>
    </div>
  );
};
