import React from 'react'
import Head from 'next/head'

const DefaultMetaTags = () => (
  <Head>
    <html lang="es" />
    <title>Susomejias | Web developer</title>
    <meta
      name="description"
      content="Portfolio de Susomejías, Desarrollador Web Full-Stack"
    />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, viewport-fit=cover"
    />
    <link rel="manifest" href="/manifest.json" />
    <meta name="msapplication-TileColor" content="#c8a3f4" />
    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    <meta name="theme-color" content="#c8a3f4" />
  </Head>
)

export default DefaultMetaTags
