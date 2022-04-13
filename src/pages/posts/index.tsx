import { GetStaticProps } from 'next'
import Head from 'next/head'

import Prismic from '@prismicio/client'
import { getPrismicClient } from '../../services/prismic'

import styles from './styles.module.scss'

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de abril de 2022</time>
            <strong>Código Limpo: reflexão e prática</strong>
            <p>Um conjunto de filosofias extremamente importantes e populares no ecossistema</p>
          </a>
          <a href="#">
            <time>12 de abril de 2022</time>
            <strong>Código Limpo: reflexão e prática</strong>
            <p>Um conjunto de filosofias extremamente importantes e populares no ecossistema</p>
          </a>
          <a href="#">
            <time>12 de abril de 2022</time>
            <strong>Código Limpo: reflexão e prática</strong>
            <p>Um conjunto de filosofias extremamente importantes e populares no ecossistema</p>
          </a>
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'publication')
  ], {
    fetch: ['publication.title', 'publication.content'],
    pageSize: 100,
  })

  return {
    props: {}
  }
}