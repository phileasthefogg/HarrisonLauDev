const App = ({ Component, pageProps }) => {
  // const { Component, pageProps } = this.props;
  return (
    <div>
      {/* <ThemeProvider theme={appTheme}> */}
        <Component {...pageProps} />
      {/* </ThemeProvider> */}
    </div>
  );
}

export default App;