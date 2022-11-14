import { getStu } from '@/api/stu';
import { Space, Table, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useRequest } from 'umi';
import React, { useEffect, useState } from 'react';

interface DataType {
  // id: number;
  name: string;
  score: number;
  city: string;
  time: Date;
}

const App: React.FC = () => {
  // const [data,setData] = useState<DataType[]>([])
  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Score',
      dataIndex: 'score',
    },
    {
      title: 'City',
      dataIndex: 'city',
    },
    {
      title: 'Time',
      dataIndex: 'time',
      render: (time) => <>{time}</>,
    },
    {
      title: '操作',
      render: (text, record, index) => (
        <Space size="middle">
          <Button type="primary" size="small">
            编辑
          </Button>
          <Button type="primary" size="small" onClick={async (e) => {}} danger>
            删除
          </Button>
        </Space>
      ),
    },
  ];
  const init = async () => {};

  const { data, loading, error } = useRequest<{ data: DataType[] }>(getStu);

  return (
    <>
      <Table
        rowKey="name"
        columns={columns}
        dataSource={data}
        loading={loading}
      />
      ;
    </>
  );
};

export default App;
