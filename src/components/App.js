import { Balance } from './Balance';
import { Controls } from './Controls';
import { LangSwitcher } from './LangSwitcher';
import { Layout } from './Layout';

export const App = () => {
  return (
    <Layout>
      <LangSwitcher />
      <Balance />
      <Controls />
    </Layout>
  );
};
