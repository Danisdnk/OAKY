import './App.less';
import { Layout, Menu, Breadcrumb, Typography, Row, Col, Image } from 'antd';
import { Banner } from './components/Landing/Banner';

import { ServicesCards } from './components/Landing/ServicesCards'
import Title from 'antd/lib/skeleton/Title';
function App() {

  const { Header, Content, Footer } = Layout;
  return (
    <Layout >
      <Header className="header">
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item title="OAKY">OAKY </Menu.Item>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">Ingresar😀</Menu.Item>
        </Menu>
      </Header>
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
          </Col>

        </Row>
      </Content>
    </Layout>
  );
}

export default App;
