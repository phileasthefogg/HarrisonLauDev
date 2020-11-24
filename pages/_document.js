import Document, { Html, Head, Main, NextScript } from 'next/document';
// Import styled components ServerStyleSheet
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();

    // Step 2: Retrieve styles from components in the page
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />),
    );

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();

    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags };
  }

  render() {
    return (
      <Html>
        <Head>
          {/* Step 5: Output the styles in the head  */}
            <link href={"https://fonts.googleapis.com/css2?family=Antic+Slab&family=Bitter:ital,wght@0,200;0,300;0,400;1,300&family=Noto+Sans+JP:wght@100;300;400&family=Zilla+Slab:ital,wght@0,300;0,400;0,500;1,300&display=swap"} rel={"stylesheet"}/>
            {this.props.styleTags}
        </Head>
          <body>
            <Main />
            <NextScript />
          </body>
      </Html>
    );
  }
}