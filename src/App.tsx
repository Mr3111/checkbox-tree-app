import { InfoCircleOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Space, Typography } from 'antd';
import React, { useEffect, useRef, useState } from 'react';

import './index.css';

import './App.css';
import { JsonInput, Tree } from './components';
import type { Children } from './components/tree/types/Tree';
import getTreeData from './components/tree/utils/getTreeData';
import { nodes } from './constants/nodes';
import { localStorageGetItem, localStorageSetItem } from './utils';

const { Header, Content, Footer } = Layout;
const { Text } = Typography;

export type IError = {
    status: 'error' | 'warning' | '';
    message?: string;
};

const App: React.FC = () => {
    const LOCAL_STORAGE_KEY = 'treeData';
    const [nodeList, setNodeList] = useState<Children>([]);
    const [error, setError] = useState<IError | undefined>();
    const recoveryFlag = useRef(!!localStorageGetItem(LOCAL_STORAGE_KEY));
    const [json, setJson] = useState<string>(
        localStorage.getItem(LOCAL_STORAGE_KEY) ?? JSON.stringify(nodes)
    );

    useEffect(() => {
        if (error?.status === '') {
            setNodeList(getTreeData(JSON.parse(json)));
        }
        localStorageSetItem(LOCAL_STORAGE_KEY, json);
    }, [json]);

    function handleTransform() {
        if (error?.status === '') {
            setNodeList(getTreeData(JSON.parse(json)));
        }
    }
    return (
        <Layout className="layout">
            <Header>
                <div className="logo">Checkbox Tree</div>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}></Breadcrumb>
                <div className="site-layout-content">
                    <Space direction="vertical">
                        {recoveryFlag && (
                            <Space direction="horizontal">
                                <InfoCircleOutlined />
                                <Text type="secondary">
                                    Restored data from local storage
                                </Text>
                            </Space>
                        )}
                        <Space direction="vertical">
                            <JsonInput
                                value={json}
                                setValue={setJson}
                                handleTransform={handleTransform}
                                error={error}
                                setError={setError}
                            />
                        </Space>
                        <Tree treeData={nodeList} />
                    </Space>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Design ©2022 Created by Rishab Mishra
            </Footer>
        </Layout>
    );
};

export default App;
