import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className="pt-0 text-white font-inter bg-[#121212] pb-8">
      <Head>
        <title>Kanha Korgaonkar</title>
        <meta name="description" content="Kanha Korgaonkar's Personal Site" />
        <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />

      </Head>

      <main className="min-h-screen pt-8 pb-0 flex-1 flex flex-col justify-between items-center">
        <h1 className="font-extrabold text-5xl">
          Kanha Korgaonkar
        </h1>

        <p className="pt-12 pb-12 pl-36 pr-36 justify-center text-center text-xl">
        Hey! I'm a 16 year old Indian American highschool junior, a technologist, and community builder.  I'm currently focusing on levelling up my skills as a developer and using them to build software that would change the world.
        </p>

        <h2 className="text-4xl">
          Stuff I'm Proud Of
        </h2>
        
        <br></br>

        <div className={styles.grid}>
          <a href="https://top.mlh.io/2022/profiles/kanha-korgaonkar" className="m-4 text-inherit hover:text-amber-500 hover:border-amber-500 text-left rounded-lg max-w-[300px] border-solid border p-6 no-underline">
            <h2 className="text-2xl">MLH Top 50 🏆 &rarr;</h2>
            <p className="text-xl"><br></br>I was named one of Major League Hacking’s (MLH) Top 50 Hackers in 2022. </p>
          </a>

          <a href="https://devpost.com/KanhaKorgaonkar" className="m-4 text-inherit hover:text-red-600 hover:border-red-600 text-left rounded-lg max-w-[300px] border-solid border p-6 no-underline">
            <h2 className="text-2xl">Hacking 🏗️ &rarr;</h2>
            <p className="text-xl"><br></br>I built a lot of cool projects at hackathons! Check out my DevPost here!. </p>
          </a>

          <a href="https://github.com/kanhakorgaonkar" className="m-4 text-inherit hover:text-green-400 hover:border-green-400 text-left rounded-lg max-w-[300px] border-solid border p-6 no-underline">
            <h2 className="text-2xl">Open Source 🌱 &rarr;</h2>
            <p className="text-xl"><br></br> I build open source software. Check out my GitHub here. </p>
          </a>

          <a href="https://www.einnews.com/pr_news/578929975/student-organized-hackathon-freyhacks-helps-500-students-around-the-world-break-into-the-tech-culture" className="m-4 text-inherit hover:text-blue-400 hover:border-blue-400 text-left rounded-lg max-w-[300px] border-solid border p-6 no-underline">
            <h2 className="text-2xl">FreyHacks 🌾 &rarr;</h2>
            <p className="text-xl"><br></br>I organized a hackathon. Check out our amazing work!</p>
          </a>

          <a href="https://dsc.gg/makerspace" className="m-4 text-inherit hover:text-pink-400 hover:border-pink-400 text-left rounded-lg max-w-[300px] border-solid border p-6 no-underline">
            <h2 className="text-2xl">makerspace 🌎 &rarr;</h2>
            <p className="text-xl"><br></br>I'm building a community! Join me and 200+ other makers at makerspace!</p>
          </a>

        </div>
        <br>
        </br>
        <br>
        </br>

      </main>

      <footer className={styles.footer}>
        &lt;/&gt; with ♡ by Kanha Korgaonkar
      </footer>
    </div>
  )
}

export default Home
