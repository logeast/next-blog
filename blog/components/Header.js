import React from 'react';
import { Row, Col, Menu, Icon } from 'antd';

export default function () {
    return (
        <section className="header">
            <Row type="flex" justify="center">
                <Col xs={24} sm={24} md={10} lg={15} xl={12}>
                    <span className="header-logo">Next Blog</span>
                    <span className="header-txt">Next Blog System.</span>
                </Col>

                <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
                    <Menu mode="horizontal">
                        <Menu.Item key="home">
                            <Icon type="home" />
                            HOME
                        </Menu.Item>
                        <Menu.Item key="blog">
                            <Icon type="smile" />
                            BLOGS
                        </Menu.Item>
                        <Menu.Item key="about">
                            <Icon type="youtube" />
                            ABOUT
                        </Menu.Item>
                        <Menu.Item key="contact">
                            <Icon type="smile" />
                            CONTACT
                        </Menu.Item>
                    </Menu>
                </Col>
            </Row>
        </section>
    );
}
