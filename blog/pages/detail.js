import React from 'react';
import Head from 'next/head';
import { Row, Col, Breadcrumb, Affix } from 'antd';
import Icon from '@ant-design/icons';
import Header from '../components/Header';
import Author from '../components/Author';
import Advert from '../components/Advert';
import Footer from '../components/Footer';

import marked from 'marked';
import hljs from 'highlight.js';
import MarkNav from 'markdown-navbar';
import axios from 'axios';
import servicePath from '../config/apiUrl';
import SafeArea from '../components/SafeArea';

function Detail(props) {
    console.log('detail data', props.data);
    const renderer = new marked.Renderer();
    marked.setOptions({
        renderer: renderer,
        gfm: true,
        pedantic: false,
        sanitize: false,
        tables: true,
        breaks: false,
        smartLists: true,
        smartypants: false,
        highlight: function (code) {
            return hljs.highlightAuto(code).value;
        },
    });

    const ContentHTML = marked(props.data[0].content || '# title');

    return (
        <>
            <Head>
                <title>博客详细页</title>
            </Head>
            <Header />
            <SafeArea>
                <div
                    className="detail-content"
                    dangerouslySetInnerHTML={{
                        __html: ContentHTML,
                    }}
                />
            </SafeArea>
            <Footer />
        </>
    );
}

export async function getServerSideProps(context) {
    const id = context.query.id;
    const res = axios(`${servicePath.getArticleById}/${id}`);
    const { data } = await res;

    return {
        props: {
            data,
        },
    };
}

// Detail.getInitialProps = async (content) => {
//     const id = content.query.id;
//     const promise = new Promise((resolve) => {
//         axios(`${servicePath.getArticleById}${id}`).then((res) => {
//             resolve(res.data.data[0]);
//         });
//     });

//     return await promise;
// };

export default Detail;
