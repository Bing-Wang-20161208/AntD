import React from 'react';
import ReactDOM from 'react-dom';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { ConfigProvider } from 'antd';
import App from './App';

ReactDOM.render(
    <ConfigProvider locale = {zhCN} prefixCls = "wb">
        <App />
    </ConfigProvider>,
    document.getElementById('root')
);

