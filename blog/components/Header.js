import React from "react";
import { Row, Col, Menu, Affix, Avatar, Space, Button } from "antd";
import SafeArea from "./SafeArea";
import Link from "next/link";

function Header() {
    return (
        <Affix offsetTop="0">
            <section className="header">
                <SafeArea>
                    <Row type="flex" align="middle" justify="space-between">
                        <Col className="header-left" span={3}>
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
                        </Col>

                        <Col className="header-center" span={8} flex="1">
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

                        <Col className="header-right" span={8}>
                            <Space size="large">
                                <Button type="primary">写文章</Button>
                                <Avatar
                                    icon={
                                        <img src="https://portrait.gitee.com/uploads/avatars/user/2682/8047784_logeast_1601777527.png"></img>
                                    }
                                />
                            </Space>
                        </Col>
                    </Row>
                </SafeArea>
            </section>
        </Affix>
    );
}

export default Header;
