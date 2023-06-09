import Head from "next/head";
import Header from "@/components/Header";
import dynamic from "next/dynamic";

const FetchPosts = dynamic(() => import("blog/fetchPosts"));

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <h1 style={{ marginBottom: "20px" }}>Main App Homepage</h1>
        <h2 style={{ marginBottom: "40px" }}>
          Shared component displaying latest posts from Mirco Front End 2
        </h2>
        <div style={{ maxWidth: "600px", margin: "auto" }}>
          <FetchPosts />
        </div>
      </main>
    </>
  );
}
