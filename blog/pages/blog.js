import React, { useState } from 'react';
import Head from 'next/head';
import { Row, Col, List, Icon, Breadcrumb } from 'antd';
import Header from '../components/Header';
import Author from '../components/Author';
import Advert from '../components/Advert';
import Footer from '../components/Footer';
import TagsMenu from '../components/TagsMenu';
import CardGroup from '../components/CardGroup';
import SafeArea from '../components/SafeArea';
import axios from 'axios';
import servicePath from '../config/apiUrl';

function Blog(props) {
    const [list, setList] = useState(props.list);
    const [tags, setTags] = useState(props.tags);

    return (
        <>
            <Head>
                <title>Blog</title>
            </Head>
            <Header />
            <SafeArea>
                <TagsMenu data={tags} />
                <CardGroup data={list} />
                <CardGroup />
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
