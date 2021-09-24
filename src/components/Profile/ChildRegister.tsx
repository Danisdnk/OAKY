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
    Avatar,
    DatePicker,
} from 'antd';
import { useHistory } from 'react-router';
import FormItem from 'antd/lib/form/FormItem';

export const ChildRegister = () => {

    const [form] = Form.useForm();

    const { Option } = Select;

    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 8 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
        },
    };



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

    return (
        <Row align="middle" wrap={true} style={{ alignItems: 'left' }}  >
            <Col style={{ textAlign: 'left' }}>
                <Form
                    form={form}
                    name="register"
                    onFinish={onFinish}
                    scrollToFirstError
                >

                    <Form.Item name="name" label="Nombre"
                        rules={[{ required: true, message: 'Porfavor ingresa tu nombre!', whitespace: true }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item name="date-picker" label="Fecha nacimiento"  rules={[{ type: 'object' as const, required: true, message: 'selecciona una fecha!' }]}  >
                        <DatePicker />
                    </Form.Item>

                    <Form.Item
                        name="select"
                        label="Grupo sanguineo"
                        hasFeedback
                        rules={[{ required: true, message: 'Porfavor ingresa grupo sanguineo!' }]}

                    >
                        <Select placeholder="Elegi un grupo sanguineo">
                            <Option value="A+">A+</Option>
                            <Option value="A-">A-</Option>
                            <Option value="B+">B+</Option>
                            <Option value="B-">B-</Option>
                            <Option value="AB+">AB+</Option>
                            <Option value="AB-">AB-</Option>
                            <Option value="O+">O+</Option>
                            <Option value="O-">O-</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item name="checkbox-group" label="Enfermedades Cronicas" rules={[{ required: true, message: 'Porfavor ingresa enfermedades' }]}
                    >
                        <Checkbox.Group>
                            <Row>
                                <Col span={8}>
                                    <Checkbox value="A" style={{ lineHeight: '32px' }}>
                                        Asma
                                    </Checkbox>
                                </Col>
                                <Col span={8}>
                                    <Checkbox value="B" style={{ lineHeight: '32px' }}>
                                        TDAH
                                    </Checkbox>
                                </Col>
                                <Col span={8}>
                                    <Checkbox value="C" style={{ lineHeight: '32px' }}>
                                        obesidad
                                    </Checkbox>
                                </Col>
                                <Col span={8}>
                                    <Checkbox value="D" style={{ lineHeight: '32px' }}>
                                        Celiaquia
                                    </Checkbox>
                                </Col>
                                <Col span={16}>
                                    <Checkbox value="E" style={{ lineHeight: '32px' }}>
                                        Intoleracia lactica
                                    </Checkbox>
                                </Col>
                                <Col span={8}>
                                    <Checkbox value="E" style={{ lineHeight: '32px' }}>
                                        Ninguna
                                    </Checkbox>
                                </Col>

                            </Row>
                        </Checkbox.Group>
                    </Form.Item>
                </Form>

            </Col>

        </Row>

    );
};