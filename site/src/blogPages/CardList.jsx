import React from 'react';
import { Card, Row, Col, Menu, Affix, Avatar, Space, Button } from 'antd';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import SafeArea from '../components/SafeArea';
import CardGroup from '../components/CardGroup';

function TagsMenu(props) {
    const tags = [
        {
            value: '1',
            label: '最新',
        },
        {
            value: '2',
            label: '热门',
        },
        {
            value: '3',
            label: '艺术',
        },
        {
            value: '4',
            label: '技术',
        },
    ];
    return (
        <SafeArea>
            <Row type="flex" align="middle" justify="space-between">
                <Col className="" span={12}>
                    <Router>
                        <Menu
                            mode="horizontal"
                            defaultSelectedKeys={['newest']}
                        >
                            <Menu.Item key="newest">
                                <Link to="/blog">最新</Link>
                            </Menu.Item>
                            <Menu.Item key="popular">
                                <Link to="/blog/popular">热门</Link>
                            </Menu.Item>
                            <Menu.Item key="art">
                                <Link to="/blog/art">艺术</Link>
                            </Menu.Item>
                            <Menu.Item key="techonlogy">
                                <Link to="/blog/techonlogy">技术</Link>
                            </Menu.Item>
                        </Menu>
                    </Router>
                </Col>
                <Col className="" span={8}>
                    search
                </Col>
            </Row>
        </SafeArea>
    );
}

function CardList(props) {
    const { data = [1, 2, 3] } = props;

    return (
        <SafeArea>
            <TagsMenu />
            <CardGroup />
        </SafeArea>
    );
}

export default CardList;
