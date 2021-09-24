
import { Button, Image, PageHeader, Tabs, Descriptions, Statistic } from 'antd';
import { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import background from "../../img/child.png";
import { CalendarVaccine } from '../atoms/CalendarVaccine';
import { Percentile } from '../atoms/Percentile';

export const ChildDashboard = () => {
    const { TabPane } = Tabs;
    const DemoBox = (props: any) => <p className={`height-${props.value}`}>{props.children}</p>;
    const [position, setPosition] = useState('left');
    const renderContent = (column = 2) => (
        <Descriptions size="middle" column={column}>
            {/* <Descriptions.Item label="Association">
                <a href="#">421421</a>
            </Descriptions.Item> */}
            <Descriptions.Item  label="Nombre del Paciente">Jacinto Alvaro</Descriptions.Item>
            <Descriptions.Item label="Ultimo control pediatrico">
                20 de agosto del 2021
            </Descriptions.Item>
            <Descriptions.Item label="Fecha de nacimiento"> 29/9/2019</Descriptions.Item>
            <Descriptions.Item label="Grupo Sanguineo:"> B+</Descriptions.Item>
            <Descriptions.Item label="Enfermedades:"> TDAH</Descriptions.Item>
        
        </Descriptions>
    );
    //     nombre,
    //  fecha de nacimiento,
    //   grupo sanguíneo,
    //   alergias,
    //   enfermedades crónicas (celiaquía, intolerancia lactosa, diabetes, etc.

    const extraContent = (
        <div
            style={{
                display: 'flex',
                width: 'max-content',
                justifyContent: 'flex-start',
            }}
        >
            {/* <Statistic
                title="Status"
                value="Pending"

            />
            <Statistic title="Price" prefix="$" value={568.08} /> */}

            <Image width={'25%'} src={background} preview={false} />

        </div>

    );

    const Content = ({ children, extra }: { children: any, extra: any }) => (

        <div >
            <div className="main">{children}</div>
            <div className="extra">{extra}</div>
        </div>
    );

    return (
        <>
            <PageHeader
                className="site-page-header-responsive"
                onBack={() => window.history.back()}
                title="Volver a perfil"
                subTitle="Ficha del paciente"
                extra={[
                    <Button key="2">Operation</Button>,
                    <Button key="1" type="primary" icon={FaPlusCircle}>
                        Crear nuevo turno
                    </Button>
                ]}

                footer={
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="Percentiles" key="1" >

                            <Tabs tabPosition={'top'}>
                                <TabPane tab="Peso" key="11">
                                    <Percentile />
                                </TabPane>
                                <TabPane tab="Estatura" key="12">
                                    <Percentile />
                                </TabPane>
                                <TabPane tab="Perim Craneal" key="13">
                                    <Percentile />
                                </TabPane>
                                <TabPane tab="IMC" key="14">
                                    <Percentile />
                                </TabPane>
                            </Tabs>

                        </TabPane >
                        <TabPane tab="Citas Medicas" key="2" >
                            <CalendarVaccine />
                        </TabPane>
                        <TabPane tab="Calendario" key="3" >
                        <CalendarVaccine />
                        </TabPane>
                    </Tabs>
                }
            >
                <Content extra={extraContent}>
                    {

                        renderContent()
                    }</Content>

            </PageHeader>
 
        </>

    )

}
