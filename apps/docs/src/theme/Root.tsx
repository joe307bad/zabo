import React from 'react';
import Head from '@docusaurus/Head';

// Default implementation, that you can customize
function Root({children}) {
  return <>
  <Head>
    <link href="http://fonts.cdnfonts.com/css/georgia" rel="stylesheet" />
  </Head>
    <>{children}</>
  </>;
}

export default Root;
