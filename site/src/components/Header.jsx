import React from 'react';
import { Row, Col, Menu, Affix, Avatar, Space, Button } from 'antd';
import SafeArea from './SafeArea';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Header() {
    return (
        <Affix offsetTop="0">
            <section className="header">
                <SafeArea>
                    <Row type="flex" align="middle" justify="space-between">
                        <Col className="header-left" span={3}>
                            <Router>
                                <Link to="/">
                                    <Space align="center">
                                        <Avatar
                                            shape="square"
                                            size="large"
                                            icon={
                                                <img
                                                    src="../../public/logo.png"
                                                    alt="logo"
                                                ></img>
                                            }
                                        />
                                        <span className="header-logo">
                                            Next Blog
                                        </span>
                                    </Space>
                                </Link>
                            </Router>
                        </Col>

                        <Col className="header-center" span={8} flex="1">
                            <Menu
                                mode="horizontal"
                                defaultSelectedKeys={['home']}
                            >
                                <Router>
                                    <Menu.Item key="home">
                                        <Link to="/">主页</Link>
                                    </Menu.Item>
                                    <Menu.Item key="blog">
                                        <Link to="/blog">博客</Link>
                                    </Menu.Item>
                                    <Menu.Item key="about">
                                        <Link to="/about">关于</Link>
                                    </Menu.Item>
                                    <Menu.Item key="contact">
                                        <Link to="/contact">联系</Link>
                                    </Menu.Item>
                                </Router>
                            </Menu>
                        </Col>

                        <Col className="header-right" span={8}>
                            <Space size="large">
                                <Button type="primary">写文章</Button>
                                <Avatar
                                    icon={
                                        <img
                                            src="https://portrait.gitee.com/uploads/avatars/user/2682/8047784_logeast_1601777527.png"
                                            alt="avatar"
                                        ></img>
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
