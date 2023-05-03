import { Layout } from './Layout';
import { RefExample } from './RefExample';
import { HttpReqAbort } from './HttpReqAbort';
import { HttpReqAbortOnEvent } from './HttpReqAbortOnEvent';
import { UseMemoExample } from './UseMemoExample';
import { MemoExample } from './MemoExample';
import { CallbackExample } from './CallbackExample';

export const App = () => {
  return (
    <Layout>
      {/* <RefExample /> */}
      {/* <HttpReqAbort /> */}
      {/* <HttpReqAbortOnEvent /> */}
      {/* <UseMemoExample /> */}
      {/* <MemoExample /> */}
      <CallbackExample />
    </Layout>
  );
};
