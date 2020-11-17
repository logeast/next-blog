import React from 'react';
import { Row, Col, Menu, Affix, Avatar, Space } from 'antd';
import Icon from '@ant-design/icons';
import SafeArea from './SafeArea';
import Link from 'next/link';

export default function () {
    return (
        <Affix offsetTop="0">
            <section className="header">
                <SafeArea>
                    <Row type="flex" align="middle" justify="space-between">
                        <Col className="header-left" span={8}>
                            <a href="/">
                                <Space align="center">
                                    <Avatar
                                        shape="square"
                                        size="large"
                                        icon={<img src="logo.png"></img>}
                                    />
                                    <span className="header-logo">
                                        Next Blog
                                    </span>
                                </Space>
                            </a>
                            {/* <span className="header-txt">私房，亦作四方。</span> */}
                        </Col>

                        <Col className="header-right" span={12} flex="flex-end">
                            <Menu mode="horizontal" defaultActiveFirst>
                                <Menu.Item key="home">
                                    <Link href="/">主页</Link>
                                </Menu.Item>
                                <Menu.Item key="blog">
                                    <Link href="/blog">博客</Link>
                                </Menu.Item>
                                <Menu.Item key="about">
                                    <Link href="/about">关于</Link>
                                </Menu.Item>
                                <Menu.Item key="contact">
                                    <Link href="/contact">联系</Link>
                                </Menu.Item>
                            </Menu>
                        </Col>
                    </Row>
                </SafeArea>
            </section>
        </Affix>
    );
}
