import React from 'react';
import Head from 'next/head';
import SafeArea from '../components/SafeArea';
import Header from '../components/Header';
import Footer from '../components/Footer';

function About(props) {
    return (
        <div className="page-full">
            <Head>
                <title>Home</title>
            </Head>

            <Header />

            <SafeArea>
                <div>About us. This is a secret.</div>
            </SafeArea>

            <Footer />
        </div>
    );
}

export default About;
