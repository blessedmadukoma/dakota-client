import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Header from "@/components/Header";
import LeftSide from "@/components/LeftSide";
import RightSide from "@/components/RightSide";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Dakota</title>
        <meta name="description" content="Seamlessly making you efficiently productive" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-green-50 min-h-screen">
        <section className="px-8 py-6">
          <Header />

          <section className="flex justify-between mt-4 p-2">
            <LeftSide />
            <RightSide />
          </section>
        </section>
      </main>
    </>
  );
}
