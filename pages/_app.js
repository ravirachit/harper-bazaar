import '../styles/globals.css';
import '../styles/Header.css';
import '../styles/common.css';
import Layout from '../components/layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
     <Component {...pageProps} />
   </Layout>
  )
}

export default MyApp
