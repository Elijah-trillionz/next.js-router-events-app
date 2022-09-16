import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [routeIsChanging, setRouteIsChanging] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    router.events.on('routeChangeStart', (url) => {
      console.log(url);
      setRouteIsChanging(true);

      if (url.includes('/notes/')) {
        // store it locally
        localStorage.setItem('last-visited-note', url);
      }
    });

    router.events.on('routeChangeComplete', (url) => {
      setRouteIsChanging(false);
    });

    router.events.on('beforeHistoryChange', (url) => {
      console.log('history changing to ', url);
    });

    return () => {
      router.events.off('routeChangeStart', () => {
        setRouteIsChanging(false);
      });
      router.events.off('routeChangeComplete', () => {});
    };
  }, []);

  useEffect(() => {
    if (routeIsChanging) {
      let timer = setInterval(() => {
        if (progress >= 97 && progress <= 99)
          setProgress((_progress) => _progress - 5);
        else setProgress((_progress) => _progress + 1);
      }, 50);

      return () => {
        clearInterval(timer);
      };
    } else {
      setProgress(0);
    }
  }, [routeIsChanging]);

  return (
    <>
      {routeIsChanging && (
        <span
          className='global-loading-indicator'
          style={{ width: `${progress}%` }}
        />
      )}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
