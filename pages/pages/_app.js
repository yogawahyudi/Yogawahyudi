import { useState, useMemo, createContext, useEffect,   } from 'react';
import '../styles/globals.css'
import Head from 'next/head';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ColorModeContext from '../src/component/Context/ColorModeContext';
import Layout from '../src/component/Layout/Layout';
import UnderDevelopment from '../src/component/Backdrop/UnderDevelopment';

function MyApp({ Component, pageProps }) {
  // Update the theme only if the mode changes
  const [mode, setMode] = useState('light');
  const [open, setOpen] = useState(true);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

   const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );
  const closeBackdrop = () => {
    setOpen(false)
    console.log("clic")
  }


  return (
    <>
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
      <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <UnderDevelopment open={open} onClick={()=>closeBackdrop()}/>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </ThemeProvider>
    </ColorModeContext.Provider>
    </>
  ) 
}

export default MyApp
