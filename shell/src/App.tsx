import React from 'react';

import { Layout } from './components/layout/Layout';

import ErrorBoundary from './ErrorBoundary';

export const App = () => {
  return (
    <div>
      <Layout>
          <ErrorBoundary>
            <div>Increase</div>
          </ErrorBoundary>
          <ErrorBoundary>
            <div>Decrease</div>
          </ErrorBoundary>
      </Layout>
    </div>
  );
};
