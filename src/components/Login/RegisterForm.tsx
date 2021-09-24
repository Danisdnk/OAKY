import React, { useState } from 'react';
import {
    Form,
    Input,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    Divider,
} from 'antd';
import { useHistory } from 'react-router';

export const RegisterForm = () => {

    const [form] = Form.useForm();

    const { Option } = Select;

    // const formItemLayout = {
    //     labelCol: {
    //         xs: { span: 24 },
    //         sm: { span: 8 },
    //     },
    //     wrapperCol: {
    //         xs: { span: 24 },
    //         sm: { span: 16 },
    //     },
    // };



    const tailFormItemLayout = {
        wrapperCol: {
            xs: {
                span: 24,
                offset: 0,
            },
            sm: {
                span: 24,
                offset: 0,
            },
            md: {
                span: 24,
                offset: 0,
            },
            lg: {
                span: 24,
                offset: 0,
            },
            xl: {
                span: 24,
                offset: 0,
            },
            xxl: {
                span: 24,
                offset: 0,
            },
        },





        
    };
    const [log, setLog] = useState(false)

    const onFinish = (values: string) => {
        if (values != null || values !== "") {
            setLog(true);
        }
    };

    const history = useHistory();

    let iniciarSesion = () => {
        if (log === true) {
            let path = `/child-dashboard`;
            history.push(path);
        }
    };
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select style={{ width: 100 }}>
                <Option value="54">+54</Option>
                <Option value="598">+598</Option>
            </Select>
        </Form.Item>
    );

    return (
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
                            {/* <Avatar size={128} icon={<UserOutlined />} /> */}
                        </Divider>
                        <Divider>

                        </Divider>

                        <Form
                            // {...formItemLayout}
                            labelCol={{
                                span: 8,
                            }}
                            wrapperCol={{
                                span: 14,
                            }}
                            form={form}
                            name="register"
                            onFinish={onFinish}

                            initialValues={{
                                prefix: '54',
                            }}
                            scrollToFirstError
                        >

                            <Form.Item
                                name="name"
                                label="Nombre"
                                rules={[{ required: true, message: 'Porfavor ingresa tu nombre!', whitespace: true }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name="lastname"
                                label="Apellido"
                                rules={[{ required: true, message: 'Porfavor ingresa tu apellido!', whitespace: true }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                name="email"
                                label="E-mail"
                                rules={[
                                    {
                                        type: 'email',
                                        message: 'Porfavor ingresa tu E-mail',
                                    },
                                    {
                                        required: true,
                                        message: 'Porfavor ingresa tu E-mail',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name="telefono"
                                label="Numero telefonico"
                                rules={[{ required: true, message: 'Porfavor ingresa tu numero de telefono!' }]}
                            >
                                <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                            </Form.Item>

                            <Form.Item
                                name="password"
                                label="Contraseña"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Porfavor ingresa tu contraseña',
                                    },
                                ]}
                                hasFeedback
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item
                                name="confirm"
                                label="Reingresa tu contraseña"
                                dependencies={['password']}
                                hasFeedback
                                rules={[
                                    {
                                        required: true,
                                        message: 'Porfavor confirma tu contraseña!',
                                    },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (!value || getFieldValue('password') === value) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject(new Error('Las contraseñas no coinciden'));
                                        },
                                    }),
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>
                            <Form.Item
                                name="agreement"
                                valuePropName="checked"
                                rules={[
                                    {
                                        validator: (_, value) =>
                                            value ? Promise.resolve() : Promise.reject(new Error('Tenés que leer y aceptar las condiciones')),
                                    },
                                ]}
                                {...tailFormItemLayout}
                            >
                                <Checkbox>
                                    Declaro haber leido los <a href="">terminos y condiciones</a>
                                </Checkbox>
                            </Form.Item>
                            <Form.Item {...tailFormItemLayout}>
                                <Button type="primary" htmlType="submit" onClick={iniciarSesion}>
                                    Registrame!
                                </Button>
                            </Form.Item>
                        </Form>

                    </Col>

                </Row>


            </div>
        </   >

























    );
};