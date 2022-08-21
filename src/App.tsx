import { Breadcrumb, Layout } from 'antd';
import React from 'react';

import './index.css';

import './App.css';

const { Header, Content, Footer } = Layout;

const App: React.FC = () => (
    <Layout className="layout">
        <Header>
            <div className="logo">Checkbox Tree</div>
        </Header>
        <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}></Breadcrumb>
            <div className="site-layout-content">Main content</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
            Design ©2022 Created by Rishab Mishra
        </Footer>
    </Layout>
);

export default App;
