import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import {
  Box,
  Flex,
  Image,
  Heading,
  Text
} from 'rebass'

const features = [
  {
    title: 'Easy to Use',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Hey there this is my first update!! :)
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout title="Hello">
  <Flex flexDirection="column" alignSelf='center' height='100%'  style={{height: '100%'}} justifyItems="center" alignContent="center" alignItems='center' justifyContent='center'>
    <Box alignSelf='center'  justifySelf='center' width={1/2} alignItems='center' textAlign="center">
      <Image width={200} src="img/logo.png" />
    </Box>
    <Box alignSelf='center'  justifySelf='center'  alignItems='center' width={2/3}>
      <Heading
        textAlign="center"
        fontSize={[ 4, 5, 6 ]}
        color='primary'
      >
        A set of guides and services for your home server.
      </Heading>
    </Box>
  </Flex>
    </Layout>
  );
}

export default Home;
