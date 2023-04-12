import { Popconfirm } from 'antd';
import dayjs from 'dayjs';
import React from 'react';

import MyButton from '@/components/MyButton';
import { DeleteProps } from '@/utils/hooks/useTableData';

interface Props {
  handleEdit: (id: string) => void;
  handleDelete: (id: string, props: DeleteProps) => void;
  deleteProps: DeleteProps;
}

export const useColumns = ({ handleEdit, handleDelete, deleteProps }: Props) => [
  {
    title: '日期',
    dataIndex: 'date',
    key: '_id',
    render: (timeLine: string) => <>{dayjs(timeLine).format('YYYY-MM-DD')}</>
  },
  {
    title: '日志内容',
    dataIndex: 'logContent',
    key: '_id',
    render: (arr: string[]) => (
      <div style={{ margin: 'auto', width: '500px' }}>
        {arr.map((item, index) => (
          <div key={index} style={{ padding: '5px 0' }}>
            {item}
          </div>
        ))}
      </div>
    )
  },
  {
    title: '操作',
    key: '_id',
    render: ({ _id }: { _id: string }) => (
      <>
        <MyButton
          style={{ marginRight: '10px' }}
          content='修改'
          small
          onClick={() => handleEdit(_id)}
        />
        <Popconfirm
          placement='bottomRight'
          title='确定要删除该日志吗？'
          onConfirm={() => handleDelete(_id, deleteProps)}
          okText='Yes'
          cancelText='No'
        >
          <MyButton content='删除' small danger />
        </Popconfirm>
      </>
    )
  }
];