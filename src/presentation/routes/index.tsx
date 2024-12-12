import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// Componente de loading
const LoadingFallback = () => (
  <div className="min-h-screen w-full bg-gradient-to-br from-[#0A0F1E] via-[#121A3A] to-[#0A0F1E] flex items-center justify-center">
    <div className="text-white">Carregando...</div>
  </div>
);

// Lazy loading dos componentes
const HomePage = lazy(() => import('../pages/HomePage').then(module => ({ default: module.default })));
const DrawPage = lazy(() => import('../pages/DrawPage').then(module => ({ default: module.default })));
const ParticipantsPage = lazy(() => import('../pages/ParticipantsPage').then(module => ({ default: module.default })));
const ParticipantRegistrationPage = lazy(() => import('../pages/ParticipantRegistrationPage').then(module => ({ default: module.default })));
const DrawResultPage = lazy(() => import('../pages/DrawResultPage').then(module => ({ default: module.default })));
const ViewResultPage = lazy(() => import('../pages/ViewResultPage').then(module => ({ default: module.default })));

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/draw/new" element={<DrawPage />} />
          <Route path="/draw/:id" element={<DrawPage />} />
          <Route path="/draw/:id/participants" element={<ParticipantsPage />} />
          <Route path="/draw/:id/register" element={<ParticipantRegistrationPage />} />
          <Route path="/draw/:id/result" element={<DrawResultPage />} />
          <Route path="/draw/:id/result/:email" element={<ViewResultPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
} 