import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Button, Row, Col, List, Icon } from 'antd';
import Header from '../components/Header';
import Author from '../components/Author';
import Advert from '../components/Advert';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';
import servicePath from '../config/apiUrl';

function Home(list) {
    const [mylist, setMylist] = useState(list.data);

    return (
        <>
            <Head>
                <title>Home</title>
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
                    <List
                        header={<div>最新日志</div>}
                        itemLayout="vertical"
                        dataSource={mylist}
                        renderItem={(item) => (
                            <List.Item>
                                <div className="list-title">
                                    <Link
                                        href={{
                                            pathname: '/detail',
                                            query: { id: item.id },
                                        }}
                                    >
                                        {item.title}
                                    </Link>
                                </div>
                                <div className="list-icon">
                                    <span>
                                        <Icon type="calendar" /> {item.add_time}
                                    </span>
                                    <span>
                                        <Icon type="folder" /> {item.type_name}
                                    </span>
                                    <span>
                                        <Icon type="fire" /> {item.view_count}人
                                    </span>
                                </div>
                                <div className="list-context">
                                    {item.introduce}
                                </div>
                            </List.Item>
                        )}
                    />
                </Col>

                <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
                    <Author />
                    <Advert />
                </Col>
            </Row>
        </>
    );
}

Home.getInitialProps = async () => {
    const promise = new Promise((resolve) => {
        axios(servicePath.getArticleList).then((res) => {
            console.log('====> 数据获取结果', res.data);
            resolve(res.data);
        });
    });

    return await promise;
};

export default Home;
