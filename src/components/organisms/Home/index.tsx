import Image from 'next/image'
import { useEffect, useState } from 'react'
import {HomeWrapper} from './styles'
import { fetchPeople } from '../../../pages/api/hello';

const Home = () => {

  const [people, setPeople] = useState([])


  useEffect(() => {
    fetchPeople().then( (data) => setPeople(data.results) )
  }, [])

  console.log(people);
  

  return (
    <HomeWrapper>
      <ul>
        { people.map( (char) => (
          <li key={char.name}> {char.name} </li>
        ) )

        }
      </ul>
      {/* <main className={'main'}>
        <h1 className={'title'}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/index.tsx</code>
        </p>

        <div className={'grid'}>
          <a href="https://nextjs.org/docs" className={'card'}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={'card'}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={'card'}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={'card'}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={'footer'}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={'logo'}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16}/>
          </span>
        </a>
      </footer> */}



    </HomeWrapper>
  )
}

export default Home