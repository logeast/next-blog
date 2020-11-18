import React from 'react';
import { Row, Col, Menu } from 'antd';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch,
} from 'react-router-dom';
import SafeArea from '../components/SafeArea';

function TagsMenu(props) {
    const { url } = useRouteMatch();
    return (
        <SafeArea>
            <Row type="flex" align="middle" justify="space-between">
                <Col className="" span={12}>
                    <Menu mode="horizontal" defaultSelectedKeys={['newest']}>
                        <Menu.Item key="newest">
                            <Link to={url}>最新</Link>
                        </Menu.Item>
                        <Menu.Item key="popular">
                            <Link to={`${url}/popular`}>热门</Link>
                        </Menu.Item>
                        <Menu.Item key="art">
                            <Link to={`${url}/art`}>艺术</Link>
                        </Menu.Item>
                        <Menu.Item key="techonlogy">
                            <Link to={`${url}/technology`}>技术</Link>
                        </Menu.Item>
                    </Menu>
                </Col>
                <Col className="" span={8}>
                    search
                </Col>
            </Row>
        </SafeArea>
    );
}

export default TagsMenu;
