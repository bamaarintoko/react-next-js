import React from 'react';
import Head from 'next/head';
import Link from 'next/link'
const Index = () => (
    <div>
        <Head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css" />
            <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css" />
        </Head>
        <h1>Hi, new Next.js project</h1>
        Click{' '}
        <Link href="/about">
            <a>here</a>
        </Link>{' '}
        to read more
    </div>
)

export default Index