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



// Basic commands for next

// To create build
// npm run build

// To start npm
// npm run start

// To run on dev
// npm run dev  


// "scripts": {
//   "dev": "next dev",
//   "build": "next build",
//   "start": "next start -H 0.0.0.0 -p $PORT",
//   "start:dev": "next start",
//   "start:prod": "next start -p 80",
//   "export": "next build && next export"
// },
