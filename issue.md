#### 1、老师：您在实际项目中把组件的所有状态都交给redux管理了吗？ 还是组件间交互的状态放到redux中管理?
```
 redux 中的状态不仅是为了交互，还为了持久化，如果一个组件销毁后再重建还要保持某些状态，那么也放到 redux 里。除这两种外，可以放到组件里
```

#### 2、请问一下，为什么subscribe必须放在dispatch的前面，不然就无法监听store的变化
```
对，这两个调用都是同步的按顺序执行。subscribe先监听了，才能获得后面dispatch带来的store的变化。

```

#### 3、有的标签来自于react-router,有的来自于react-router-dom。这两者有什么具体的区别吗？
```
react-router-dom 顾名思义是和浏览器真实 dom 相关的，例如 BrowserRouter，而 react-router 则是跨平台（包括 NodeJS，React Native）都可运行的，例如 MemoryRouter。 在面向 Web 的开发中，一般引入 react-router-dom 即可。

```

#### 4、老师，react4多路由 刷新的时候会出现404的情况，需要op配合配置吗
```
这应该是服务器端没有做 history fallback, 可以在服务器端实现一下。或者前端使用 HashRouter 替代 BrowserRouter。

```

#### 5. 在react里面书写自定义标签，控制台报warning？
```
自定义标签改成用类名控制就可以了

```
#### 6. vue和react是怎么做数据双向绑定的？
* Object.definedProperty