import React, { useState, useEffect } from 'react';
import { Row, Col, Menu, Space } from 'antd';
import Link from 'next/link';
import Router from 'next/router';
import axios from 'axios';
import servicePath from '../config/apiUrl';
import SafeArea from './SafeArea';

const mockData = [
    { id: 1, name: '创意' },
    { id: 2, name: '手绘' },
    { id: 3, name: '技术' },
];
function TagsMenu(props) {
    const [tags, setTags] = useState(props.data || mockData);

    useEffect(() => {});

    const handleClick = (e) => {
        if (e.key === 'newest') {
            Router.push('blog/newest');
        } else {
            Router.push(`/blog/${e.key}`);
        }
    };

    return (
        <div className="tags-menu">
            <SafeArea>
                <Row type="flex" align="middle" justify="space-between">
                    <Col className="" span={12}>
                        <Menu mode="horizontal" onClick={handleClick}>
                            <Menu.Item key="newest">最新</Menu.Item>
                            {tags.map((item, indx) => {
                                return (
                                    <Menu.Item key={item?.type_name}>
                                        {item?.type_name}
                                    </Menu.Item>
                                );
                            })}
                        </Menu>
                    </Col>
                    <Col className="" span={8}>
                        search
                    </Col>
                </Row>
            </SafeArea>
        </div>
    );
}

export default TagsMenu;
