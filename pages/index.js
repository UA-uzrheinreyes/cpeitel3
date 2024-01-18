import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Howdy! My name is Uzrhein and I play with everything that revolves around the realms of design. If you want to create, make, or develop something eye-catching, I'm your guy!</p>
        <ul>
          <li>I expect that logical thinking will be crucial.</li>
          <li>I expect that this will be a subject where everyone can follow</li>
          <li>I expect that we will learn a lot of useful knowledge</li>
        </ul>
        <ol>
          <li>Being on Time</li>
          <li>Work Ethic</li>
          <li>Effort</li>
          <li>Body Language</li>
          <li>Energy</li>
          <li>Attitude</li>
          <li>Passion</li>
          <li>Being Coachable</li>
          <li>Doing Extra</li>
          <li>Being Prepared</li>
        </ol>
      </section>
    </Layout>
  );
}