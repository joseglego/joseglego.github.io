import React from 'react';
import Head from 'next/head';
import { Scrollspy } from '@makotot/ghostui';

import About from '../components/About';
import Analytics from '../components/Analytics';
import Experience from '../components/Experience';
import Footer from '../components/Footer';
import Landing from '../components/Landing';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import ThemeProvider from '../providers/ThemeProvider';
import Contact from '../components/Contact';

export default function Home () {
  const sectionRefs = [
    React.useRef(null),
    React.useRef(null),
    React.useRef(null),
    React.useRef(null),
    React.useRef(null)
  ];

  return (
    <>
      <Head>
        <title>Joseg LEGO - Software Developer | Frontend | WebUi | JavaScript FullStack</title>
        <meta name="description" content="Joseg LEGO - Portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" sizes="16x16 32x32 64x64" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="196x196" href="/favicon-192.png" />
        <link rel="icon" type="image/png" sizes="160x160" href="/favicon-160.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96.png" />
        <link rel="icon" type="image/png" sizes="64x64" href="/favicon-64.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png" />
        <link rel="apple-touch-icon" href="/favicon-57.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/favicon-114.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/favicon-72.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/favicon-144.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/favicon-60.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/favicon-120.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/favicon-76.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/favicon-152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon-180.png" />
        <meta name="msapplication-TileColor" content="#FFFFFF" />
        <meta name="msapplication-TileImage" content="/favicon-144.png" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </Head>
      <ThemeProvider>
        <Scrollspy sectionRefs={sectionRefs}>
          {({ currentElementIndexInViewport }) => (
            <>
              <Navbar activeSectionIndex={currentElementIndexInViewport} />
              <Landing ref={sectionRefs[0]} />
              <About ref={sectionRefs[1]} />
              <Experience ref={sectionRefs[2]} />
              <Projects ref={sectionRefs[3]} />
              <Contact ref={sectionRefs[4]} />
              <Footer />
              <Analytics webpageTitle="index" />
            </>
          )}
        </Scrollspy>
      </ThemeProvider>
    </>
  );
}
