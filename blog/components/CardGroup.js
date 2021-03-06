import React from 'react';
import { Card, Row, Col, Space } from 'antd';
import Link from 'next/link';
import _ from 'lodash';

const { Meta } = Card;

const mockData = [
    {
        id: 1,
        img:
            'http://static.simpledesktops.com/uploads/desktops/2020/06/28/Big_Sur_Simple.png.625x385_q100.png',
        type: '艺术',
        title: '陪你度过漫长岁月',
    },
    {
        id: 2,
        img:
            'http://static.simpledesktops.com/uploads/desktops/2015/03/02/mountains-on-mars.png.625x385_q100.png',
        type: '艺术',
        title: '陪你度过漫长岁月',
    },
    {
        id: 3,
        img:
            'http://static.simpledesktops.com/uploads/desktops/2020/06/28/Big_Sur_Simple.png.625x385_q100.png',
        type: '艺术',
        title: '陪你度过漫长岁月',
    },
    {
        id: 4,
        img:
            'http://static.simpledesktops.com/uploads/desktops/2012/03/08/shock.png.625x385_q100.png',
        type: '科技',
        title: '陪你度过漫长岁月',
    },
    {
        id: 5,
        img:
            'http://static.simpledesktops.com/uploads/desktops/2020/06/28/Big_Sur_Simple.png.625x385_q100.png',
        type: '科技',
        title: '一直到这故事说完',
    },
    {
        id: 6,
        img:
            'http://static.simpledesktops.com/uploads/desktops/2012/03/08/shock.png.625x385_q100.png',
        type: '艺术',
        title: '还有期待陪伴你',
    },
    {
        id: 7,
        img:
            'http://static.simpledesktops.com/uploads/desktops/2020/06/28/Big_Sur_Simple.png.625x385_q100.png',
        type: '科技',
        title: '一直到这故事说完',
    },
    {
        id: 8,
        img:
            'http://static.simpledesktops.com/uploads/desktops/2012/03/08/shock.png.625x385_q100.png',
        type: '艺术',
        title: '还有期待陪伴你',
    },
];

function CardGroup(props) {
    const { data = mockData } = props;
    const chunkData = _.chunk(data, 3);

    return (
        <section className="card-group">
            {chunkData.map((item, index) => {
                return (
                    <Row gutter={[24, 24]} key={index}>
                        {item.map((subitem, index) => (
                            <Col span={8} key={subitem.id}>
                                <Link
                                    href={{
                                        pathname: 'detail',
                                        query: { id: subitem.id },
                                    }}
                                >
                                    <Card
                                        hoverable
                                        cover={
                                            <img
                                                alt={subitem?.title}
                                                src={subitem?.thumb}
                                            />
                                        }
                                    >
                                        <Meta
                                            title={subitem?.title}
                                            description={
                                                <Space>
                                                    <span>
                                                        {subitem?.type_name}
                                                    </span>
                                                    <span>
                                                        {subitem?.add_time}
                                                    </span>
                                                </Space>
                                            }
                                        />
                                    </Card>
                                </Link>
                            </Col>
                        ))}
                    </Row>
                );
            })}
        </section>
    );
}

export default CardGroup;
