import Header from '@app/components/Header';
import React, { ReactNode, useEffect } from 'react';
import Head from 'next/head';
import useTransactionsStore from '@app/features/useTransactionsStore';

const MainLayout = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    useTransactionsStore.getState().initialize();
  }, []);
  return (
    <div className="main-layout">
      <Head>
        <title>Exquisite Land</title>

        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
      <style jsx>{`
        .main-layout {
          display: flex;
          flex-direction: column;
          height: 100vh;
          width: 100%;
        }
        main {
          flex: 1 1 auto;
        }
      `}</style>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
        @font-face {
          font-family: jaunt;
          src: url(‘/fonts/jaunt-webfont.eot’);
          src: url(‘/fonts/jaunt-webfont.eot?#iefix’)
              format(‘embedded-opentype’),
            url(‘/fonts/jaunt-webfont.woff’) format(‘woff’),
            url(‘/fonts/jaunt-webfont.ttf’) format(‘truetype’),
            url(‘/fonts/jaunt-webfont.svg#jauntmedium’) format(‘svg’);
          font-weight: normal;
          font-style: normal;
        }

        * {
          box-sizing: border-box;
        }
        html,
        body {
          font-size: 16px;
          font-family: 'VT323', monospace;
          margin: 0;
          padding: 0;
          height: 100%;
          background: #272424;
        }
        .jaunt {
          font-family: 'jaunt', monospace;
        }
        #__next {
          min-height: 100%;
        }
      `}</style>
    </div>
  );
};

export default React.memo(MainLayout);
