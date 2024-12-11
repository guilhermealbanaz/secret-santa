import { useEffect, useState } from 'react';
import { DrawPage } from './presentation/pages/DrawPage';
import { DrawFactory } from './infrastructure/factories/DrawFactory';

function App() {
  const [useCases, setUseCases] = useState(null);

  useEffect(() => {
    DrawFactory.createUseCases().then(setUseCases);
  }, []);

  if (!useCases) return null;
  return <DrawPage useCases={useCases} />;
}

export default App;