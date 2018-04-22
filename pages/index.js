import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Content from './Container/Content'
const Index = () => (
    <div>
        <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
            <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css" />
            <link href="http://fonts.googleapis.com/css?family=Anton|Righteous|Inconsolata" rel="stylesheet"/>
            <link href="/static/b.css" rel="stylesheet"/>
        </Head>
        <Content />
        <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/js/materialize.min.js"></script>
    </div>
)

export default Index