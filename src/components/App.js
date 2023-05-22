import { Balance } from './Balance';
import { Controls } from './Controls';
import { Layout } from './Layout';

export const App = () => {
  return (
    <Layout>
      <Balance />
      <Controls />
    </Layout>
  );
};
