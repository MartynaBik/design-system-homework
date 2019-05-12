import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Menu } from 'antd';

import About from './components/About/About';
import Comments from './components/Comments/Comments';
import Contacts from './components/Contacts/Contacts';

const { Header, Content, Footer } = Layout;

class App extends React.Component {
    render() {

        return (
            <Router>
                <Layout className="layout">
                    <Header>
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['1']}
                            style={{ lineHeight: '64px' }}
                        >
                            <Menu.Item key="1">
                                Apie mus
                                <Link to="/" />
                            </Menu.Item>
                            <Menu.Item key="2">
                                Komentarai
                                <Link to="/comments" />
                            </Menu.Item>
                            <Menu.Item key="3">
                                Kontaktai
                                <Link to="/contacts" />
                            </Menu.Item>
                        </Menu>
                    </Header>

                    <Content style={{ padding: '0 50px' }}>
                        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                            <Route exact path="/" component={ About }/>
                            <Route path="/comments" component={ Comments }/>
                            <Route path="/contacts" component={ Contacts }/>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2019 Created by Martyna
                    </Footer>
                </Layout>

            </Router>
        );
    }
}

export default App;
