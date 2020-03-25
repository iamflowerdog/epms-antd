## React基础

#### 将UI组织成组件树的形式 props + state ---> View
* React组件一般不提供方法，而是某种状态机
* React组件可以理解为一个纯函数
* 单向数据绑定

#### 受控组件 vs 非受控组件
* 受控组件：表单元素状态由使用者维护，必须包含 value 和 onChange 方法
* 非受控组件： 表单元素状态由自身维护，必须把当前的node节点标识出来，这样才能获取组件的值

#### getSnapshotBeforeUpdate 
* 在页面render之前调用，state已经更新
* 应用场景：获取render之前的DOM状态

#### componentDidUpdate
* 每次UI更新时被调用
* 典型场景：页面需要根据props变化重新获取数据
* 根据路由中文章详情id的变化，才重新发请求

#### shouldComponentUpdate 
* 决定Virtual DOM是否需要重绘
* 一般可以由PureComponent自动实现 （props和state是否有变化，来决定是否更新）
* 典型场景，性能优化

#### 高阶组件
* 高阶组件HOC High Order Component 复用组件逻辑的一种高级技巧，不是React API，一种组合React组成特性的设计模式
* 类似于Vue的slot方法
  1. 高阶组件接受组件作为参数，返回新的组件
  2. 免去多层组件传递，麻烦，

#### Context API 
* 类似于Vue的依赖注入，祖先Provider，子孙inject
* 用法 `let MyContext = React.createContext('defaultValue')`
```
<MyContext.Consumer>
  {value => /* 基于 context 值进行渲染*/}
</MyContext.Consumer>

```
* 这里，React组件也可以订阅到context变更，所以我们利用函数组件中完成订阅context
* 这需要函数作为子元素这种做法（通过其他render属性呢？），这个函数接收当前context的值，返回一个react节点。传递给函数的值等同于往上组件树离这个context最近的Provider提供的value值，如果没有对应的Provider，value参数等同于传递给creactContext()的defaultValue

#### 使用脚手架
* create-react-app rekit codesandbox.io

#### Redux
* 纯函数：它的输出结果完全取决于它的输入参数，函数内部不依赖任何外部参数和外部参数。
* 三个特性：
  1. Single Source of Truth
  2. 可预测性 state + action = new state
  3. 纯函数更新Store
  
#### immutable 不可变
* 性能优化（不用比较对象的值，只需要判断引用是否更改，不需要深沉次比对）
* 易于调试和追踪（store变化，可以看到前后状态变化）
* 易于推测（根据action推测）
  1. {...state, todos: [...state.todos, 'redux']}
  2. Object.assign({}, state, { todos: [...state.todos, 'redux']})
  3. immutability-helper 
  4. immer

#### React Router
* 声明式路由定义（和后端express对应，路由表，用一个tag声明）
* 动态路由（传统服务器对比，一旦定义，就是一个配置表，react只有在render时候才渲染）

#### router 三种方式
1. URL路径 
2. hash路由 --- 兼容老的浏览器
3. 内存路由 --- 浏览器url不改变，在react-router内存里面

#### React 前端单元测试简单
1. 虚拟dom可以在nodejs中运行
2. react 很少操作浏览器
3. redux隔离了状态管理，纯数据单元测试

#### 单元测试库
* jest jsdom 
* istanbul 测试覆盖率

#### eslint 
* airbnb-eslint
* prettier (自动帮助我们格式化代码)