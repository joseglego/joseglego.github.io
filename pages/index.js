import Head from 'next/head';

import About from '../components/About';
import Experience from '../components/Experience';
import Landing from '../components/Landing';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home () {
  return (
    <>
      <Head>
        <title>Joseg LEGO - Portfolio</title>
        <meta name="description" content="Joseg LEGO - Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}
