import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PageAbout } from './pages/pageAbout.tsx';
import { PageMain } from './pages/pageMain.tsx';
import { PageNotFound } from './pages/pageNotFound.tsx';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<PageAbout />} />
        <Route path="/" element={<PageMain />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
