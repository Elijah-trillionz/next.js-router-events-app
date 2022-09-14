import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [routeIsChanging, setRouteIsChanging] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    router.events.on('routeChangeStart', (url) => {
      setRouteIsChanging(true);

      if (url.includes('/notes/')) {
        // store it locally
        localStorage.setItem('last-visited-note', url);
      }
      // console.log(`route is transitioning to ${url}`);
    });

    router.events.on('routeChangeComplete', (url) => {
      setRouteIsChanging(false);
      // console.log(`route successfully transitioned to ${url}`);
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
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;

// router.events.on('routeChangeStart', (url, { shallow }) => {
//   console.log(
//     `route is transitioning to ${url}, ${
//       shallow ? 'with' : 'without'
//     } shallow routing`
//   );
// });

// router.events.on('routeChangeComplete', (url) => {
//   console.log(`succesfully routed to ${url}`);
// });

// router.events.on('routeChangeError', (err, url) => {
//   console.log(
//     `encountered an error while routing to ${url}, ${
//       err.cancelled ? 'user cancelled the route' : err
//     }`
//   );
// });

// router.events.on('beforeHistoryChange', (url) => {
//   console.log(`about to change history to ${url}`);
// });

// router.events.on('hashChangeStart', (url, { shallow }) => {
//   console.log(
//     `changing hash to ${url}, of course it is shallow ${shallow}`
//   );
// });
