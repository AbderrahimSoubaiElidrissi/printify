import "../styles/index.css";
import { QueryCache, ReactQueryCacheProvider } from "react-query";
import DocState from "../context/documents/DocState";
import AlertState from "../context/alert/AlertState";
const queryCache = new QueryCache();

function MyApp({ Component, pageProps }) {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <DocState>
        <AlertState>
          <Component {...pageProps} />
        </AlertState>
      </DocState>
    </ReactQueryCacheProvider>
  );
}

export default MyApp;
