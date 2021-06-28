import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Joseg LEGO - Portfolio</title>
        <meta name="description" content="Joseg LEGO - Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Joseg LEGO</h1>
    </div>
  );
}
