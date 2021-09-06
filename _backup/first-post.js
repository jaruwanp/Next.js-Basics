import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}



/*

      <h3>Code splitting and prefetching</h3>
<p>
Next.js does code splitting automatically, so each page only loads what’s necessary for that page. That means when the homepage is rendered, the code for other pages is not served initially.
</p>
<p>
This ensures that the homepage loads quickly even if you have hundreds of pages.
</p>
<p>
Only loading the code for the page you request also means that pages become isolated.{"\n"}<b> If a certain page throws an error, the rest of the application would still work.</b> 
</p>
<p>
Furthermore, in a production build of Next.js, whenever Link components appear in the browser’s viewport, Next.js automatically prefetches the code for the linked page in the background. By the time you click the link, the code for the destination page will already be loaded in the background, and the page transition will be near-instant!
 </p>

 <>
 <h3>Summary</h3>

Next.js automatically optimizes your application for the best performance by code splitting, client-side navigation, and prefetching (in production).
<p>
You create routes as files under pages and use the built-in Link component. No routing libraries are required.
</p>

You can learn more about the Link component in the API reference for next/link and routing in general in the routing documentation.

  */
