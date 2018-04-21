import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Content from './Container/Content'
const Index = () => (
    <div>
        <Head>
            <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css" />
            <link href="http://fonts.googleapis.com/css?family=Anton|Righteous|Inconsolata" rel="stylesheet"/>
            <link href="/static/b.css" rel="stylesheet"/>
        </Head>
        <Content />
    </div>
)

export default Index