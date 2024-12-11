import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { DrawPage } from '../pages/DrawPage';
import { ParticipantsPage } from '../pages/ParticipantsPage';
import { ParticipantRegistrationPage } from '../pages/ParticipantRegistrationPage';
import { DrawResultPage } from '../pages/DrawResultPage';
import { ViewResultPage } from '../pages/ViewResultPage';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/draw/new" element={<DrawPage />} />
        <Route path="/draw/:id" element={<DrawPage />} />
        <Route path="/draw/:id/participants" element={<ParticipantsPage />} />
        <Route path="/draw/:id/register" element={<ParticipantRegistrationPage />} />
        <Route path="/draw/:id/result" element={<DrawResultPage />} />
        <Route path="/draw/:id/result/:email" element={<ViewResultPage />} />
      </Routes>
    </BrowserRouter>
  );
} 