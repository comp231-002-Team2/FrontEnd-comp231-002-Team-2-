import Head from 'next/head';
import Main from '@/components/Main'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us - Friendly Community</title>
        <meta name="description" content="Get in touch with us" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <h1>Contact Us</h1>
        <p>Feel free to get in touch with us!</p>
        <ul>
          <li>Email: info@friendlycommunity.com</li>
          <li>Phone: +1 (123) 456-7890</li>
        </ul>
      </Main>
    </>
  );
}