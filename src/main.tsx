import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ClerkProvider } from '@clerk/clerk-react';

import App from './App.tsx';
import './index.css';
const PUBLISHABLE_KEY = "pk_test_Y2xvc2luZy1xdWFpbC03Ni5jbGVyay5hY2NvdW50cy5kZXYk";
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <App />
  </ClerkProvider>
  </StrictMode>
   
);