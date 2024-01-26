import React from 'react'
import ReactDOM from 'react-dom/client'

import App from '@src/App.jsx'

import './index.css'
import { Suspense } from 'react';

ReactDOM.createRoot(
  document.getElementById('root')
).render(
  <React.StrictMode>
    <Suspense fallback={<p>Loading...</p>}>
      <App />
    </Suspense>
  </React.StrictMode>,
);
