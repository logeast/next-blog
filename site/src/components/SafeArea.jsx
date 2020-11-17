import React from 'react';
import { Row, Col } from 'antd';
import classNames from 'classnames';

function SafeArea(props) {
    const { children, className } = props;
    return (
        <Row className={classNames('safe-area', className)} justify="center">
            <Col xs={23} sm={23} md={23} lg={23} xl={18}>
                {children}
            </Col>
        </Row>
    );
}

export default SafeArea;
