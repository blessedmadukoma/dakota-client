import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Header from "@/components/Header";
import LeftSide from "@/components/LeftSide";
import RightSide from "@/components/RightSide";
import Layout from "@/components/Layout";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Dakota</title>
        <meta
          name="description"
          content="Seamlessly making you efficiently productive"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="flex flex-col p-10">
          <div className="mb-8">
            <Header dashboardText="Dashboard" />
          </div>

          <div className="flex space-x-4">
            <LeftSide />
            <RightSide />
          </div>
        </div>
      </Layout>
    </>
  );
}
