#### MVVM(Model-View-ViewModule)
1. M - 数据
2. V - 视图
3. VM - 数据和视图之间的桥梁，他有两个方向
   1. 一是将数据转化为视图，实现方式数据绑定
   2. 二是将视图转化为数据，实现方式事件监听
4. 双向绑定


#### MVC(Model-View-Controller)
1. M - 数据
2. V - 视图
3. C - 业务逻辑层
4. 单向通信

#### MVC和MVVM的区别
1. 本质区别不大，都是严重设计思想，VM就是由Controller演变来的
2. MVVM通过数据啦驱动视图层的显示而不是节点操作
3. mvc中Model和view是直接打交道的，而MVVM则是通过中间桥梁VM来同步的
4. MVVM主要解决了MVC中的大量DOM操作是页面性能降低的问题
