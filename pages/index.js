import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Content from './Container/Content'
const Index = () => (
    <div>
        <Head>
            <title>malaskoding.com</title>
            <meta name="viewport" content="width=device-width,initial-scale=1"/>
            <meta property="og:type" content="website"/>
            <meta property="og:url" content="http://malaskoding.com/"/>
            <meta property="og:title" 			content="We believe in a diverse range of talent and personality brings creative skills and ideas to the web." />
            <meta property="og:description" 	content="we designing anything you want, we open minds, we make your app design to the next level"/>


            <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css" />
            <link href="http://fonts.googleapis.com/css?family=Anton|Righteous|Inconsolata" rel="stylesheet"/>
            <link href="/static/b.css" rel="stylesheet"/>
            <link rel="icon" type="image/x-icon" href="/static/favicon.png" />
        </Head>
        <Content />
        <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/js/materialize.min.js"></script>
    </div>
)

export default Index