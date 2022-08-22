import { Breadcrumb, Layout, Space } from 'antd';
import React, { useEffect, useState } from 'react';

import './index.css';

import './App.css';
import { JsonInput, Tree } from './components';
import type { Children } from './components/tree/types/Tree';
import getTreeData from './components/tree/utils/getTreeData';
import { nodes } from './constants/nodes';

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
    const [nodeList, setNodeList] = useState<Children>([]);
    const [json, setJson] = useState<string>(
        localStorage.getItem('json') ?? JSON.stringify(nodes)
    );
    useEffect(() => {
        setNodeList(getTreeData(JSON.parse(json)));
        localStorage.setItem('json', json);
    }, [json]);
    return (
        <Layout className="layout">
            <Header>
                <div className="logo">Checkbox Tree</div>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}></Breadcrumb>
                <div className="site-layout-content">
                    {/*{JSON.stringify(nodeList, undefined, 2)}*/}
                    <Space direction="vertical">
                        <Space direction="vertical">
                            <JsonInput handleSubmit={setJson} />
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
