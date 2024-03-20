import Header from "@/components/Header";
import Head from "next/head";
import Image from "next/image";
export default function Home() {
  return (<div>
    <Head>
    <title>Insatagrsm</title>
    <mete name="description" content="General"/>
    <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header/>

    </div>
  );
}
