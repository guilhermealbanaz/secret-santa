import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '../presentation/pages/HomePage';
import { DrawPage } from '../presentation/pages/DrawPage';
import { DrawFactory } from '../infrastructure/factories/DrawFactory';
import { ErrorBoundary } from '../presentation/components/ErrorBoundary';

const drawLoader = async ({ params }) => {
  try {
    const useCases = await DrawFactory.createUseCases();
    return { 
      useCases,
      drawId: params.id
    };
  } catch (error) {
    throw new Error('Unable to load the draw. Please try again.');
  }
};

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/draw/:id',
    element: <DrawPage />,
    loader: drawLoader,
    errorElement: <ErrorBoundary />
  },
  {
    path: '/draw/:id/participant/:participantId',
    element: <DrawPage />,
    loader: drawLoader,
    errorElement: <ErrorBoundary />
  }
]); 