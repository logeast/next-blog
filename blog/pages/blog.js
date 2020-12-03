import React, { useState } from 'react';
import Head from 'next/head';
import { Row, Col, List, Icon, Breadcrumb, Space } from 'antd';
import Header from '../components/Header';
import Author from '../components/Author';
import Advert from '../components/Advert';
import Footer from '../components/Footer';
import TagsMenu from '../components/TagsMenu';
import CardGroup from '../components/CardGroup';
import SafeArea from '../components/SafeArea';
import axios from 'axios';
import servicePath from '../config/apiUrl';
import { useRouter } from 'next/router';

function Blog(props) {
    const [list, setList] = useState(props.list);
    const [tags, setTags] = useState(props.tags);
    const router = useRouter();

    return (
        <>
            <Head>
                <title>Blog</title>
            </Head>
            <Header />
            {/* <TagsMenu data={tags} /> */}
            <SafeArea className="gap-middle">
                <CardGroup data={list} />
            </SafeArea>
            <Footer />
        </>
    );
}

export async function getStaticProps() {
    const getArticleList = () => axios(`${servicePath.getArticleList}`);
    const getTypeInfo = () => axios(`${servicePath.getTypeInfo}`);

    const res = await axios.all([getArticleList(), getTypeInfo()]);

    return {
        props: {
            list: res[0].data,
            tags: res[1].data,
        },
    };
}

export default Blog;
