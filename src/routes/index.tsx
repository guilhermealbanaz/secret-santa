import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// Componente de loading
const LoadingFallback = () => (
  <div className="min-h-screen w-full bg-gradient-to-br from-[#0A0F1E] via-[#121A3A] to-[#0A0F1E] flex items-center justify-center">
    <div className="text-white">Carregando...</div>
  </div>
);

// Lazy loading dos componentes com importação default
const HomePage = lazy(() => import('../presentation/pages/HomePage'));
const DrawPage = lazy(() => import('../presentation/pages/DrawPage'));
const ParticipantsPage = lazy(() => import('../presentation/pages/ParticipantsPage'));
const ParticipantRegistrationPage = lazy(() => import('../presentation/pages/ParticipantRegistrationPage'));
const DrawResultPage = lazy(() => import('../presentation/pages/DrawResultPage'));
const ViewResultPage = lazy(() => import('../presentation/pages/ViewResultPage'));

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