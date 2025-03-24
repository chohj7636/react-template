import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import RootRouter from './routes';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RootRouter />
    </QueryClientProvider>
  );
}

export default App;
