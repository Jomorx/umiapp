import { addCake } from '@/api/cake';
import { Button, Form, Input, Spin } from 'antd';
import React from 'react';
import { useRequest } from 'umi';
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 10, span: 12 },
};

const App: React.FC = () => {
  const [form] = Form.useForm();

  const { data, loading, error, run } = useRequest(addCake, { manual: true });

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Spin spinning={loading}>
      <Form {...layout} form={form} name="control-hooks" onFinish={run}>
        <Form.Item
          name="cateName"
          label="蛋糕名字"
          rules={[{ required: true }]}
        >
          <Input autoComplete="false" />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
        </Form.Item>
      </Form>
    </Spin>
  );
};

export default App;
