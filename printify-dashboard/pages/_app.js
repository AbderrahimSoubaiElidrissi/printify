import "../styles/index.css";
import DocState from "../context/documents/DocState";

function MyApp({ Component, pageProps }) {
  return (
    <DocState>
      <Component {...pageProps} />
    </DocState>
  );
}

export default MyApp;
