import Head from "next/head";
import React from "react";


type Props = {
  children?: React.ReactNode;
};

const Layout = (props: Props) => {
  <Head>
    <title>To Do App</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="Extremely minimalistic todo app!" />
    <link rel="icon" href="/favicon.ico" />
  </Head>

  return (
    <div className="w-full h-full bg-gradient-to-r from-custom-blue to-custom-purple">
      {props.children}
    </div>
  )
}

export default Layout;