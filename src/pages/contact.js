import Head from 'next/head';
import Layout from '../components/layout';
import { groq } from 'next-sanity';
import { querySanity, usePreviewSubscription } from '../lib/sanity';
import Hero from '../components/hero';

const contactQuery = groq`*[_type == "contactPage"][0]{
  title,
  header,
  eyebrow,
}`;

export default function Contact({ initialData, preview }) {
  const { data } = usePreviewSubscription(contactQuery, { initialData, enabled: preview });
  return (
    <Layout>
      <Head>
        <title>Contact | The Full Body Lab</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="/CopyTrial-Regular.woff" as="font" type="font/woff" crossOrigin />
      </Head>
      <Hero data={data} />
    </Layout>
  );
}
export async function getStaticProps({ preview = false }) {
  const data = await querySanity(contactQuery);

  return {
    props: {
      initialData: data,
      preview
    }
  };
}
