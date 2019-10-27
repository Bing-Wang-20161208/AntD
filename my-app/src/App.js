import React from 'react';
import {
  Button,
  Spin,
  Pagination
} from 'antd';

class App extends React.Component {
  render () {
    return (
        <div>
          <Button type="primary">测试按钮</Button>
          <Spin>
            <div>dheuiwufsgfjksdhj</div>
          </Spin>
          <Pagination showSizeChanger showQuickJumper defaultCurrent={2} total={500} />
        </div>
      )
  }
}

export default App;
