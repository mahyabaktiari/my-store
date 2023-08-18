import { AppProps } from 'next/app';
import { ThemeProvider } from './context/themeProvider';
import '../styles/_global.scss';
import { ThemeSwitcher } from '../components/ThemeSwitcher';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <ThemeSwitcher />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
