import React from "react";

import About from "../components/About";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Works from "../components/Works";
import Contacts from "../components/Contacts";
import Head from "next/head";

// import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import LanguageSwitcher from "../components/LanguageSwitcher";

export async function getStaticProps({ locale }) {
  return {
    props: {
      // ...(await serverSideTranslations(locale, [
      //   'common',
      // ])),
      // Will be passed to the page component as props
    },
  };
}

export default function Home() {
  return (
    <div className="bg-slate-800 text-slate-200 min-h-screen flex">
      <Head>
        <title>JUNAI TSENDAYUSH - Portofolio</title>
      </Head>
      {/* <div className='absolute top-2 right-2 z-10'>
        <LanguageSwitcher/>
      </div> */}
      <div className="bg-slate-700 w-0 lg:w-60">
        <Nav className="w-0 lg:w-60" />
      </div>
      <div className="flex-1">
        <Hero></Hero>
        <About></About>
        <Works></Works>
        <Contacts></Contacts>
      </div>
    </div>
  );
}
