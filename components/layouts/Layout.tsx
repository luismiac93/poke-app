import Head from "next/head";
import React from "react";
import { Navbar } from "../ui/Navbar";

interface Props {
  children: JSX.Element | JSX.Element[];
  title?: string;
}

const origin = typeof window === "undefined" ? "" : window.location.origin;

export const Layout = ({ children, title = "Pokemon App" }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="author" content="LuisMi" />
        <meta name="description" content={`Pokemon description ${title}`} />
        <meta name="keywords" content={`${title} ,pokemon, pokedex`} />
        <meta property="og:title" content={`Information about ${title}`} />
        <meta
          property="og:description"
          content={`This is the page of ${title}`}
        />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>

      <Navbar />

      <main style={{ padding: "0px 20px" }}>{children}</main>
    </>
  );
};
