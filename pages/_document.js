import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
<Html>
<Head>
<meta name="viewport" content="width=device-width, intial-scale=1.0" />
<meta charset="UTF-8" />
<meta name="robots" content="noindex,nofollow" />
<meta name="description" content="Harperbazar" />
<meta name="keywords" content="Fashion news, latest fashion tips, Celebrity Style updates, fashion news online, fashion news live, fashion Tips, Beauty Tips, fashion style Tips, fashion Trends, fashion advice, latest fashion trends, fashion designers." />
<meta property="og:site_name" content="Harperbazar" />
<meta property="og:title" content="Harperbazar" />
<meta property="og:description" content="Harperbazar" />
<meta property="og:image" content="" />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@Harperbazar" />
<meta name="twitter:creator" content="@Harperbazar" />
<meta name="twitter:url" content="https://alpha-harperbazar.intoday.in" />
<meta name="twitter:title" content="Harperbazar" />
<meta name="twitter:description" content="Harperbazar" />
<meta name="twitter:image" content="" />

<link rel="icon" href="https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/favicon.ico" type="image/x-icon" />
<link rel="canonical" href="http://alpha-harperbazar.intoday.in/fashion" />
</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument