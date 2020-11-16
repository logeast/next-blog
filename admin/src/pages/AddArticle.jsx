import React, { useState, useEffect } from 'react';
import marked from 'marked';
import { Row, Col, Input, Select, Button, DatePicker, message } from 'antd';
import axios from 'axios';
import servicePath from '../config/apiUrl';

const { Option } = Select;
const { TextArea } = Input;

function AddArticle(props) {
    const [articleId, setArticleId] = useState(0); // 文章的ID，如果是0说明是新增加，如果不是0，说明是修改
    const [articleTitle, setArticleTitle] = useState(''); //文章标题
    const [articleContent, setArticleContent] = useState(''); //markdown的编辑内容
    const [markdownContent, setMarkdownContent] = useState('预览内容'); //html内容
    const [introducemd, setIntroducemd] = useState(); //简介的markdown内容
    const [introducehtml, setIntroducehtml] = useState('等待编辑'); //简介的html内容
    const [showDate, setShowDate] = useState(); //发布日期
    const [updateDate, setUpdateDate] = useState(); //修改日志的日期
    const [typeInfo, setTypeInfo] = useState([]); // 文章类别信息
    const [selectedType, setSelectType] = useState(); //选择的文章类别

    useEffect(() => {
        getTypeInfo();
    }, []);

    marked.setOptions({
        renderer: marked.Renderer(),
        gfm: true,
        pedantic: false,
        sanitize: false,
        tables: true,
        breaks: false,
        smartLists: true,
        smartypants: false,
    });

    const changeContent = (e) => {
        setArticleContent(e.target.value);
        let html = marked(e.target.value);
        setMarkdownContent(html);
    };

    const changeIntroduce = (e) => {
        setIntroducemd(e.target.value);
        let html = marked(e.target.value);
        setIntroducehtml(html);
    };

    const getTypeInfo = (e) => {
        axios({
            method: 'get',
            url: servicePath.getTypeInfo,
            withCredentials: true,
        }).then((res) => {
            setTypeInfo(res.data.data);
        });
    };

    const saveArticle = () => {
        if (!selectedType) {
            message.error('必须选择文章类别');
            return false;
        } else if (!articleTitle) {
            message.error('文章名称不能为空');
            return false;
        } else if (!articleContent) {
            message.error('文章内容不能为空');
            return false;
        } else if (!introducemd) {
            message.error('简介不能为空');
            return false;
        } else if (!showDate) {
            message.error('发布日期不能为空');
            return false;
        }
        // message.success('检验通过');

        console.log(new Date(showDate.replace('-', '/')).getTime() / 1000);
        const dataProps = {
            type_id: selectedType,
            title: articleTitle,
            content: articleContent,
            introduce: introducemd,
            // add_time: new Date(showDate.replace('-', '/')).getTime() / 1000,
            add_time: showDate,
            view_count: Math.ceil(Math.random() * 100) + 1000,
        };

        if (articleId === 0) {
            axios({
                method: 'post',
                url: servicePath.addArticle,
                data: dataProps,
                withCredentials: true,
                header: {
                    'Access-Control-Allow-Origin': '*',
                },
            }).then((res) => {
                setArticleId(res.data.insertId);
                if (res.data.isSuccess) {
                    message.success('文章保存成功');
                } else {
                    message.error('文章保存失败');
                }
            });
        } else {
            axios({
                method: 'post',
                url: servicePath.updateArticle,
                data: dataProps,
                withCredentials: true,
                header: {
                    'Access-Control-Allow-Origin': '*',
                },
            }).then((res) => {
                if (res.data.isSuccess) {
                    message.success('文章保存成功');
                } else {
                    message.error('文章保存失败');
                }
            });
        }
    };

    return (
        <div>
            <Row gutter={5}>
                <Col span={18}>
                    <Row gutter={10}>
                        <Col span={20}>
                            <Input
                                placeholder="请输入文章标题"
                                size="large"
                                onChange={(e) => {
                                    setArticleTitle(e.target.value);
                                }}
                            />
                        </Col>
                        <Col span={4}>
                            &nbsp;
                            <Select
                                placeholder="请选择文章类型"
                                size="large"
                                defaultValue={selectedType}
                                onChange={(value) => setSelectType(value)}
                            >
                                {typeInfo.map((item, index) => (
                                    <Option key={item.id} value={item.id}>
                                        {item.name}
                                    </Option>
                                ))}
                            </Select>
                        </Col>
                    </Row>
                    <br />
                    <Row gutter={10}>
                        <Col span={12}>
                            <TextArea
                                value={articleContent}
                                className="markdown-content"
                                rows={35}
                                onChange={changeContent}
                                onPressEnter={changeContent}
                                placeholder="文章内容"
                            />
                        </Col>
                        <Col span={12}>
                            <div
                                className="show-html"
                                dangerouslySetInnerHTML={{
                                    __html: markdownContent,
                                }}
                            ></div>
                        </Col>
                    </Row>
                </Col>

                <Col span={6}>
                    <Row>
                        <Col span={24}>
                            <Button size="large">暂存文章</Button>&nbsp;
                            <Button
                                type="primary"
                                size="large"
                                onClick={saveArticle}
                            >
                                发布文章
                            </Button>
                            <br />
                        </Col>
                    </Row>
                    <Col span={24}>
                        <br />
                        <TextArea
                            rows={4}
                            placeholder="文章简介"
                            onChange={changeIntroduce}
                        />
                        <br />
                        <br />
                        <div className="introduce-html"></div>
                    </Col>
                    <Col span={12}>
                        <div className="date-select">
                            <DatePicker
                                placeholder="请选择发布日期"
                                size="large"
                                onChange={(date, dateString) =>
                                    setShowDate(dateString)
                                }
                            />
                        </div>
                    </Col>
                </Col>
            </Row>
        </div>
    );
}
export default AddArticle;
