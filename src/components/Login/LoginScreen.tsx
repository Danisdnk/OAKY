
import { Form, Input, Button, Checkbox, Layout, Col, Row, Image, Divider, Typography } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
export const LoginScreen = () => {

    const { Header, Footer, Sider, Content } = Layout;

    const onFinish = (values: string) => {
        console.log('Received values of form: ', values);
    };
let nombre="Gustavo"
    return (
        // gutter={{ xs: 8, sm: 16, md: 8, lg: 8 }}
        <>

            <div style={{ maxHeight: '100%' }} >

                <Row align="middle" wrap={true} style={{ alignItems: 'center' }}  >

                    <Col xs={4} sm={4} md={10} lg={12} xl={13}>
                        <div style={{ height: "100vh", overflow: "hidden" }} >

                            <svg viewBox="0 0 300 150" preserveAspectRatio="none" style={{ height: "100%", width: "100%" }}>
                                <path d="M208.08,0.00 C211.34,80.42 262.02,75.98 193.85,262.98 L0.00,150.00 L0.00,0.00 Z" style={{ stroke: "none", fill: "#ff4029" }}>
                                </path>

                            </svg>
                        </div>
                    </Col>

                    <Col xs={20} sm={20} md={14} lg={12} xl={8} style={{ textAlign: 'center' }}>




                        <Divider>
                            <Avatar size={128} icon={<UserOutlined />}/>
                        </Divider>
                        <Divider>
                          Bienvenido {nombre}
                        </Divider>
                        <Form
                            style={{ paddingRight: '30%' }}
                            name="HOLA"
                            labelCol={{
                                span: 8,
                            }}
                            wrapperCol={{
                                span: 16,
                            }}
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                            autoComplete="off"
                        >
                            <Form.Item
                                label="Username"
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your username!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item
                                name="remember"
                                valuePropName="checked"
                                wrapperCol={{
                                    offset: 8

                                }}
                            >
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <Form.Item
                                wrapperCol={{
                                    offset: 8,

                                }}
                            >
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </Col>

                </Row>


            </div>
        </   >
    );
};