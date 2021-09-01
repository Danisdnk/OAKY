import { Card, Col, Row } from 'antd';
import { FaChild } from 'react-icons/fa';

export const ServicesCards = () => {

    const { Meta } = Card;

    return (
        <Row justify="center" >
            <Col span={12} xs={16} sm={15} md={6} lg={8} xl={5}  >
                <Card
                    className='card__border'
                    hoverable
                    cover={<FaChild style={{ padding: '10%' }} />}>
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
            </Col>
            <Col span={12} xs={16} sm={15} md={6} lg={8} xl={5}  >
                <Card
                    className='card__border'
                    hoverable
                    cover={<FaChild style={{ padding: '10%' }} />}>
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
            </Col>
            <Col span={12} xs={16} sm={15} md={6} lg={8} xl={5} >
                <Card
                    className='card__border'
                    hoverable
                    cover={<FaChild style={{ padding: '10%' }} />}>
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
            </Col>
        </Row>


    )
}
