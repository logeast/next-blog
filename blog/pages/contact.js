import React from 'react';
import Head from 'next/head';
import SafeArea from '../components/SafeArea';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Contact(props) {
    return (
        <div className="page-full">
            <Head>
                <title>Home</title>
            </Head>

            <Header />

            <SafeArea>
                <div>Contact us. We are friends.</div>
            </SafeArea>

            <Footer />
        </div>
    );
}

export default Contact;
