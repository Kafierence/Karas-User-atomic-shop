import Document, { Html, Head, Main, NextScript } from 'next/document';
import FaceImage from 'public/facebook-page.png'
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
            content="Karas - Grocery Ecommerece Store"
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
            content={FaceImage}
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
