import { AppProps } from 'next/app';
import { ThemeProvider } from './context/themeProvider';
import '../styles/_global.scss';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
