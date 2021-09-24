
import { Button, PageHeader, Tabs, Descriptions, Statistic, Divider, Typography, Card, Col, Row, Modal } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import Meta from 'antd/lib/card/Meta';
import { useState } from 'react';
import add_user from "../../img/add_user.png";
import child from "../../img/child.png";
import { FaCog } from 'react-icons/fa';
import { ChildCard } from './ChildCard';
import { ChildRegister } from './ChildRegister';

export const Profile = () => {
    // const { TabPane } = Tabs;
    // const DemoBox = (props: any) => <p className={`height-${props.value}`}>{props.children}</p>;
    // const [position, setPosition] = useState('left');
    const renderContent = (column = 2) => (
        <Descriptions size="small" column={column}>
            <Descriptions.Item label="Created">Lili Qu</Descriptions.Item>
            {/* <Descriptions.Item label="Association">
                <a href="#">421421</a>
            </Descriptions.Item> */}
            <Descriptions.Item label="Creation Time">2017-01-10</Descriptions.Item>
            <Descriptions.Item label="Effective Time">2017-10-10</Descriptions.Item>
            <Descriptions.Item label="Remarks">
                Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
            </Descriptions.Item>
        </Descriptions>
    );

    const extraContent = (
        <div
            style={{
                display: 'flex',
                width: 'max-content',
                justifyContent: 'flex-start',
            }}
        >
            <Statistic
                title="Status"
                value="Pending"

            />
            <Statistic title="Price" prefix="$" value={568.08} />

            {/* <Image width={'20%'} src={background} preview={false} /> */}

        </div>

    );

    const Content = ({ children, extra }: { children: any, extra: any }) => (

        <div >
            <div className="main">{children}</div>
            <div className="extra">{extra}</div>
        </div>
    );

    const [modal2Visible, setModal2Visible] = useState(false)
    const modalVisible = () => {

    }
    return (
        // gutter={{ xs: 8, sm: 16, md: 8, lg: 8 }}
        <>
            <PageHeader
                className="site-page-header-responsive"
                onBack={() => window.history.back()}
                title="Perfil"
                subTitle="Gestion de usuarios"
                extra={[
                    <Button key="2" icon={<FaCog />}>__Modificar perfil</Button>
                ]}
            >
                <Content extra={extraContent}>
                    {

                        renderContent()

                    }</Content>
                <Divider>
                    <Typography.Title type="secondary" level={2}>
                        mis infantes
                    </Typography.Title>
                </Divider>

                <div className="site-card-wrapper">
                    <Row gutter={16}>

                        <Col span={5}>
                            <ChildCard img={child} nombre={"Hector"} edad={"2"} control={'20/11'} />
                        </Col>
                        <Col span={5}>
                            <Card style={{ height: "500px" }} bordered={true}
                                cover={<img alt="example" src={add_user} />}
                                actions={[
                                    <EditOutlined key="edit"
                                        onClick={() => { setModal2Visible(true) }}

                                    />]} >

                                <Meta title={'Agregar nuevo'} description={`Incorpora un nuevo niñe a tus controles`}
                                />
                            </Card>

                        </Col>

                    </Row>
                </div>
            </PageHeader>
            <Modal
                title="Incorpora un nuevo infante a tus controles"
                centered
                visible={modal2Visible}
                onOk={() => setModal2Visible(false)}
                onCancel={() => setModal2Visible(false)}
            >
             <ChildRegister/>
            </Modal>
        </>

    )


}
