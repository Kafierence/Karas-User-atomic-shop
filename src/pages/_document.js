import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    return await Document.getInitialProps(ctx);
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.png" />
          <meta
            property="og:title"
            content="Karas - Grocery Online Store"
          />
          <meta property="og:type" content="eCommerce Website" />
          <meta
            property="og:description"
            content="Grocery Store Website"
          />
          <meta
            property="og:url"
            content="https://karas-user-atomic-shop.vercel.app/"
          />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/karas/image/upload/v1686625510/personal/facebook-page_k2qcvy.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
