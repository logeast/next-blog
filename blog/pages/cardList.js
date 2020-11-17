import React, { useState } from "react";
import Head from "next/head";
import { Row, Col, List, Icon, Breadcrumb } from "antd";
import Header from "../components/Header";
import Author from "../components/Author";
import Advert from "../components/Advert";
import Footer from "../components/Footer";

function CardList() {
    const [mylist, setMylist] = useState();

    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <Header />
            <Row className="comm-main" type="flex" justify="center">
                <Col className="comm-left" span={16}>
                    <div>
                        <div className="bread-div">
                            <Breadcrumb>
                                <Breadcrumb.Item>
                                    <a href="/">首页</a>
                                </Breadcrumb.Item>
                                <Breadcrumb.Item>视频列表</Breadcrumb.Item>
                            </Breadcrumb>
                        </div>

                        <List
                            itemLayout="vertical"
                            dataSource={mylist}
                            renderItem={(item) => (
                                <List.Item>
                                    <div className="list-title">
                                        {item.title}
                                    </div>
                                    <div className="list-icon">
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
                                    <div className="list-context">
                                        {item.context}
                                    </div>
                                </List.Item>
                            )}
                        />
                    </div>
                </Col>

                <Col className="comm-right" span={8}>
                    <Author />
                    <Advert />
                </Col>
            </Row>
            <Footer />
        </>
    );
}

export default CardList;
