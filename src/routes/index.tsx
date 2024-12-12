import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '../presentation/pages/HomePage';
import { DrawPage } from '../presentation/pages/DrawPage';
import { ParticipantsPage } from '../presentation/pages/ParticipantsPage';
import { ParticipantRegistrationPage } from '../presentation/pages/ParticipantRegistrationPage';
import { DrawResultPage } from '../presentation/pages/DrawResultPage';
import { ViewResultPage } from '../presentation/pages/ViewResultPage';
import { ErrorBoundary } from '../presentation/components/ErrorBoundary';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorBoundary><p>Algo deu errado</p></ErrorBoundary>
  },
  {
    path: '/draw/new',
    element: <DrawPage />,
    errorElement: <ErrorBoundary><p>Algo deu errado</p></ErrorBoundary>
  },
  {
    path: '/draw/:id',
    element: <DrawPage />,
    errorElement: <ErrorBoundary><p>Algo deu errado</p></ErrorBoundary>
  },
  {
    path: '/draw/:id/participants',
    element: <ParticipantsPage />,
    errorElement: <ErrorBoundary><p>Algo deu errado</p></ErrorBoundary>
  },
  {
    path: '/draw/:id/register',
    element: <ParticipantRegistrationPage />,
    errorElement: <ErrorBoundary><p>Algo deu errado</p></ErrorBoundary>
  },
  {
    path: '/draw/:id/result',
    element: <DrawResultPage />,
    errorElement: <ErrorBoundary><p>Algo deu errado</p></ErrorBoundary>
  },
  {
    path: '/draw/:id/result/:email',
    element: <ViewResultPage />,
    errorElement: <ErrorBoundary><p>Algo deu errado</p></ErrorBoundary>
  }
]); 