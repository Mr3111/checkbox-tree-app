import { Breadcrumb, Layout } from 'antd';
import React, { useEffect, useState } from 'react';

import './index.css';

import './App.css';
import type { Children } from './types/tree';
import { getTreeData } from './utils';

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
    const [nodeList, setNodeList] = useState<Children>([]);
    useEffect(() => {
        fetch('./node_list')
            .then((res) => res.json())
            .then((data) => {
                setNodeList(getTreeData(data));
            })
            .catch();
    }, []);
    return (
        <Layout className="layout">
            <Header>
                <div className="logo">Checkbox Tree</div>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}></Breadcrumb>
                <div className="site-layout-content">
                    {JSON.stringify(nodeList, undefined, 2)}
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Design ©2022 Created by Rishab Mishra
            </Footer>
        </Layout>
    );
};

export default App;
