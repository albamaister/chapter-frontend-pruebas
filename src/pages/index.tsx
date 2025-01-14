import type {NextPage} from 'next'
import Head from 'next/head'
import Home from '../components/organisms/Home';

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Home/>
    </>
  )
}

export default HomePage
