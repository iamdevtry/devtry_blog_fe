import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Table, Space } from 'antd';
import { EditTwoTone, DeleteTwoTone } from '@ant-design/icons';

import devtryBlogApi from '../../../api/devtryBlogApi';

const columns = [
    {
        key: 'Id',
        title: 'Title',
        dataIndex: 'title',
    },
    {
        title: 'Created At',
        dataIndex: 'created_at',
    },
    {
        title: 'Summary',
        dataIndex: 'summary',
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <Link to={`/admin/edit-post/${record.id}`}>
                    Edit
                    <EditTwoTone style={{ marginLeft: '4px' }} />
                </Link>
                <Link to={'#'}>
                    Delete
                    <DeleteTwoTone twoToneColor="#eb2f96" style={{ marginLeft: '4px' }} />
                </Link>
            </Space>
        ),
    },
];
const ListPost = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    const getListPost = () => {
        setLoading(true);
        devtryBlogApi
            .getPosts()
            .then((res) => {
                setData(res.data);
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
            });
    };

    useEffect(() => {
        getListPost();
    }, []);

    const onSelectChange = (newSelectedRowKeys) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
        selections: [
            Table.SELECTION_ALL,
            Table.SELECTION_INVERT,
            Table.SELECTION_NONE,
            {
                key: 'odd',
                text: 'Select Odd Row',
                onSelect: (changeableRowKeys) => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
                        if (index % 2 !== 0) {
                            return false;
                        }
                        return true;
                    });
                    setSelectedRowKeys(newSelectedRowKeys);
                },
            },
            {
                key: 'even',
                text: 'Select Even Row',
                onSelect: (changeableRowKeys) => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
                        if (index % 2 !== 0) {
                            return true;
                        }
                        return false;
                    });
                    setSelectedRowKeys(newSelectedRowKeys);
                },
            },
        ],
    };

    return (
        <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={data}
            rowKey={(record) => record.id}
        />
    );
};
export default ListPost;
