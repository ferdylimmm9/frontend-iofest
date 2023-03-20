import { ServerStyles, createStylesServer } from '@mantine/next';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';

// optional: you can provide your cache as a first argument in createStylesServer function
const stylesServer = createStylesServer();

export default class _Document extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: [
        initialProps.styles,
        <ServerStyles
          html={initialProps.html}
          server={stylesServer}
          key="styles"
        />,
      ],
    };
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />

          <link
            rel="android-chrome"
            sizes="192x192"
            href="/employee/assets/android-chrome-192x192.png"
          />
          <link
            rel="android-chrome"
            sizes="512x512"
            href="/employee/assets/android-chrome-512x512.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/employee/assets/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/employee/assets/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/employee/assets/favicon-16x16.png"
          />
          <link rel="manifest" href="/employee/assets/site.webmanifest" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
