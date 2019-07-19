import React from 'react';
import './App.css';
import HeadFtnn from './components/head-ftnn';//头部组件
import FootFtnn from './components/foot-ftnn';//尾部组件
import Router from './router/router';//中间部分
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './stores/store';
class App extends React.Component {
  // constructor(){
  //   super();
  //   console.log(this.props.dispatch())  //传参数过去就行
  // }
  render() {
    return (
      <Provider store={store}>
        <HeadFtnn />
        <HashRouter>
          <Router />
        </HashRouter>
        <FootFtnn />
      </Provider>
    );
  }
}

export default App;

