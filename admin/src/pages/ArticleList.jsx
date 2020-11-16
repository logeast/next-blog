import React, { useState, useEffect } from 'react';
import { List, Row, Col, Modal, message, Button, Switch } from 'antd';
import axios from 'axios';
import servicePath from '../config/apiUrl';
const { confirm } = Modal;

function ArticleList(props) {
    const [list, setList] = useState([]);

    useEffect(() => {
        getArticleList();
    }, []);

    const getArticleList = () => {
        axios({
            method: 'get',
            url: servicePath.getArticleList,
            withCredentials: true,
            header: {
                'Access-Control-Allow-Origin': '*',
            },
        }).then((res) => {
            setList(res.data.list);
        });
    };

    const deleteAtricle = (id) => {
        confirm({
            title: '确认删除吗',
            content: '删除将不可恢复',
            onOk() {
                axios(`${servicePath.deleteAtricle}/${id}`, {
                    withCredentials: true,
                }).then((res) => {
                    message.success('删除成功');
                    getArticleList();
                });
            },
            onCancel() {
                message.success('无改变');
            },
        });
    };

    const updateArticle = (id) => {
        props.history.push(`/index/add/${id}`);
    };

    return (
        <div>
            <List
                header={
                    <Row className="list-div" style={{ flex: 1 }}>
                        <Col span={8}>
                            <b>标题</b>
                        </Col>
                        <Col span={4}>
                            <b>类别</b>
                        </Col>
                        <Col span={4}>
                            <b>发布时间</b>
                        </Col>
                        <Col span={4}>
                            <b>浏览量</b>
                        </Col>

                        <Col span={4}>
                            <b>操作</b>
                        </Col>
                    </Row>
                }
                bordered
                dataSource={list}
                renderItem={(item) => {
                    return (
                        <List.Item>
                            <Row className="list-div" style={{ flex: 1 }}>
                                <Col span={8}>{item.title}</Col>
                                <Col span={4}>{item.type_name}</Col>
                                <Col span={4}>{item.add_time}</Col>
                                <Col span={4}>{item.view_count}</Col>

                                <Col span={4}>
                                    <Button
                                        type="primary"
                                        onClick={(id) => updateArticle(item.id)}
                                    >
                                        修改
                                    </Button>
                                    &nbsp;
                                    <Button
                                        onClick={() => deleteAtricle(item.id)}
                                    >
                                        删除
                                    </Button>
                                </Col>
                            </Row>
                        </List.Item>
                    );
                }}
            />
        </div>
    );
}

export default ArticleList;
