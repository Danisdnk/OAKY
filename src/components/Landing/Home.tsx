// import './App.less';
import { Layout, Typography, Row, Col, Image } from 'antd';
import { Banner } from './Banner';

import { ServicesCards } from './ServicesCards';

export const Home = () => {
  const { Header, Content, Footer } = Layout;
  return (
    <Layout >
      <Content>
        <Banner />
        <ServicesCards />
        <Row>
          <Col>
            <Image width={'100%'} preview={false} />
          </Col>
          <Col>
            <Typography.Title>
              ¿Porque elegirnos?
            </Typography.Title>
            <Typography.Paragraph >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui accusantium praesentium temporibus quibusdam? Quidem quaerat officiis, necessitatibus harum odit iusto suscipit sunt quia est, accusantium neque, veritatis aliquam quasi reiciendis.
              Officiis libero dolor nostrum. Tempora aliquid incidunt exercitationem libero consequatur dignissimos, reiciendis, mollitia dolore, id placeat dolores aspernatur quidem dolor vitae deserunt officiis? Sint fugit fuga fugiat reprehenderit iusto pariatur.
            </Typography.Paragraph>

          </Col>

        </Row>
      </Content>
    </Layout>
    )
}


