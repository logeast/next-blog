import React from 'react';
import Head from 'next/head';
import { Row, Col, Breadcrumb, Icon, Affix } from 'antd';
import Header from '../components/Header';
import Author from '../components/Author';
import Advert from '../components/Advert';
import Footer from '../components/Footer';

import marked from 'marked';
import hljs from 'highlight.js';
import MarkNav from 'markdown-navbar';
import axios from 'axios';
import servicePath from '../config/apiUrl';

function Detail(props) {
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

    const ContentHTML = marked(props.content);

    return (
        <>
            <Head>
                <title>博客详细页</title>
            </Head>
            <Header />
            <Row className="comm-main" type="flex" justify="center">
                <Col
                    className="comm-left"
                    xs={24}
                    sm={24}
                    md={16}
                    lg={18}
                    xl={14}
                >
                    <div>
                        <div className="bread-div">
                            <Breadcrumb>
                                <Breadcrumb.Item>
                                    <a href="/">首页</a>
                                </Breadcrumb.Item>
                                <Breadcrumb.Item>{props.title}</Breadcrumb.Item>
                            </Breadcrumb>
                        </div>

                        <div>
                            <h1 className="detailed-title">{props.title}</h1>

                            <div className="list-icon center">
                                <span>
                                    <Icon type="calendar" /> 2019-06-28
                                </span>
                                <span>
                                    <Icon type="folder" /> 视频教程
                                </span>
                                <span>
                                    <Icon type="fire" /> 5498人
                                </span>
                            </div>

                            <div
                                className="detail-content"
                                dangerouslySetInnerHTML={{
                                    __html: ContentHTML,
                                }}
                            />
                        </div>
                    </div>
                </Col>

                <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
                    <Author />
                    <Advert />
                    <Affix offsetTop={5}>
                        <div className="detailed-nav comm-box">
                            <div className="nav-title">文章目录</div>
                            <MarkNav
                                className="article-menu"
                                source={props.content}
                                ordered={false}
                            />
                        </div>
                    </Affix>
                </Col>
            </Row>
            <Footer />
        </>
    );
}

Detail.getInitialProps = async (content) => {
    const id = content.query.id;
    const promise = new Promise((resolve) => {
        axios(`${servicePath.getArticleById}${id}`).then((res) => {
            console.log('====> 数据获取结果', res.data);
            resolve(res.data.data[0]);
        });
    });

    return await promise;
};

export default Detail;
