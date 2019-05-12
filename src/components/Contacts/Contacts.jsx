import React from 'react';
import '../../App.css';
import {
    Form, Input, Button, Typography
} from 'antd';
const { Title } = Typography;
const { TextArea } = Input;

class Contacts extends React.Component {

    render() {
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
                    span: 16,
                    offset: 8,
                },
            },
        };

        return(
            <div>
                <Title>Parašyk mums!</Title>
                <Form {...formItemLayout}>

                    <Form.Item label="Tavo el. paštas">
                        <Input />
                    </Form.Item>

                    <Form.Item label="Žinutė mums">
                        <TextArea rows={4} />
                    </Form.Item>

                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">Parašyk mums</Button>
                    </Form.Item>

                </Form>
            </div>
        );
    }
}

export default Contacts;
